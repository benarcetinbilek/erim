import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e) => {
    const target = e.target;
    if (target.tagName === "BUTTON") {
      const route = target.dataset.route;
      if (route) {
        navigate(route);
        setMenuOpen(false); // Menü kapansın tıklanınca
      }
    }
  };

  return (
    <div className="navbarContainer">
      <div
        className="navbarLogo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="/navbarLogo.jpg" />
      </div>

      <div
        className={`navbarLinks ${menuOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <button data-route="/">Home</button>
        <button data-route="/services">Services</button>
        <button data-route="/aboutus">About Us</button>
        <button data-route="/gallery">Gallery</button>
        <button data-route="/book">Book now →</button>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "line open" : "line"}></span>
        <span className={menuOpen ? "line open" : "line"}></span>
        <span className={menuOpen ? "line open" : "line"}></span>
      </div>
    </div>
  );
};

export default Navbar;
