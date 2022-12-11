import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import AuthModal from "../components/AuthModal";
import ProfileMenu from "./ProfileMenu";

const NavBar = () => {
  const { accessToken } = useContext(UserContext);
  return (
    <nav>
      {!accessToken ? (
        <AuthModal />
      ) : (
        <div>
          <ProfileMenu />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
