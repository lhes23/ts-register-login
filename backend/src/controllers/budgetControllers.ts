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

export const getSingleBudget = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const budget = await Budget.find({ _id });
    return res.status(200).json({ budget });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateBudget = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const budget = await Budget.findByIdAndUpdate({ _id }, req.body);
    return res.status(200).json({ budget });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteBudget = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const budget = await Budget.findByIdAndDelete({ _id });
    return res.status(200).json({ message: `Successfully Deleted Id: ${_id}` });
  } catch (error) {
    return res.status(400).json(error);
  }
};
