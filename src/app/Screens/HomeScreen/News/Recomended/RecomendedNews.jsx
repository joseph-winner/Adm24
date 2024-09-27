import React from 'react'
import news1 from "../../../../../utils/img/News/russian-ukraine-unite.png"
import news2 from "../../../../../utils/img/News/eco-friedly-innovation.jpg"
import news3 from "../../../../../utils/img/News/us-arab-debate.jpg"
import news4 from "../../../../../utils/img/News/qatariplay.jpeg"
import NewsComponent from '../../../../components/NewsComponent/NewsComponent'
import "./RecomendedNews.css"

export default function RecomendedNews() {
    const recomendedNews = [
        {
          newsCat: "News",
          newsTitle: "Russian, Ukrainian children reunited with families under Qatar mediation",
          postedBy: "Africansindoha",
          postedAt: "Sept 26, 2024",
          newsImg: news1,
        },
        {
          newsCat: "News",
          newsTitle: "Eco-friendly innovation: 2024 Flormart Green Italy Horticultural Expo Begins",
          postedBy: "Africansindoha",
          postedAt: "Sept 26 2024",
          newsImg: news2,
        },
        {
          newsCat: "News",
          newsTitle: "U.S. Arabic Debate Championship returns to New York City for its fifth",
          postedBy: "Africansindoha",
          postedAt: "Sept 26 2024",
          newsImg: news3,
        },
        {
          newsCat: "News",
          newsTitle: "Qatari play chosen to participate in Carthage Theatre Festival 2024",
          postedBy: "Africansindoha",
          postedAt: "Sept 25 2024",
          newsImg: news4,
        },
      ];
  return (
    <>
    <h3 style={{marginLeft:15, fontWeight:500}}>Recommendation</h3>
    <div className="recomended-items">
                {recomendedNews.map((New, index) => (
              <div key={index} className="recomended-item">
                  <NewsComponent
                    title={New.newsTitle}
                    // description={New.}
                    date={New.postedAt}
                    imageUrl={New.newsImg}
                    />
                    </div>
                ))}
            </div>
            </>
  )
}
