import React from "react";
import "./GetQuote.css";

export default function GetQuote() {
    return (
        <div id="contact" className="third">
          <div className="thirdLeft">
            <h2>Get a Free Quote</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font
            </p>
          </div>
          <div className="thirdRight">
            <form className="form" action="">
              <div className="container">
                <div className="right1">
                  <label for="" className="labelHome">
                    First Name *
                    <input type="text" required className="inputHome" />
                  </label>

                  <label for="" className="labelHome">
                    City
                    <input type="text" className="inputHome" />
                  </label>

                  <label for="" className="labelHome">
                    Phone
                    <input type="number" className="inputHome" />
                  </label>
                </div>
                <div className="right2">
                  <label for="" className="labelHome">
                    Last Name *
                    <input type="text" className="inputHome" />
                  </label>

                  <label for="" className="labelHome">
                    Email *
                    <input type="email" required className="inputHome" />
                  </label>

                  <label for="" className="labelHome">
                    Select a Service
                    <select name="" id="" className="selectHome">
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
            <button id="buttonHome">Submit</button>
          </div>
        </div>
    )
}
