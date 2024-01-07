import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Product Management Dashboard</h1>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/create">Add New Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
