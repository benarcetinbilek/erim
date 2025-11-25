import "./cleaningAreas.css";

const CleaningAreas = () => {
  const areas = [
    { location: "Orange County" },
    { location: "Ventura county" },
    { location: "South Bay" },
    { location: "Los Angeles County" },
  ];

  return (
    <div className="cleaningAreas">
      <h1>AREAS WE PROUDLY SERVİCE</h1>
      {/* <p>Elite Freshup cleaning is centrally located in San francisco</p> */}

      <div className="cleaningAreasWrapper">
        {areas.map((areas, i) => {
          return (
            <div key={i} className="cleaningArea">
              <div className="cleaningAreaImg">
                <img
                  src="/icons/location-pointer.svg"
                  alt="service areas "
                  className="cleaningAreaImg"
                />
              </div>
              <p>{areas.location}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CleaningAreas;
