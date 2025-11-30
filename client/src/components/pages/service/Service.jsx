import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import "./service.css";
import DeepCleaningService from "./serviceComponents/deepCleaningService/DeepCleaningService";
import MoveInCleaningService from "./serviceComponents/MoveInCleaningService/MoveInCleaningService";
import MoveOutCleaningService from "./serviceComponents/MoveOutCleaningService/MoveOutCleaningService";
import AirbnbCleaningService from "./serviceComponents/AirbnbCleaningService/AirbnbCleaningService";
import WindowCleaningService from "./serviceComponents/WindowCleaningService/WindowCleaningService";
import StandardCleaningService from "./serviceComponents/StandardCleaningService/StandardCleaningService";
import SpecialEventCleaningService from "./serviceComponents/SpecialEventCleaningService/SpecialEventCleaningService";
import RecurringCleaningService from "./serviceComponents/RecurringCleaningService/RecurringCleaningService";
import BathroomCleaningService from "./serviceComponents/RoomBasedCleaningServices/BathroomCleaningService";
import BedroomCleaningService from "./serviceComponents/RoomBasedCleaningServices/BedroomCleaningService";
import KitchenCleaningService from "./serviceComponents/RoomBasedCleaningServices/KitchenCleaningService";
import LivingAreaCleaningService from "./serviceComponents/RoomBasedCleaningServices/LivingAreaCleaningService";
import ApartmentCleaningService from "./serviceComponents/ExtraCleaningServices/ApartmentCleaningService";
import HolidayCleaningService from "./serviceComponents/ExtraCleaningServices/HolidayCleaningService";
import OneTimeCleaningService from "./serviceComponents/ExtraCleaningServices/OneTimeCleaningService";
import SameDayCleaningService from "./serviceComponents/ExtraCleaningServices/SameDayCleaningService";
import SmallBusinessCleaningService from "./serviceComponents/ExtraCleaningServices/SmallBusinessCleaningService";
import SpringOrFallCleaningService from "./serviceComponents/ExtraCleaningServices/SpringOrFallCleaningService";

const services = [
  {
    id: 0,
    header: "Deep Cleaning Services",
    description: <DeepCleaningService />,
    src: "/assets/1.jpg",
  },
  {
    id: 1,
    header: "One Time Cleaning",
    description: <OneTimeCleaningService />,
    src: "/assets/2.jpg",
  },
  {
    id: 2,
    header: "Spring or Fall Cleaning",
    description: <SpringOrFallCleaningService />,
    src: "/assets/3.jpg",
  },
  {
    id: 3,
    header: "Same Day Cleaning",
    description: <SameDayCleaningService />,
    src: "/assets/4.jpg",
  },
  {
    id: 4,
    header: "Move-Out Cleaning",
    description: <MoveOutCleaningService />,
    src: "/assets/5.jpg",
  },
  {
    id: 5,
    header: "Recurring Cleaning",
    description: <RecurringCleaningService />,
    src: "/assets/6.jpg",
  },
  {
    id: 6,
    header: "Small Business Cleaning",
    description: <SmallBusinessCleaningService />,
    src: "/assets/7.jpg",
  },
  {
    id: 7,
    header: "Holiday Cleaning",
    description: <HolidayCleaningService />,
    src: "/assets/8.jpg",
  },
  {
    id: 8,
    header: "Apartment Cleaning",
    description: <ApartmentCleaningService />,
    src: "/assets/9.jpg",
  },
  {
    id: 9,
    header: "Move-In Cleaning",
    description: <MoveInCleaningService />,
    src: "/assets/10.jpg",
  },
  {
    id: 10,
    header: "Window Cleaning Services",
    description: <WindowCleaningService />,
    src: "/assets/11.jpg",
  },
  {
    id: 11,
    header: "Living Area Cleaning Services",
    description: <LivingAreaCleaningService />,
    src: "/assets/12.jpg",
  },
  {
    id: 12,
    header: "Special Event Cleaning Services",
    description: <SpecialEventCleaningService />,
    src: "/assets/13.jpg",
  },
  {
    id: 13,
    header: "Kitchen Cleaning Services",
    description: <KitchenCleaningService />,
    src: "/assets/14.jpg",
  },
  {
    id: 14,
    header: "Bedroom Cleaning Services",
    description: <BedroomCleaningService />,
    src: "/assets/15.jpg",
  },
  {
    id: 15,
    header: "Airbnb Cleaning Services",
    description: <AirbnbCleaningService />,
    src: "/assets/16.jpg",
  },
  {
    id: 16,
    header: "Bathroom Cleaning Services",
    description: <BathroomCleaningService />,
    src: "/assets/17.jpg",
  },
  {
    id: 17,
    header: "Standart Cleaning Services",
    description: <StandardCleaningService />,
    src: "/assets/18.jpg",
  },
  {
    id: 18,
    header: "Bedroom Cleaning Services",
    description: <BedroomCleaningService />,
    src: "/assets/19.jpg",
  },
];

const Service = () => {
  const params = useParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let id = params.id;

  if (!id || isNaN(id) || id < 0 || id >= services.length) {
    id = 0;
  }

  const service = services.find((s) => s.id === parseInt(id));

  return (
    <div className="servicePageContainer">
      <div className="serviceNavbarWrapper">
        <Navbar />
      </div>
      <div className="servicePageContentWrapper">
        <div className="serviceExplanation">
          <h1>{service.header}</h1>
          {service.description}
        </div>

        {!isMobile && (
          <div className="serviceImg">
            <img src={service.src} alt="Service" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
