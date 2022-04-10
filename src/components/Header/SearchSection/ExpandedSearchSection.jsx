import React from "react";
import "./expandedSearchSection.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const ExpandedSearchSection = () => {
  return (
    <div className="expanded-search-section">
      <div className="search-tabs">
        <div>Places to stay</div>
        <div>Experiences</div>
        <div>Online Experiences</div>
      </div>
      <div className="expanded-search-bar">
        <div className="expanded-search-bar-tab">
          <label>Location</label>
          <input type="text" placeholder="Where are you going ?" />
        </div>
        <div className="expanded-search-bar-tab">
          <label>Check in</label>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="expanded-search-bar-tab">
          <label>Check out</label>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="expanded-search-bar-tab">
          <label>Guests</label>
          <input type="text" placeholder="Add guests" />
        </div>

        <div className="exp-search-button">
          <SearchRoundedIcon /> <div>Search</div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedSearchSection;
