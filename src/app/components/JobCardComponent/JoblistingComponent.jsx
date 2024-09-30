import React from "react";
import { FaBookmark } from "react-icons/fa";

export default function JoblistingComponent({ Logo, JobTitle, CompanyName, PostedAt}) {
  return (
      <div className="job-listing-container">
        <div className="company-logo">
          <img src={Logo} alt={CompanyName} />
        </div>
        <div className="job-listing-desc">
          <h4 className="job-listing-name">{JobTitle}</h4>
          <p className="company-listing-name"> {CompanyName} </p>
        <div className="job-listing-details">
          <p className="postedAt"> {PostedAt} </p>
        </div>
        </div>
        <p className="save-job">
            <FaBookmark />
          </p>
      </div>
  );
}
