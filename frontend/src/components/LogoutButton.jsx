import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Button } from "@mui/material";

const LogoutButton = () => {
  const { setAccessToken } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await fetch("http://localhost:8080/api/session/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });

      await setAccessToken(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default LogoutButton;
