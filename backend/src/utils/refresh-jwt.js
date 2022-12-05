import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/config.js";

export const startTokenRefreshTimer = (req, res) => {
  // Set the refresh interval to 10 seconds before the access token expires
  const refreshInterval = req.user.exp - Date.now() - 10 * 1000;

  // Clear the existing refresh timer, if any
  clearTimeout(req.user.refreshTimer);

  // Set the new refresh timer
  req.user.refreshTimer = setTimeout(async () => {
    try {
      // Generate a new access token for the user
      const accessToken = jwt.sign({ email: req.user.email }, JWT_SECRET, {
        expiresIn: "15m",
      });

      // Save the new access token in memory on the server
      req.session.accessToken = accessToken;

      // Restart the token refresh timer with the new access token
      startTokenRefreshTimer(req, res);
    } catch (error) {
      // Handle errors if necessary
    }
  }, refreshInterval);
};

export default startTokenRefreshTimer;
