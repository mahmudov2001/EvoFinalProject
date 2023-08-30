import "./Footer.css";

function Footer() {
  return ( 
    <div className="nth9">
      <div className="nth9left">
        <p className="nth9LeftP1">Get In Touch with Plantlife</p>
        <p className="nth9LeftP2">
          © 2035 by Plantlife Landscaping. Powered and secured by
          <a href="https://tr.wix.com/?utm_campaign=vir_created_with" target="_blank" rel="noreferrer">Wix</a>
        </p>
      </div>
      <div className="nth9right">
        <div className="nth9RightP">
          <p className="nth9RightP1">
            <span>500 Terry Francine Street</span>
            <span>San Francisco, CA 94158</span>
          </p>
          <p className="nth9RightP2">
            <span>Mail: <a href="https://localhost:3000" rel="noreferrer">info@mysite.com</a></span>
            <span>Tel:123-456-7890</span>
          </p>
        </div>
        <div className="nth9A">
          <a href="https://www.facebook.com/wix" target="_blank" rel="noreferrer" >
            <img src={require("../pictures/facebook.png")} alt="" />
          </a>
          <a href="https://www.instagram.com/wix/?__coig_restricted=1" target="_blank" rel="noreferrer">
            <img src={require("../pictures/instagram.png")} alt="" />
          </a>
          <a href="https://www.yelp.com/" target="_blank" rel="noreferrer">
            <img src={require("../pictures/yelp.png")} alt="" />
          </a>
        </div>
      </div>
    </div>
  ) 
}

export default Footer;