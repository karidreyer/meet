// src/components/NumberOfEvents.js
import React, { useState } from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorMessage }) => {
    const [number, setNumber] = useState(currentNOE);
    
    const handleInputChanged = (event) => {
        const value = parseInt(event.target.value, 10); // Parse input value as an integer
        setNumber(value); // Update local state with new value

        // Check if value is a number greater than 0
        if (isNaN(value) || value <= 0) { 
            setErrorMessage('Please enter a valid number greater than 0.');
        } else {
            setErrorMessage('');
            setCurrentNOE(value); // Update parent state with new value
        }
    };

    return (
        <div id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events: </label>
            <input
                type="number"
                id="number-of-events-input"
                className="number-of-events-input"
                value={number} // Set input value to local state
                onChange={handleInputChanged} // Updates number and parent state on change
            />
        </div>
    );
};

export default NumberOfEvents;