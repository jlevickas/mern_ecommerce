import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "localhost";
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

export { PORT, HOST, MONGO_URI, JWT_SECRET };
