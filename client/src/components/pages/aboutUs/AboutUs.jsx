import "./aboutUs.css";
import Navbar from "../../navbar/Navbar";

const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <Navbar />
      <div className="aboutUsContent">
        <h1>ABOUT US</h1>
        <p>
          We’re a cleaning company with a clear goal: to provide the best
          possible service to our clients.
        </p>
        <p>
          We have built strong relationships with our regular customers and
          we’re excited to welcome new ones!
        </p>
        <p>
          Feel free to check us out on Yelp by searching our company name. You
          will find real photos, customer reviews, and details about the
          services we offer.
        </p>
        <p>
          Whether you're already one of our valued clients or just considering
          us, we’re here for you.
        </p>
        <p>
          Customer satisfaction is our #1 priority, and we take pride in every
          home we care for.
        </p>
        <p>We’d love the chance to serve you too.</p>
        <p className="signature">
          Best regards, <br /> Elite Freshup Cleaning Services LLC
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
