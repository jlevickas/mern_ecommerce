import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  if (!accessToken) {
    //ask server for access token
    const fetchAccessToken = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/session/refresh",
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          }
        );
        const data = await response.json();
        setAccessToken(data.accessToken);
        setUserInfo(data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAccessToken();
  }

  return (
    <UserContext.Provider
      value={{ accessToken, setAccessToken, userInfo, setUserInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};
