import { useRef } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const handleClick = () => {
    if (ref?.current) {
        navigate('/#footerAnchor');
    }
}
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
        <div  onClick={handleClick}>
          <a  className="alar" ref={ref} href="/#footerAnchor">
            <p>Contact</p>
          </a>
        </div>
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