// src/components/Event.js
import React, { useState } from 'react';

const Event = ({ event }) => { // Receive the event prop from the parent component

    const [showDetails, setShowDetails] = useState(false); // Initialize the showDetails state variable to false
    
    return (
        <li className="Event">
            <h1>{event.summary}</h1>
            <p>{event.created}</p>
            <p>{event.location}</p>
            <button className="detail-btn" onClick={()=>setShowDetails(!showDetails)}>
                { showDetails ? "Hide details" : "Show details"}
            </button>
            {
                showDetails ?  <p role="description" className="details">{event.description}</p> : <></>
            }
        </li>
    );
}

export default Event;