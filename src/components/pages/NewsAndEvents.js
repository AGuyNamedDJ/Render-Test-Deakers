// Import
import React from "react";

// Functional Component
const NewsAndEvents = () => {
    return(
        <div>
            <h2 id="contact-title">News and Events</h2>
            <div className="event-container">
                <img src="https://images.squarespace-cdn.com/content/v1/5a8b38504c0dbff0a1a687b1/1674346045149-QPFV683LSKP0WLO1HXLD/326698945_478645334477814_6231517805960131965_n_6161923393820106.jpg?format=1000w" alt="Cars and Coffee Event" className="event-image" />
                <div className="event-text">
                    <h3>Monthly Cars and Coffee Event</h3>
                    <p id="event-subtext">Join us on the first Saturday of every month for our Cars and Coffee event at the dealership.</p>
                    <p id="event-subtext">Date: First Saturday of Every Month</p>
                    <p id="event-subtext">Time: 8am-11am</p>
                    <p id="event-subtext">Location: 1234 Hyde Park Blvd, Chicago, IL USA</p>
                </div>
            </div>
        </div>

    )
};

// Export
export default NewsAndEvents;

// Rememeber IDs(#) are more specific than Classes(.)