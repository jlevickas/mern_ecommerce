import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/config.js";

const authenticate = async (req, res, next) => {
  const accessToken = req.headers.authorization.split(" ")[1];
  const refreshToken = req.cookies.refreshToken;

  // Check if the access token exists in the request
  if (!refreshToken) {
    res.status(401).json("Refresh token not found");
    return;
  }

  // Verify the access token
  jwt.verify(accessToken, JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json("Access token expired");
    } else {
      next();
    }
  });
};

export default authenticate;
