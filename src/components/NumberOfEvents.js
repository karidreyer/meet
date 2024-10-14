// src/components/NumberOfEvents.js

import React, { useState } from 'react';

const NumberOfEvents = ({ }) => {
    
    const [number, setNumber] = useState(32);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value); // Update local setNumber state
    };

    return (
        <div id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events:</label>
            <input
                type="number"
                id="number-of-events-input"
                className="number-of-events-input"
                value={number} // Controlled by local setNumber state
                onChange={handleInputChanged} // Updates number and parent state on change
            />
        </div>
    );
};

export default NumberOfEvents;