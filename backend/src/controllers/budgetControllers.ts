import { Request, Response } from "express";
import Budget from "../models/budgetModels";

export const getAllBudgets = async (req: Request, res: Response) => {
  try {
    const budgets = await Budget.find();
    return res.status(200).json({ budgets });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const addNewBudget = async (req: Request, res: Response) => {
  try {
    const budget = await Budget.create(req.body);
    return res.status(200).json({ budget });
  } catch (error) {
    return res.status(400).json(error);
  }
};
