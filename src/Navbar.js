import { useState } from "react";
import { Link } from "react-router-dom";
import MyModal from "./ShowModal";

const Navbar = () => {
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };

  const [showModal, setShowModal] = useState(false);

  const toggle = () => setShowModal(!showModal);

  return (
    <div>
      <nav className="navbar">
        <h1 className="navTitle">Product Management Dashboard</h1>
        <div className="links">
          <Link className="hideOnMobile" to="/">
            {" "}
            Home{" "}
          </Link>
          <span className="hideOnMobile" onClick={toggle}>
            Add Book
          </span>
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
            height="30"
            viewBox="0 -960 960 960"
            width="30"
            style={{ padding: "10px" }}
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
      {showModal && <MyModal toggle={toggle} />}
    </div>
  );
};

export default Navbar;
