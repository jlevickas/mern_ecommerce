import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/config.js";
import { startTokenRefreshTimer } from "../utils/refresh-jwt.js";

const authenticate = async (req, res, next) => {
  if (!req.session) {
    req.session = {};
  }

  // Check if the access token exists in the request
  if (!req.session.accessToken) {
    res.status(401).send("Access token not found");
    return;
  }

  // Verify the access token
  try {
    const decoded = jwt.verify(req.session.accessToken, JWT_SECRET);

    // Add the user's email and expiration time to the request object
    req.user.email = decoded.email;
    req.user.exp = decoded.exp;

    // Start the token refresh timer
    startTokenRefreshTimer(req, res);

    next();
  } catch (error) {
    res.status(401).send("Access token is not valid");
  }
};

export default authenticate;
