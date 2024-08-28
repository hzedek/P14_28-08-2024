import { Link } from "react-router-dom";

function Header( ) {

  return (
    <nav>
        <h1 className="title">HRnet</h1>
      <div className="container">
        <Link to={"/employee-list"}>
        <p>View Current Employees</p>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
