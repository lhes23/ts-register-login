import { Request, Response } from "express";
import User from "../models/userModels";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const addNewUser = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    const user = await User.create({ email, username, password });
    return res.status(200).json({ user });
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
