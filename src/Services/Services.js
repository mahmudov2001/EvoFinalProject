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
      {/* <div id="contact" className="Quote">
        <div className="QuoteLeft">
          <h2>Get a Free Quote</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font
          </p>
        </div>
        <div className="QuoteRight">
          <form className="form" action="">
            <div className="container">
              <div className="right1">
                <label for="" className="labelServices">
                  First Name *
                  <input type="text" required className="inputServices" />
                </label>

                <label for=""  className="labelServices">
                  City
                  <input type="text" className="inputServices"  />
                </label>

                <label for=""  className="labelServices">
                  Phone
                  <input type="text"  className="inputServices" />
                </label>
              </div>
              <div className="right2">
                <label for=""  className="labelServices">
                  Last Name *
                  <input type="text"  className="inputServices" />
                </label>

                <label for=""  className="labelServices">
                  Email *
                  <input type="email" className="inputServices"  />
                </label>

                <label for=""  className="labelServices">
                  Select a Service
                  <select name="" id="" className="selectServices">
                    <option selected disabled>
                      Choose an Option
                    </option>
                    <option value="">Lawn Care & Mowing</option>
                    <option value="">General Maintenance</option>
                    <option value="">Landspace Design</option>
                    <option value="">Other</option>
                  </select>
                </label>
              </div>
            </div>
          </form>
          <button id="buttonServices">Submit</button>
        </div>
      </div> */}
      <GetQuote />
      <Footer />
    </>
  );
}

export default Services;
