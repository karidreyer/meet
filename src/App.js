// src/App.js

import React, { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';

import './App.css';

function App() {
  const [events, setEvents] = useState([]); // State for storing fetched events, initialized as an empty array
  const [currentNOE, setCurrentNOE] = useState(32); // State for number of events, default is 32
  const [allLocations, setAllLocations] = useState([]); // State for storing event locations for search functionality, initialized as an empty array
  const [currentCity, setCurrentCity] = useState('See all cities'); // State for storing the current city, default is 'See all cities'
  
  // use useEffect hook to fetch data when the component mounts (i.e., when the app is first rendered)
  useEffect(() => {
    fetchData(); // Fetch the events when the App component mounts
  }, [currentCity]); // Add currentCity as a dependency to the useEffect hook so that the events are fetched whenever the currentCity changes

  // Function to fetch events and update events state
  const fetchData = async () => {
    const allEvents = await getEvents(); // Fetch all events using getEvents function from api.js
    const filteredEvents = currentCity === 'See all cities' ? 
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE)); // Set only the first n events, where n is the current number of events (currentNOE)
    setAllLocations(extractLocations(allEvents)); // Extract locations from all events and update the allLocations state
  };

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents />
      <EventList events={events} />
    </div>
  );
}

export default App;
