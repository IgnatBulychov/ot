import { BiUser, BiExit } from "react-icons/bi";

import { Link } from "react-router-dom";
import BtnLink from "../common/buttons/btn-link";
import Btn from "../common/buttons/btn";
import Logo from "./logo";
import { useAuth } from "../../hooks/auth";
import { useAppSelector } from "../../hooks/redux";

function Header() {
  const { logout } = useAuth();

  const isLoggedIn = useAppSelector((store) => store.auth.isLoggedIn);

  return (
    <header className="bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-500 drop-shadow-lg sticky top-0">
      <div className="container mx-auto h-[65px] px-2 lg:px-8 flex justify-between text-gray-600">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center">
          <BtnLink
            to={isLoggedIn ? "/dashboard/posts" : "/auth/sign-in"}
            color="transparent"
            type="icon"
          >
            <BiUser className="text-2xl" />
          </BtnLink>
          {isLoggedIn && (
            <Btn onClick={logout} color="transparent" icon>
              <BiExit className="text-2xl" />
            </Btn>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
