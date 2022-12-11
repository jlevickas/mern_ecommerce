import express from "express";
import { PORT, HOST } from "../config/config.js";
import productRouter from "./routes/product.routes.js";
import sessionRouter from "./routes/session.routes.js";
import connectDatabase from "./utils/connectDatabase.js";
import authenticate from "./middleware/sessionAuth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

connectDatabase();

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Credentials",
      "Access-Control-Allow-Origin",
    ],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/session", sessionRouter);
app.use("/api/products", productRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
