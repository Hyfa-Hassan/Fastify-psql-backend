import User from "../models/User.js";
import bcrypt from "bcryptjs";


export const addUser = async (req, reply) => {
  const data = req.body;
  try {
    const hPassword = await bcrypt.hash(data.password, 12)
    const user = await User.create({
      ...data,
      password: hPassword
    });
    // console.log(user, "user");
    reply.send({ status: true, data: user });
  } catch (e) {
    console.log(e);
    return reply.status(500).json({ status: false, message: "Something went wrong" });
  }
};


export const getUser = async (req, reply) => {
  try {
    const user = await User.findAll();
    console.log(user)
    reply.send({ status: true, data: user });
  } catch (e) {

    return reply
      .status(500)
      .json({ status: false, message: "Something went wrong" });
  }
};


export const deleteUser = async (req, reply) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return reply.status(404).json({ status: false, message: "User not found" });
    }

    await user.destroy();
    return reply.json({ status: true, message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return reply
      .status(500)
      .json({ status: false, message: "Something went wrong" });
  }
};

export const updateUser = async (req, reply) => {
  const userId = req.params.id;
  const { name, email_id, age, password } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return reply.status(404).json({ status: false, message: 'User not found' });
    }

    // Update user properties if provided in the request
    if (name) user.name = name;
    if (email_id) user.email_id = email_id;
    if (age) user.age = age;
    if (password) user.password = password;

    await user.save();
    reply.json({ status: true, message: 'User updated successfully', data: user });
  } catch (error) {
    console.error(error);
    reply.status(500).json({ status: false, message: 'Something went wrong' });
  }
};


