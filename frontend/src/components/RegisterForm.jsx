import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username,
      email,
      password,
    };

    fetch("http://localhost:8080/api/session/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div id="registration-form">
      <Typography variant="h4">Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <TextField
          label="Email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
