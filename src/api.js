// src/api.js

import mockData from './mock-data';

// Take the event array, and use map to create a new array with only locations
export const extractLocations = (events) => {
    const extractedLocations = events.map((event) => event.location);
    const locations = [...new Set(extractedLocations)]; // remove duplicate locations by creating another new array using the spread operator and spreading a Set
    return locations;
};

// Fetch the list of all events
export const getEvents = async () => {
    return mockData;
};