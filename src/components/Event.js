// src/components/Event.js

const Event = ({ event }) => { // Receive the event prop from the parent component
    return (
        <li>
            <h1>{event.summary}</h1>
            <p>{event.created}</p>
            <p>{event.location}</p>
        </li>
    );
}

export default Event;