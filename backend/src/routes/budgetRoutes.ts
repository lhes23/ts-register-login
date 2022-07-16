import express from "express";
import {
  addNewBudget,
  deleteBudget,
  getAllBudgets,
  getSingleBudget,
  updateBudget,
} from "../controllers/budgetControllers";

const router = express.Router();

router.route("/").get(getAllBudgets).post(addNewBudget);
router
  .route("/:id")
  .get(getSingleBudget)
  .put(updateBudget)
  .delete(deleteBudget);

export default router;
