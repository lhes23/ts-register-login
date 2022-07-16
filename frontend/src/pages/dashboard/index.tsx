import BudgetList from "../../components/BudgetList";
import UsersList from "../../components/UsersList";

type Props = {};
const Dashboard = (props: Props) => {
  return (
    <div>
      Dashboard Index
      <UsersList />
      <BudgetList />
    </div>
  );
};
export default Dashboard;
