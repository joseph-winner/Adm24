import React from "react";
import "./JobCardComponent.css"
import { FaBookmark } from 'react-icons/fa'


export default function JobCardComponent({ Logo, JobTitle, CompanyName, PostedAt}) {
  return (
    <div className="job-card">
      <div className="company-logo">
        <img src={Logo} alt={CompanyName} />
      </div>
      <div className="job-desc">
        <h4 className="job-name">{JobTitle}</h4>
        <p className="company-name"> {CompanyName} </p>
      </div>
      <div className="job-details">
        <p className="postedAt"> {PostedAt} </p>
        <p className="save-job">
          <FaBookmark />
        </p>
      </div>
    </div>
  );
}
