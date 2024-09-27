import React from 'react'
import "./UpcomingEvents.css"
import event1 from "../../../../utils/img/Events/Africanday.jpeg"
import event2 from "../../../../utils/img/Events/websitelandingpage.png"
import { FaMapMarker } from 'react-icons/fa'

export default function UpcomingEvents() {
  return (
    <div className='events-section'>
        <div className="events-container">
            <img src={event1} alt="event" />
            <div className="overlay"></div>
            <div className="evvent-date">
                <span>25</span> <br />
                <span>OCT</span>
            </div>
            <div className="event-desc">
                <h4>Africans get together event</h4>
                <p>Free entry</p>
                <p>
                    <FaMapMarker />
                    <span>Doha Cultral Center</span>
                </p>
            </div>
        </div>
        <div className="events-container">
            <img src={event2} alt="event" />
            <div className="overlay"></div>
            <div className="evvent-date">
                <span>29</span> <br />
                <span>NOV</span>
            </div>
            <div className="event-desc">
                <h4>Africans talent show event</h4>
                <p>Free entry</p>
                <p>
                    <FaMapMarker />
                    <span>Doha Cultral Center</span>
                </p>
            </div>
        </div>
    </div>
  )
}
