import "./Navbar.css"
import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>AuthConnect</h2>
      </div>

      <div className="nav-buttons">
        <button className="login-btn"> <Link to="./login"> Login</Link></button>
        <button className="signup-btn"><Link to="./signup"> Sign up</Link></button>
      </div>
    </nav>
  );
}

export default Navbar;