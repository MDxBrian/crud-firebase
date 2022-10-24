const { Outlet, Link } = require("react-router-dom");

const Navbar = () => {
  return (
    <section>
      <nav className="nav nav-pills nav-justified">
        <Link to="/user-list" replace={true} className="nav-link">
          Group Chat
        </Link>
        <Link to="/user-list" replace={true} className="nav-link">
          User List
        </Link>
        <Link to="/user-list" replace={true} className="nav-link">
          Document Management
        </Link>
        <Link to="/user-list" replace={true} className="nav-link">
          Logout
        </Link>
      </nav>
      <Outlet />
    </section>
  );
};

export default Navbar;
