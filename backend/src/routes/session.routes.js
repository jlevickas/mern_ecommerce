import { Router } from "express";
import {
  userLogin,
  userLogout,
  userRegister,
  userRefreshToken,
} from "../controllers/session.controller.js";

const sessionRouter = Router();

sessionRouter.post("/login", userLogin);
sessionRouter.post("/logout", userLogout);
sessionRouter.post("/register", userRegister);
sessionRouter.post("/refresh", userRefreshToken);

export default sessionRouter;
