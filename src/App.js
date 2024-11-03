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
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  
  // use useEffect hook to fetch data when the component mounts (i.e., when the app is first rendered)
  useEffect(() => {
    fetchData(); // Fetch the events when the App component mounts
  }, [currentCity, currentNOE]); // Add currentCity and currentNOE as dependencies to the useEffect hook so that the events and number of events are fetched whenever a change is made to either of these states

  const fetchData = async () => {
    try {
      const allEvents = (await getEvents()) || []; // Ensure allEvents is at least an empty array
      const filteredEvents = currentCity === 'See all cities' 
        ? allEvents 
        : allEvents.filter(event => event.location && event.location === currentCity);
      setEvents(filteredEvents.slice(0, currentNOE)); // Only set the number of events as per currentNOE
      setAllLocations(extractLocations(allEvents)); // Extract locations from all events and update allLocations
    } catch (error) {
      setErrorMessage('An error occurred while fetching events.');
    }
  };  

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} setErrorMessage={setErrorMessage}/>
      <EventList events={events} />
    </div>
  );
}

export default App;
