import Navbar from "../../navbar/Navbar";
import Services from "../../services/Services";
import "./servicesPage.css";

const ServicesPage = () => {
  return (
    <div className="servicesPageContainer">
      <Navbar />
      <div className="servicesPageContentWrapper">
        <Services />
      </div>
    </div>
  );
};

export default ServicesPage;
