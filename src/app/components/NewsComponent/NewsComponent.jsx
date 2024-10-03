import React from 'react';
import "./NewsComponent.css"
import { useNavigate } from 'react-router-dom';

export default function NewsComponent({ title, description, date, imageUrl }) {
  const Navigate = useNavigate()
  const HandleNews = () =>{
    Navigate("/News")
  }
  return (
    <div className="news-card">
      <img src={imageUrl || "https://via.placeholder.com/600x400"} alt="News" className="news-image" onClick={HandleNews} />
      <div className="news-content">
        <h2 className="news-title">{title || "Breaking News Title"}</h2>
        {/* <p className="news-description">
          {description || "This is a brief description of the news article. It gives a quick overview of the content and draws the reader's interest."}
        </p> */}
        <p className="news-date">{date || "Published on: September 27, 2024"}</p>
      </div>
    </div>
  );
}
