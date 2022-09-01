import { useLocation } from "react-router-dom";
import useAutentificatedMiddlware from "../middleware/authentificated";
import Header from "../components/header/header";

type Props = {
  children: JSX.Element;
};

function AuthLayout({ children }: Props) {
  const location = useLocation();
  useAutentificatedMiddlware(location.pathname);

  return (
    <div className="min-w-[320px]">
      <Header />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

export default AuthLayout;
