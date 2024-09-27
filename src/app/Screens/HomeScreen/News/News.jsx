import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./News.css";
import newsHero from "../../../../utils/img/News/HE-Lolwah-Rashid-Al-Khater.jpg";
import news1 from "../../../../utils/img/News/attackinmali-qatarcodemns.jpg";
import news2 from "../../../../utils/img/News/nigeria-mou-qatar.jpg";
import news3 from "../../../../utils/img/News/attackinmali-qatarcodemns.jpg";
import NewsComponent from "../../../components/NewsComponent/NewsComponent";

export default function News() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const News = [
    {
      newsCat: "News",
      newsTitle: "Qatar condemns attack by al-Qaeda-linked group in Mali",
      postedBy: "Africansindoha",
      postedAt: "Sept 26, 2024",
      newsImg: news1,
    },
    {
      newsCat: "News",
      newsTitle: "Qatar worthy partner in moving education forward in Nigeria",
      postedBy: "Africansindoha",
      postedAt: "Sept 23 2024",
      newsImg: news2,
    },
    {
      newsCat: "News",
      newsTitle: "Qatar calls for immediate ceasefire in Lebanon",
      postedBy: "Africansindoha",
      postedAt: "Sept 23 2024",
      newsImg: news3,
    },
  ];
  return (
    <>
      <div className="breaking-main-sect">
        <h2>Breaking News</h2>
        <div className="breaking-section">
          <div className="breaking-container">
            <div className="breaking-items">
              <div className="breaking-item">
                <img src={newsHero} alt="HE-Lolwah-Rashid-Al-Khater" />
                <div className="overlay"></div>
                <div className="breaking-desc">
                  <p className="breaking-top">
                    <span className="breaking-by">Africansindoha</span>
                    <span className="breaking-at">Sept 26, 2024</span>
                  </p>
                  <p className="breaking-title">
                    Qatar urges global action on Sudan crisis
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {News.map((New, index) => (
              <div key={index} className="embla__slide">
                  <NewsComponent
                    title={New.newsTitle}
                    // description={New.}
                    date={New.postedAt}
                    imageUrl={New.newsImg}
                    />
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
