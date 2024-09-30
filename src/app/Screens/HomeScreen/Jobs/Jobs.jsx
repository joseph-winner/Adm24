import React from "react";
import "./Jobs.css";
import JobCardComponent from "../../../components/JobCardComponent/JobCardComponent";
import logo from "../../../../utils/img/logo.png";
import Joblisting from "./Joblisting";

export default function Jobs() {
  const TopJobs = [
    {
      Logo: logo,
      JobTitle: "Marketier",
      CompanyName: "Africans in Doha",
      PostedAt: "29/Sep/2024",
      JobDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus molestiae dolorum ratione provident excepturi aspernatur iste consequuntur perspiciatis ut, quod, quas quos, pariatur ab voluptatem assumenda. Unde, iusto natus?",
    },
    {
      Logo: logo,
      JobTitle: "Content Creator",
      CompanyName: "Africans in Doha",
      PostedAt: "27/Sep/2024",
      JobDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus molestiae dolorum ratione provident excepturi aspernatur iste consequuntur perspiciatis ut, quod, quas quos, pariatur ab voluptatem assumenda. Unde, iusto natus?",
    },
    {
      Logo: logo,
      JobTitle: "Graphic Designer",
      CompanyName: "Africans in Doha",
      PostedAt: "28/Sep/2024",
      JobDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus molestiae dolorum ratione provident excepturi aspernatur iste consequuntur perspiciatis ut, quod, quas quos, pariatur ab voluptatem assumenda. Unde, iusto natus?",
    },
  ];
  return (
    <div className="jobs-section">
    <h4>Top Job Results</h4>
      <div className="jobs-container">
        <div className="top-jobs">
          {TopJobs.map((TopJob, index) => (
            <JobCardComponent
              key={index}
              Logo={TopJob.Logo}
              JobTitle={TopJob.JobTitle}
              CompanyName={TopJob.CompanyName}
              PostedAt={TopJob.PostedAt}
            />
          ))}
        </div>
      </div>
      <Joblisting />
    </div>
  );
}
