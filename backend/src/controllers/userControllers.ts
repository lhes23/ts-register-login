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
  } catch (error) {}
};
