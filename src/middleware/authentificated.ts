import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

const authRoutes = ["/dashboard", "/dashboard/add"];
const nonAuthRoutes = ["/auth/sign-in", "/auth/sign-up"];

function useAutentificatedMiddlware(currentPath: string) {
  const isLoggedIn = useAppSelector((store) => store.auth.isLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    if (authRoutes.includes(currentPath) && !isLoggedIn) {
      navigate("/auth/sign-in");
    } else if (nonAuthRoutes.includes(currentPath) && isLoggedIn) {
      navigate("/dashboard");
    }
  }, []);
}

export default useAutentificatedMiddlware;
