import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "localhost";
const MONGO_URI = process.env.MONGO_URI;

export { PORT, HOST, MONGO_URI };
