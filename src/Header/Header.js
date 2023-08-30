import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <div className="plantLife">
        <a className="landScaping" href="https://localhost:3000">
          Plantlife Landscaping
        </a>
      </div>
      <div className="home">
        <Link to={'/'} className="alar">Home</Link>
        <Link to={'/services'}  className="alar">Services</Link>
        <Link to={'/about'}  className="alar">About</Link>
        <Link to={'/'}  className="alar">Contact</Link>
        <a href="https://localhost:3000"  className="alar">
          <img className="user" src={require("../pictures/user.png")} alt="" />
        </a>
        <a href="https://localhost:3000"  className="alar">Log In</a>
        <button className="firstButton">Call Today</button>
      </div>
    </nav>
  );
}
export default Header;