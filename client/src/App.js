import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import Book from "./components/pages/book/Book";
import Gallery from "./components/pages/gallery/Gallery";
import Service from "./components/pages/service/Service";
import ServicesPage from "./components/pages/servicesPage/ServicesPage";
import AuthPage from "./components/pages/loginSignup/AuthPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/book" element={<Book />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/service/:id" element={<Service />} />
          <Route path="/LoginSignup" element={<AuthPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

//  <Route path="/" element={<Home />} />
//           <Route path="/programs" element={<ServicesPage />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/articles" element={<Articles />} />
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="/calculator" element={<Book />} />
//           <Route path="/service/:id" element={<Service />} />
