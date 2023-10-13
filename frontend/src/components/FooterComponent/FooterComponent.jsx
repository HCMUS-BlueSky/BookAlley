import React from "react";
import EmailIcon from "/images/Email.svg";
import FacebookIcon from "/images/Facebook.svg";
import InstagramIcon from "/images/Instagram.svg";
import TwitterIcon from "/images/Twitter.svg";

const FooterComponent = () => {
  return (
    <footer>
      <div className="footer-left">
        <div className="footer-info">
          <p>
            VNUHCM - UNIVERSITY OF SCIENCE FACULTY OF INFORMATION TECHNOLOGY
          </p>
          <p>CSC13002 - INTRO TO SOFTWARE ENGINEERING - 21CLC05 - GROUP 2</p>
        </div>

        <div className="footer-mail">
          <img src={EmailIcon} alt="" />
          <div className="mail-info">bookalleyus@gmail.com</div>
        </div>
      </div>
      <div className="footer-right">
        <div className="social-icons">
          <img src={FacebookIcon} alt="" />
          <img src={TwitterIcon} alt="" />
          <img src={InstagramIcon} alt="" />
        </div>
        <div className="footer-links">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
