import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import Btn from "../../components/common/buttons/btn";
import BtnLink from "../../components/common/buttons/btn-link";
import Card from "../../components/common/cards/card";
import AuthLayout from "../../layouts/AuthLayout";

function SignInPage() {
  const { email, setEmail, password, setPassword, signIn, processing } =
    useAuth();

  return (
    <AuthLayout>
      <div className="container flex justify-center items-center h-[calc(100vh-65px)] box-shadow-lg">
        <Card>
          <Card.Title>Вход</Card.Title>
          <form onSubmit={signIn}>
            <Card.Text>
              <input
                type="text"
                placeholder="Почта"
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
              <div className="text-xs pt-2 text-gray-300">
                Не зарегистрированы?{" "}
                <Link
                  to="/auth/sign-up"
                  className="hover:brightness-125 transition-all"
                >
                  Регистрация
                </Link>
              </div>
            </Card.Text>
            <Card.Actions>
              <BtnLink to="/" color="transparent">
                <AiOutlineArrowLeft />
              </BtnLink>
              <Btn color="transparent" type="submit" processing={processing}>
                Войти
              </Btn>
            </Card.Actions>
          </form>
        </Card>
      </div>
    </AuthLayout>
  );
}

export default SignInPage;
