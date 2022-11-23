import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

const connectDatabase = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
};

export default connectDatabase;
