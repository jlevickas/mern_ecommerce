import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

userSchema.methods.comparePassword = async function (password) {
  const user = this;

  return await bcrypt.compare(password, user.password);
};

export default mongoose.model("User", userSchema);
