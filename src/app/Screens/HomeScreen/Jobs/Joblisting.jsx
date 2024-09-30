import React from "react";
import JoblistingComponent from "../../../components/JobCardComponent/JoblistingComponent";
import logo from "../../../../utils/img/logo.png";

export default function Joblisting() {
  const JobListings = [
    {
      Logo: logo,
      JobTitle: "Software Engineer",
      CompanyName: "Tech Innovations",
      PostedAt: "27/Sep/2024",
      JobDesc:
        "Join our dynamic team to develop cutting-edge applications and improve user experiences. Experience in JavaScript and React is required.",
    },
    {
      Logo: logo,
      JobTitle: "Data Analyst",
      CompanyName: "Data Insights Co.",
      PostedAt: "25/Sep/2024",
      JobDesc:
        "We are looking for a Data Analyst to interpret data and provide actionable insights. Proficiency in Excel and SQL is a must.",
    },
    {
      Logo: logo,
      JobTitle: "Graphic Designer",
      CompanyName: "Creative Minds",
      PostedAt: "20/Sep/2024",
      JobDesc:
        "Seeking a talented Graphic Designer with a strong portfolio. Experience in Adobe Creative Suite is required. Remote work options available.",
    },
    {
      Logo: logo,
      JobTitle: "Project Manager",
      CompanyName: "Global Ventures",
      PostedAt: "18/Sep/2024",
      JobDesc:
        "Looking for a Project Manager to oversee projects from initiation to completion. Strong leadership and communication skills are essential.",
    },
    {
      Logo: logo,
      JobTitle: "Content Writer",
      CompanyName: "Words & Ideas",
      PostedAt: "15/Sep/2024",
      JobDesc:
        "Join our content team to create engaging articles and blog posts. Experience in SEO and digital marketing is a plus.",
    },
    {
      Logo: logo,
      JobTitle: "Sales Executive",
      CompanyName: "SalesForce",
      PostedAt: "12/Sep/2024",
      JobDesc:
        "We are seeking a motivated Sales Executive to drive sales and build customer relationships. Experience in B2B sales is preferred.",
    },
  ];
  return (
    <div className="job-listings">
      <p className="listings-title">Find Jobs</p>
      <div className="job-listing-rows">
      {JobListings.map((JobListing, index) => (
        <JoblistingComponent
          key={index}
          Logo={JobListing.Logo}
          JobTitle={JobListing.JobTitle}
          CompanyName={JobListing.CompanyName}
          PostedAt={JobListing.PostedAt}
        />
      ))}
      </div>
    </div>
  );
}
