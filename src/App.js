// src/App.js

import React, { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert } from './components/Alert';

import './App.css';

function App() {
  const [events, setEvents] = useState([]); // State for storing fetched events, initialized as an empty array
  const [currentNOE, setCurrentNOE] = useState(32); // State for number of events, default is 32
  const [allLocations, setAllLocations] = useState([]); // State for storing event locations for search functionality, initialized as an empty array
  const [currentCity, setCurrentCity] = useState('See all cities'); // State for storing the current city, default is 'See all cities'
  const [infoAlert, setInfoAlert] = useState(''); // State for info alert
  const [errorAlert, setErrorAlert] = useState(''); // State for error alert
  
  // use useEffect hook to fetch data when the component mounts (i.e., when the app is first rendered)
  useEffect(() => {
    fetchData(); // Fetch the events when the App component mounts
  }, [currentCity, currentNOE]); // Add currentCity and currentNOE as dependencies to the useEffect hook so that the events and number of events are fetched whenever a change is made to either of these states

  const fetchData = async () => {
    let warningMessage = '';
    try {
      const allEvents = (await getEvents()) || []; // Ensure allEvents is at least an empty array
      const filteredEvents = currentCity === 'See all cities' 
        ? allEvents 
        : allEvents.filter(event => event.location && event.location === currentCity);
      setEvents(filteredEvents.slice(0, currentNOE)); // Only set the number of events as per currentNOE
      setAllLocations(extractLocations(allEvents)); // Extract locations from all events and update allLocations
    } catch (error) {
      warningMessage('An error occurred while fetching events.');
    }
  };  

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
      </div>
      <CitySearch 
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}/>
      <NumberOfEvents 
        currentNOE={currentNOE} 
        setCurrentNOE={setCurrentNOE} 
        setErrorAlert={setErrorAlert}/>
      <EventList events={events} />
    </div>
  );
}

export default App;
