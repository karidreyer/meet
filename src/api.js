// src/api.js

import mockData from './mock-data';

// Fetch the list of all events
export const getEvents = async () => {
    if (window.location.href.startsWith('http://localhost')) {
        return mockData;
      }
    const token = await getAccessToken();

    if (token) {
        removeQuery();
        const url = "https://fvav82i0li.execute-api.eu-central-1.amazonaws.com/dev/api/get-events" + "/" + token;
        const response = await fetch(url);
        const result = await response.json();
        if (result) {
            return result.events;
        } else return null;
    }
};

// Take the event array, and use map to create a new array with only locations
export const extractLocations = (events) => {
    const extractedLocations = events.map((event) => event.location);
    const locations = [...new Set(extractedLocations)]; // remove duplicate locations by creating another new array using the spread operator and spreading a Set
    return locations;
};

// Function to get the access token from the URL
   const getToken = async (code) => {
    try {
      const encodeCode = encodeURIComponent(code);
   
      const url = "https://fvav82i0li.execute-api.eu-central-1.amazonaws.com/dev/api/token";
      // eslint-disable-next-line no-useless-concat
  
      const getUrl = `${url}` + "/" + `${encodeCode}`;
      const response = await fetch(getUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const { access_token } = await response.json();
      access_token && localStorage.setItem("access_token", access_token);
      return access_token;
    } catch (error) {
      return error;
    }
  }; 

// Function to check the access token
const checkToken = async (accessToken) => {
    const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
    );
    const result = await response.json();
    return result;
};

// Function to remove the query string from the URL
const removeQuery = () => {
    let newurl;
    if (window.history.pushState && window.location.pathname) {
      newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname;
      window.history.pushState("", "", newurl);
    } else {
      newurl = window.location.protocol + "//" + window.location.host;
      window.history.pushState("", "", newurl);
    }
  };

// Retrieve the access token from localStorage
export const getAccessToken = async () => {             
    const accessToken = localStorage.getItem("access_token");
    const tokenCheck = accessToken && (await checkToken(accessToken));
  
    if (!accessToken || tokenCheck.error) {
      await localStorage.removeItem("access_token");
      const searchParams = new URLSearchParams(window.location.search);
      const code = await searchParams.get("code");
      if (!code) {
        const response = await fetch(
          "https://fvav82i0li.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
        );
        const result = await response.json();
        const { authUrl } = result;
        return (window.location.href = authUrl);
      }
      return code && getToken(code);
    }
    return accessToken;
  };