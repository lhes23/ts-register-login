import { useEffect, useState } from "react";
import { getAllBudgets } from "../api/BudgetApi";

interface IBudgets {
  _id: string;
  user: string;
  budgetType: string;
  budgetName: string;
  budgetAmount: number;
  createdAt: string;
}
const BudgetList = () => {
  const [budgets, setBudgets] = useState<IBudgets[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllBudgets();
      if (!res.ok) {
        return console.log(`Something went wrong!`);
      }
      const data = await res.json();
      setBudgets(data.budgets);
    };
    fetchData();
  }, []);

  return (
    <div>
      BudgetList
      <table>
        <thead>
          <th>Budget Name</th>
          <th>Budget Amount</th>
          <th>Budget Type</th>
          <th>Budget Created At</th>
          <th>User</th>
        </thead>
        <tbody>
          {budgets?.map((budget) => (
            <tr key={budget._id}>
              <td>{budget.budgetName}</td>
              <td>{budget.budgetAmount}</td>
              <td>{budget.budgetType}</td>
              <td>{budget.createdAt}</td>
              <td>{budget.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default BudgetList;
