import { Schema, models, model } from "mongoose";

const BudgetSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    budgetType: { type: String, required: true },
    budgetName: { type: String, required: true },
    budgetAmount: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Budget = models?.Budget || model("Budget", BudgetSchema);

export default Budget;
