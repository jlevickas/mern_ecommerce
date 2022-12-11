import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import AuthModal from "../components/AuthModal";

const NavBar = () => {
  const { accessToken, userInfo } = useContext(UserContext);
  return (
    <div>
      {!accessToken ? (
        <AuthModal />
      ) : (
        <div>
          <p>Welcome {userInfo?.username}</p>
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default NavBar;
