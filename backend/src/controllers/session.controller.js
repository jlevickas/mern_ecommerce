import User from "../models/User.js";
import { JWT_SECRET } from "../../config/config.js";
import jwt from "jsonwebtoken";

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    // Generate a refresh token for the user
    const refreshToken = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "30d",
    });

    // Generate an access token for the user
    const accessToken = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    // Save the refresh token as a cookie
    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    // Save the access token in memory on the server
    req.session.accessToken = accessToken;

    res.send({ success: true });
  } catch (error) {
    res.status(400).send(error);
  }
};

const userLogout = async (req, res) => {
  // Clear the access token from memory
  req.session.accessToken = null;

  // Delete the refresh token cookie
  res.clearCookie("refreshToken");

  res.send({ success: true });
};

const userRegister = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
};

const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  // Check if the refresh token is valid
  try {
    const decoded = jwt.verify(refreshToken, JWT_SECRET);

    // Generate a new access token for the user
    const accessToken = jwt.sign({ email: decoded.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    // Save the new access token in memory on the server
    req.session.accessToken = accessToken;

    res.send({ success: true });
  } catch (error) {
    res.status(401).send("Invalid refresh token");
  }
};

export { userLogin, userLogout, userRegister, refreshToken };
