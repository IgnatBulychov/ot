import { api } from "../api/api";
import { FirebaseError, initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { User as FirebaseUser } from "@firebase/auth-types";

import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useNotifications } from "../components/common/notifications/notifications";
import { useAppDispatch } from "./redux";
import { authSlice } from "../store/slices/authSlice";
import { firebaseConfig } from "../constants/firebaseAuth";
import errors from "../constants/errors";
import { getErrorMessage } from "../utils/getErrorMessage";

import type { User } from "../types/User";

export function useAuth() {
  const { notify } = useNotifications();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setProcessing] = useState(false);

  const dispatch = useAppDispatch();

  const firebase = initializeApp(firebaseConfig);
  const auth = getAuth(firebase);

  const authStateChanged = (): Promise<FirebaseUser> =>
    new Promise((resolve, reject) => {
      onAuthStateChanged(
        auth,
        async (user) => {
          if (user) {
            resolve(user as FirebaseUser);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });

  const signUp = async (event: FormEvent) => {
    event.preventDefault();

    setProcessing(true);

    try {
      if (!username) {
        throw "Введите имя";
      }

      await createUserWithEmailAndPassword(auth, email, password);

      const user = await authStateChanged();

      await api.post(
        "",
        {
          query: `mutation MyMutation($id: String, $email: String, $username: String) {
                insert_users_nostalgia(objects: {email: $email, id: $id, username: $username}) {
                  returning {
                    email
                    id
                    username
                    last_seen
                  }
                }
              }`,
          variables: { id: user.uid, username, email },
        },
        {
          headers: {
            "content-type": "application/json",
            "x-hasura-role": "public",
          },
        }
      );

      const accessToken = await user.getIdToken(true);

      const userPayload: User = {
        username,
        email,
        accessToken,
      };

      dispatch(authSlice.actions.login(userPayload));

      localStorage.setItem("user", JSON.stringify(userPayload));
      navigate("/dashboard");
    } catch (e) {
      let text;
      if (e instanceof FirebaseError) {
        text = getErrorMessage(e.code as keyof typeof errors);
      } else {
        text = <string>e;
      }
      notify({
        type: "error",
        text: text,
      });
    } finally {
      setProcessing(false);
    }
  };

  const signIn = async (event: FormEvent) => {
    event.preventDefault();

    setProcessing(true);
    try {
      if (!email) {
        throw "Введите E-mail";
      }

      await signInWithEmailAndPassword(auth, email, password);

      const user = await authStateChanged();

      const accessToken = await user.getIdToken(true);

      const response = await api.post(
        "",
        {
          query: `query MyQuery($id: String) {
                users_nostalgia(where: {id: {_eq: $id}}) {
                  username
                }
              }`,
          variables: { id: user.uid },
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const userPayload: User = {
        username: response.data.data.users_nostalgia[0].username,
        email,
        accessToken,
      };

      dispatch(authSlice.actions.login(userPayload));

      localStorage.setItem("user", JSON.stringify(userPayload));
      navigate("/dashboard");
    } catch (e) {
      let text;
      if (e instanceof FirebaseError) {
        text = getErrorMessage(e.code as keyof typeof errors);
      } else {
        text = <string>e;
      }
      notify({
        type: "error",
        text: text,
      });
    } finally {
      setProcessing(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    dispatch(authSlice.actions.logout());
    navigate("/");
  };
  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    processing,
    signUp,
    signIn,
    logout,
  };
}
