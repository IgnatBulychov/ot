import { useLocation } from "react-router-dom";
import Header from "../components/header/header";
import useAutentificatedMiddlware from "../middleware/authentificated";

type Props = {
  children: JSX.Element;
};

function DashboardLayout({ children }: Props) {
  const location = useLocation();
  useAutentificatedMiddlware(location.pathname);

  return (
    <div className="min-w-[320px]">
      <Header />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

export default DashboardLayout;
