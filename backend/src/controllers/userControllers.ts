import { Request, Response } from "express";
import User from "../models/userModels";
import bcrypt from "bcrypt";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const users = await User.findById({ _id });
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const { email, username, password } = req.body;
    const user = await User.findByIdAndUpdate(
      { _id },
      { email, username, password }
    );
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    await User.findByIdAndDelete({ _id });
    return res
      .status(200)
      .json({ status: "Success", message: `Deleted id: ${_id}` });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    const checkUserName = await User.find({ username });
    const checkEmail = await User.find({ email });

    if (checkUserName || checkEmail) {
      return res
        .status(400)
        .json({ message: "Username or Email already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ email, username, password: hashPassword });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Password Incorrect" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error, message: "hello error" });
  }
};
