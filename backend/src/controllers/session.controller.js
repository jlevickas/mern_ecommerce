import User from "../models/User.js";

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    res.send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
};

const userLogout = async (req, res) => {
  //TODO
};

const userRegister = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
};

export { userLogin, userLogout, userRegister };
