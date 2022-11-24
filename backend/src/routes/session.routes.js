import { Router } from "express";
import {
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/session.controller.js";

const sessionRouter = Router();

sessionRouter.post("/login", userLogin);
sessionRouter.post("/logout", userLogout);
sessionRouter.post("/register", userRegister);

export default sessionRouter;
