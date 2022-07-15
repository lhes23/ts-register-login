import { Link } from "react-router-dom";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};
export default Navbar;
