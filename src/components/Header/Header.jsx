import React, { useEffect, useState } from "react";
import "./header.css";
import airbnbLogo from "../../assets/airbnb.png";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ExpandedSearchSection from "./SearchSection/ExpandedSearchSection";
import SearchSection from "./SearchSection/SearchSection";

const Header = () => {
  const [searchBar, setSearhBar] = useState(false);

  let timeout;
  let scroll = 0;

  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        if (window.scrollY === 0) {
          setSearhBar(false);
        } else {
          setSearhBar(true);
        }

        scroll = window.scrollY;
      }, 10);
    };
  }, []);

  return (
    <div className={`${searchBar ? "header-dark" : "header"}`}>
      <div className="logo-container">
        <img src={airbnbLogo} alt="airbnb" />
        <h2>airbnb</h2>
      </div>
      <div className="search-bar">
        {searchBar ? <SearchSection /> : <ExpandedSearchSection />}
      </div>
      <div className="header-right">
        <div>Become a host</div>
        <div>
          <LanguageRoundedIcon />
        </div>
        <div className="login-section">
          <MenuRoundedIcon /> <AccountCircleRoundedIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
