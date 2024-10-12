// src/components/NumberOfEvents.js

const NumberOfEvents = ({ numberOfEvents, setNumberOfEvents }) => {
    return (
        <div id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events:</label>
            <input
                type="number"
                id="number-of-events-input"
                value={numberOfEvents}
                onChange={(e) => setNumberOfEvents(e.target.value)}
            />
        </div>
    );
};

export default NumberOfEvents;