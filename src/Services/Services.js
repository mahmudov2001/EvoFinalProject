import "./Services.css";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import GetQuote from "../GetQuote/GetQuote";

function Services() {
  return (
    <>
      <Header />
      <div className="services">
        <div className="services1">
          <h1 className="servicesHead1">
            Our <br /> Services
          </h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
        <img src={require("../pictures/servicesPng1.png")} alt="" />
      </div>
      <div className="book">
        <div className="book1">
          <h1>Book a Service</h1>
          <hr />
          <a href={"https://fb.com"}>
            <h2>Lawn Care & Mowing</h2> <button>Book Now</button>
          </a>
          <hr />
          <a href={"https://fb.com"}>
            <h2>Land Space Design</h2> <button>Book Now</button>
          </a>
          <hr />
          <a href={"https://fb.com"}>
            <h2>Garden Planning</h2> <button>Book Now</button>
          </a>
          <hr />
          <a href={"https://fb.com"}>
            <h2>Hedges & Plants</h2> <button>Book Now</button>
          </a>
          <hr color="#2B3C2C" />
          <a href={"https://fb.com"}>
            <h2>Tree Planting</h2> <button>Book Now</button>
          </a>
          <hr color="#2B3C2C" />
          <a href={"https://fb.com"}>
            <h2>General Maintenance</h2> <button>Book Now</button>
          </a>
          <hr color="#2B3C2C" />
        </div>
      </div>
      <GetQuote />
      <Footer />
    </>
  );
}

export default Services;
