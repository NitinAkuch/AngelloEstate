import User from "../models/user.model.js";

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  const newUser = new User({ username, email, password });

  try {
    await newUser.save();
    res.status(201).json("New User Created Succesfully.!");
  } catch (error) {
    res.status(500).json("Error: " + error.message);
  }
};
