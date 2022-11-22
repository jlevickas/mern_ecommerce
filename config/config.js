import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "localhost";

export { PORT, HOST };
