import React from "react";
import logo from "../../assets/Imgs/Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="flex_big_footer">
            <div className="one_text_footer">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="two_text_footer">
              <p>
                Contact us E: info@example.com P: +94 7670000000 A: 123 Hospital
                rd, Kalubowila, Dehiwela
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
