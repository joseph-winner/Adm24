import React from "react";
import SearchBar from "./SearchBar";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="Banner-container">
      <div className="Banner-overlay"></div>
      <div className="banner-content">
        <div className="banner-head">
          <h1>
           Connect • Sell • Buy • Celebrate
          </h1>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
