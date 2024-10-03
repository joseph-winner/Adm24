import React from "react";
import newsImage from "../../../utils/img/News/HE-Lolwah-Rashid-Al-Khater.jpg";
import { FaShareAlt } from "react-icons/fa";

export default function SingleNewsComponent() {
  return (
    <div className="single-news-main">
      <div className="single-news-section">
        <div className="single-news-container">
          <div className="news-header">
            <h1>Qatar urges global action on Sudan crisis</h1>
          </div>
          <div className="news-img">
            <img src={newsImage} alt="HE-Lolwah-Rashid-Al-Khater" />
          </div>
          <div className="single-news--desc">
            <div className="news-header-content">
              <h4>
                The Sudan crisis is the largest refugee tragedy in the world,
                with more than 14 million people experiencing acute hunger and
                13 regions are at risk of famine.
              </h4>
              <div className="news-header-metatags">
                <span className="news-postedby">Joseph Winner</span>
                <span className="news-post-date">September 26, 2024</span>
                <div className="news-share-btn">
                  <FaShareAlt />
                </div>
              </div>
              <div className="news-article-desc">
                <p>
                  At a recent high-level ministerial event focused on bolstering
                  humanitarian support for Sudan and its neighbouring regions,
                  Lolwah Alkhater, Minister of State for International
                  Cooperation, underscored the urgent nature of the crisis in
                  the northeastern African country. Alkhater emphasised that the
                  conflict in Sudan involves two critical dimensions: political
                  and humanitarian.
                </p>
                <blockquote>
                  “It is important to proceed effectively and very quickly on
                  both,” she said.
                </blockquote>
                <p>
                  Alkhater warned against limiting the focus to humanitarian aid
                  alone, as this could overlook the broader political context
                  necessary for a lasting resolution. In this regard, she
                  commended the political initiatives led by Saudi Arabia and
                  acknowledged the crucial role of Egypt in addressing both the
                  political and humanitarian aspects of the crisis.
                </p>
                <p>
                  Alkhater went on to express concern that the Sudan crisis
                  could devolve into a mere routine issue, leading to a scenario
                  where “the brothers in Sudan will be transformed into a group
                  of refugees.” She outlined several key principles essential
                  for any international approach to the Sudanese situation.
                </p>
                <blockquote>
                  “The first principle is to preserve the sovereignty, unity,
                  and territorial integrity of the Republic of Sudan, and to
                  preserve its national institutions,” she said.
                </blockquote>
                <p>
                  The second principle highlights the importance of prioritising
                  the needs of the Sudanese people, which includes halting the
                  bloodshed, restoring security, and addressing their legitimate
                  aspirations. Additionally, Alkhater urged for an end to
                  external interventions that have exacerbated the crisis.
                </p>
                <blockquote>
                  “These interventions contributed to igniting this crisis in
                  the beginning and are still igniting fires instead of
                  extinguishing them,” she said.
                </blockquote>
                <p>
                  The humanitarian crisis in Sudan has escalated to alarming
                  levels, with Alkhater describing it as “the largest refugee
                  tragedy in the world at the moment.” The educational system
                  has been devastated, leaving nearly 100 percent of children
                  out of school.
                </p>
                <p>
                  According to the World Food Programme, approximately 14
                  million people in Sudan are currently experiencing acute
                  hunger, with 13 regions at risk of famine. “We can [hardly]
                  imagine that such an agricultural country, through which the
                  Nile flows, has its people starving,” Alkhater said, referring
                  to the dire food situation.
                </p>
                <p>
                  She also highlighted the compounded suffering of Sudanese
                  women, who face increased violence driven by economic
                  desperation. Alkhater urged the international community to not
                  only provide humanitarian relief but also to engage in
                  meaningful political dialogue to restore stability in Sudan.
                </p>
                <p>
                  Her comments echoed that of Amir Sheikh Tamim bin Hamad
                  Al-Thani, who also spoke about Sudan in his UNGA speech on
                  Tuesday.
                </p>
                <blockquote>
                  “We reaffirm our support for all regional and international
                  efforts to end this crisis in a way that will ensure the unity
                  of the state institutions and the sovereignty and stability of
                  Sudan,” the amir said.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
