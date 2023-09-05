import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GetQuote from "../GetQuote/GetQuote"
function Home() {
  return (
    <>
      <Header />
      <div style={{width: "100%"}}>
        <div className="second">
          <h1 className="head1">Professional Landscaping Services</h1>
          <p className="paragraph1">
            From garden maintenance to cleanups <br />
            and repairs, we take great pride in our <br />
            work. For a free quote,{" "}
            <a className="a1" href="#contact">
              contact us
            </a>
            .
          </p>
        </div>
        <div className="motherFlowers"><img
            className="flowers"
            src={require("../pictures/flowers.png")}
            alt=""
          /></div>
        <GetQuote />
        <div className="nth4">
          <h2>Our Services</h2>
          <p>Lawn Care & Mowing</p>
          <hr className="hrs" style={{ borderWidth: 2 }} />
          <p>Landscape Design</p>
          <hr className="hrs" style={{ borderWidth: 2 }} />
          <p>Garden Planning</p>
          <hr className="hrs" style={{ borderWidth: 2 }} />
          <p>Hedges & Plants</p>
          <hr className="hrs" style={{ borderWidth: 2 }} />
          <button className="button2">View All Services</button>
        </div>
        <div className="nth5">
          <img className="img1" src={require("../pictures/rain.png")} alt="" />
          <img className="img2"
            src="https://static.wixstatic.com/media/c837a6_56b28448a283458e97700fa692465dcb~mv2.jpg/v1/fill/w_419,h_688,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_56b28448a283458e97700fa692465dcb~mv2.jpg"
            alt=""
          />
          <img className="img1"
            src={require("../pictures/master.png")}
            alt=""
          />
          <img className="img2"
            src="https://static.wixstatic.com/media/c837a6_8f2791b4e35e405fb987f49a2a8edbe9~mv2.jpg/v1/fill/w_419,h_688,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_8f2791b4e35e405fb987f49a2a8edbe9~mv2.jpg"
            alt=""
          />
        </div>
        <div className="nth6">
          <h2>Why Choose Us</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
        <div className="information">
          <p className="p1">On Time, Every Time</p>
          <p className="p2">Experienced Team Members</p>
          <p className="p3">Eco-Friendly</p>
          <p className="p4">Trusted and Insured</p>
        </div>

        <div className="nth7">
          <div className="nth7left">
            <h2>What Our Clients Say</h2>
          </div>

          <div className="nth7right">
            <div className="slider">
              <div className="slider-content">
                <div className="slider-item">
                  <blockquote>
                    “I'm a testimonial. Click to edit me and add text that says
                    something nice about you and your services.”
                  </blockquote>
                  <p>Kevin Schuster, Westwood Park</p>
                </div>
                <div className="slider-item">
                  <blockquote>
                    “I'm a testimonial. Click to edit me and add text that says
                    something nice about you and your services.”
                  </blockquote>
                  <p>Tilli Anderson, Noe Valley</p>
                </div>
                <div className="slider-item">
                  <blockquote>
                    “I'm a testimonial. Click to edit me and add text that says
                    something nice about you and your services.”
                  </blockquote>
                  <p>The Jacobs Family, Pacific Heights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nth8">
          <img
            className="nth8img"
            src={require("../pictures/garden.png")}
            alt=""
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
