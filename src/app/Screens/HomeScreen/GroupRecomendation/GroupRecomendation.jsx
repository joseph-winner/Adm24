import React from 'react'
import GroupRecomendationComponent from '../../../components/GroupRecomendationComponent/GroupRecomendationComponent'
import "./GroupRecomendation.css"
import CommunityPhoto from "../../../../utils/img/logo.png"

export default function GroupRecomendation() {
  const Communities = [
    {
        id: "1",
        communityName: "AfrikaBazaar",
        CommunityLogo: CommunityPhoto
    },
    {
        id: "2",
        communityName: "Unity Marketplace",
        CommunityLogo: CommunityPhoto
    },
    {
        id: "3",
        communityName: "Ubuntu Market",
        CommunityLogo: CommunityPhoto
    },
    {
        id: "4",
        communityName: "African Artisan Alliance",
        CommunityLogo: CommunityPhoto
    },
    {
        id: "5",
        communityName: "Roots Exchange",
        CommunityLogo: CommunityPhoto
    },
    {
        id: "6",
        communityName: "Cultural Commerce",
        CommunityLogo: CommunityPhoto
    }
];

  return (
    <div className="group-recomendations-section">
        <h2>Communities Suggested for you</h2>
        <div className="group-recomendation-container">
            <GroupRecomendationComponent communities={Communities} />
        </div>
    </div>
  )
}
