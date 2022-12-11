import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { TextField, Button, Typography } from "@mui/material";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAccessToken, accessToken, setUserInfo } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    let user = {
      email,
      password,
    };

    const response = await fetch("http://localhost:8080/api/session/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    setAccessToken(data.accessToken);
    setUserInfo(data.user);
  }

  return (
    <div>
      <Typography variant="h4">Log In</Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default LoginForm;
