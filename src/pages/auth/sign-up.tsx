import { useAuth } from "../../hooks/auth";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import Btn from "../../components/common/buttons/btn";
import BtnLink from "../../components/common/buttons/btn-link";
import Card from "../../components/common/cards/card";
import AuthLayout from "../../layouts/AuthLayout";

function SignUpPage() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    signUp,
    processing,
  } = useAuth();

  return (
    <AuthLayout>
      <div className="container flex justify-center items-center h-[calc(100vh-65px)] drop-shadow-lg">
        <Card>
          <Card.Title>Регистрация</Card.Title>
          <form onSubmit={signUp}>
            <Card.Text>
              <input
                type="text"
                placeholder="Имя"
                className="rounded mb-4 p-2 focus:outline-none"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Email"
                className="rounded mb-4 p-2 focus:outline-none"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
              <input
                type="password"
                placeholder="Пароль"
                autoComplete="on"
                className="rounded p-2 focus:outline-none"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
              <div className="text-xs pt-2  text-gray-300  ">
                Уже есть аккаунт?{" "}
                <Link
                  to="/auth/sign-in"
                  className="hover:brightness-125 transition-all"
                >
                  Войти
                </Link>
              </div>
            </Card.Text>
            <Card.Actions>
              <BtnLink to="/" color="transparent">
                <AiOutlineArrowLeft />
              </BtnLink>
              <Btn color="transparent" type="submit" processing={processing}>
                Зарегистрироваться
              </Btn>
            </Card.Actions>
          </form>
        </Card>
      </div>
    </AuthLayout>
  );
}

export default SignUpPage;
