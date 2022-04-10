import React from "react";
import "./searchSection.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchSection = () => {
  return (
    <div className="search-section">
      <input type="text" placeholder="Start your search" />
      <div className="search-button">
        <SearchRoundedIcon />
      </div>
    </div>
  );
};

export default SearchSection;
