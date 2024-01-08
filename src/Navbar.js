import { Link } from "react-router-dom";

const Navbar = () => {
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };

  return (
    <div>
      <nav className="navbar">
        <h1 className="navTitle">Product Management Dashboard</h1>
        <div className="links">
          <Link className="hideOnMobile" to="/">
            {" "}
            Home{" "}
          </Link>
          <Link className="hideOnMobile" to="/create">
            Add Book
          </Link>
          <span className="hideOnDesktop" onClick={showSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              style={{ position: "absolute" }}
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </span>
        </div>
      </nav>
      <nav className="sidebar">
        <div onClick={hideSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
        <div className="sidelink">
          <Link to="/"> Home </Link>
        </div>
        <div className="sidelink">
          <Link to="/create">Add Book</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
