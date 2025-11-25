import CleaningAreas from "../../cleaningAreas/CleaningAreas";
import Comments from "../../comments/Comments";
import Footer from "../../footer/Footer";
import HomeGallery from "../../homeGallery/HomeGallery";
import SectionOne from "../../homeSection/sectionOne/SectionOne";
import Navbar from "../../navbar/Navbar";
import Services from "../../services/Services";
import "./home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <SectionOne />
      <Services />
      <CleaningAreas />
      <HomeGallery />
      <Comments />
      <Footer />
    </div>
  );
};

export default Home;
