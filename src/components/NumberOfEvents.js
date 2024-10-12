// src/components/NumberOfEvents.js

import React, { useState, useEffect } from 'react';

const NumberOfEvents = ({ numberOfEvents = 32, setNumberOfEvents }) => {
    const [inputValue, setInputValue] = useState(numberOfEvents);

    // Update inputValue when numberOfEvents changes
    useEffect(() => {
        setInputValue(numberOfEvents);
    }, [numberOfEvents]); 

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value); // Update local inputValue state
        setNumberOfEvents(value); // Pass the new value back to App component
    };

    return (
        <div id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events:</label>
            <input
                type="number"
                id="number-of-events-input"
                value={inputValue} // Controlled by local inputValue state
                onChange={handleInputChange} // Updates inputValue and parent state on change
            />
        </div>
    );
};

export default NumberOfEvents;