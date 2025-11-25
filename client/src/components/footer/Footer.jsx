import { useNavigate } from "react-router-dom";
import {
  BaselineAlternateEmail,
  TravelMapLocationPinNavigationMapMapsPinGpsLocation,
  TwotonePhoneInTalk,
  Facebook,
  SomeInstagram,
  TwitterXFill,
  Yelp,
} from "../icons/icons";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = [
    { name: "Services", url: "/services" },
    { name: "About Us", url: "/aboutus" },
    { name: "Gallery", url: "/gallery" },
    { name: "Book now", url: "/book" },
  ];

  return (
    <div className="footerContainer">
      <div className="footeLogo">
        <img src="/logo.jpg" />
      </div>
      <div className="footerLinks">
        <div className="footerLinksWrapper">
          {footerLinks.map((link, i) => {
            return (
              <p
                onClick={() => {
                  navigate(`${link.url}`);
                }}
              >
                {link.name}
              </p>
            );
          })}
        </div>
        <div className="footerLinksCopyright">
          <p>
            © {new Date().getFullYear()} Elite Fresh Up. All rights reserved.
          </p>
        </div>
      </div>
      <div className="footerContact">
        <h1>CONTACT US</h1>
        <div className="footerContactUs">
          <TwotonePhoneInTalk />

          <p>+1 855 551 5445</p>
        </div>
        <div className="footerContactUs">
          <BaselineAlternateEmail />

          <p>elitefreshup@gmail.com</p>
        </div>
        <div className="footerContactUs">
          <TravelMapLocationPinNavigationMapMapsPinGpsLocation />

          <p>Los Angeles, California</p>
        </div>
        <div className="footerContactUs links" style={{ cursor: "pointer" }}>
          {/* <SomeInstagram />{" "} */}
          <Yelp
            onClick={() =>
              window.open(
                "https://www.yelp.com/biz/elite-freshup-cleaning-services-los-angeles?uid=goF9bAjLJJ-0h8Jhqm2JHg&utm_source=ishare"
              )
            }
          />
          Yelp
        </div>
      </div>
    </div>
  );
};

export default Footer;
