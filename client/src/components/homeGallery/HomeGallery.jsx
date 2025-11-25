import { use } from "react";
import "./homeGallery.css";
import { useNavigate } from "react-router-dom";

const HomeGallery = () => {
  const navigate = useNavigate();
  return (
    <div className="homeGalleryContainer">
      <img
        src="/assets/1.jpg"
        alt="Gallery 1"
        onClick={() => {
          navigate("/gallery");
        }}
      />
      <img
        src="/assets/2.jpg"
        alt="Gallery 2"
        onClick={() => {
          navigate("/gallery");
        }}
      />
      <img
        src="/assets/3.jpg"
        alt="Gallery 3"
        onClick={() => {
          navigate("/gallery");
        }}
      />
    </div>
  );
};

export default HomeGallery;
