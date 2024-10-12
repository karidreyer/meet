// src/App.js

import React, { useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';

function App() {

  const [numberOfEvents, setNumberOfEvents] = useState(32); // Set default number of events to 32

  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents numberOfEvents={numberOfEvents} setNumberOfEvents={setNumberOfEvents} />
      <EventList numberOfEvents={numberOfEvents} />
    </div>
  );
}

export default App;
