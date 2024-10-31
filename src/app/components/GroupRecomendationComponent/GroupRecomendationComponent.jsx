import React from 'react'
import "./GroupRecomendationComponent.css";

export default function GroupRecomendationComponent({communities}) {
  return (
    <div>
        {communities.map((community) => (
            <div key={community.id} className="group-component-items">
            <img src={community.CommunityLogo} alt={community.communityName} />
            <div className="recommeded-group-desc">
                <h4>{community.communityName}</h4>
                <div className="inline-recommeded-desc">
                    <p className="group-type">
                        Updated Today
                    </p>
                    <p className="join-btn">
                    Join
                    </p>
                </div>
            </div>
            <span className="remove-group-list">
                &times;
            </span>
        </div>
        ))}
    </div>
  )
}
