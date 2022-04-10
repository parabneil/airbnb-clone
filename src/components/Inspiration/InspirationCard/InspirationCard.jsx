import React from "react";
import "./inspirationCard.css";

const InspirationCard = ({ place }) => {
  return (
    <div className="inspiration-card">
      <div className="place-snapshot">
        <img src={place.snapshot} alt={place.name} />
      </div>
      <div className="place-info">
        <div>
          <b>{place.name}</b>
        </div>
        <div>{place.distance}</div>
      </div>
    </div>
  );
};

export default InspirationCard;
