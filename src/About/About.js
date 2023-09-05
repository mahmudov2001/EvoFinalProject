import "./About.css";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <div className="about1">
          <h1 className="aboutHead1">About Us</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
        <img src={require("../pictures/about.png")} alt="" />
        <div className="team">
          <h2>Meet the Team</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </div>
        <div className="teamUsers">
          <div className="user1">
            <img src={require("../pictures/user1.png")} alt="" />
            <h3>Ruth Owens</h3>
            <p>Chief Gardener</p>
            <hr />
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I'm a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="user2">
            <img src={require("../pictures/user2.png")} alt="" />
            <h3>Jerard Lewis</h3>
            <p>Landscape Designer</p>
            <hr />
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default About;
