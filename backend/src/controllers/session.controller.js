import User from "../models/User.js";
import { JWT_SECRET } from "../../config/config.js";
import jwt from "jsonwebtoken";

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Could not find user" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid login credentials" });
    }

    // Generate a refresh token for the user
    const refreshToken = jwt.sign(
      { email: user.email, username: user.username },
      JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    // Generate an access token for the user
    const accessToken = jwt.sign(
      { email: user.email, username: user.username },
      JWT_SECRET,
      {
        expiresIn: "15m",
      }
    );

    // Save the refresh token as a cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });

    res.send({
      accessToken,
      user: { email: user.email, username: user.username },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const userLogout = async (req, res) => {
  // Delete the refresh token cookie
  res.clearCookie("refreshToken");

  res.send({ success: true });
};

const userRegister = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({ success: true });
  } catch (error) {
    res.status(400).send(error);
  }
};

const userRefreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  // Check if the refresh token exists in the request
  if (!refreshToken) {
    res.status(401).json("Refresh token not found");
    return;
  }

  // Verify the refresh token
  jwt.verify(refreshToken, JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json("Refresh token expired");
      return;
    }

    // Generate a new access token
    const accessToken = jwt.sign(
      { email: decoded.email, username: decoded.username },
      JWT_SECRET,
      {
        expiresIn: "15m",
      }
    );

    // Save the refresh token as a cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });

    // Send the new access token
    res.send({
      accessToken,
      user: { email: decoded.email, username: decoded.username },
    });
  });
};

export { userLogin, userLogout, userRegister, userRefreshToken };
