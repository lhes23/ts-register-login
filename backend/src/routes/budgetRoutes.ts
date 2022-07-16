import express from "express";
import { addNewBudget, getAllBudgets } from "../controllers/budgetControllers";

const router = express.Router();

router.route("/").get(getAllBudgets).post(addNewBudget);

export default router;
