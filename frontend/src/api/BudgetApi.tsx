import { baseUrl } from ".";

const url = baseUrl + "/budgets";

export const getAllBudgets = async () => {
  return await fetch(url);
};
