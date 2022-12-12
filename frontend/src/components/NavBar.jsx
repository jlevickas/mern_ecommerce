import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import AuthModal from "../components/AuthModal";
import ProfileMenu from "./ProfileMenu";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const { accessToken } = useContext(UserContext);
  return (
    <nav>
      <Link to="/">Home</Link>
      <SearchBar />
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
