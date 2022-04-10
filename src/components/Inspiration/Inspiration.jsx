import React from "react";
import "./inspiration.css";
import { PlacesData } from "../../assets/places";
import InspirationCard from "./InspirationCard/InspirationCard";

const Inspiration = () => {
  return (
    <div className="inspiration">
      <div className="inspiration-title">
        <h1>Inspiration for your next trip</h1>
      </div>
      <div className="inspiration-cards">
        {PlacesData.map((place) => (
          <InspirationCard place={place} />
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
