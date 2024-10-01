# Meet - Event Finder Application

## Overview

**Meet** is a serverless, progressive web application (PWA) built with React, utilizing a test-driven development (TDD) technique. The app allows users to explore upcoming events, filtering events by city. It also includes offline support, home screen shortcuts, and information visualizations for a better user experience.

## User Stories & Scenarios

### 1. **Feature: Filter Events by City**

As a user, I should be able to filter events by city, so that I can easily find events happening in a specific location.

**Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities**  
Given I haven’t searched for a city  
When I am on the events page  
Then I should see upcoming events from all cities

**Scenario 2: User should see a list of suggestions when they search for a city**  
Given I am on the events page  
When I type in the city search bar  
Then I should see a list of city suggestions

**Scenario 3: User can select a city from the suggested list**  
Given I am typing a city name  
When I see the city suggestions  
Then I can select a city from the list

---

### 2. **Feature: Show/Hide Event Details**

As a user, I should be able to show or hide event details, so that I can quickly view more information or minimize clutter when browsing.

**Scenario 1: An event element is collapsed by default**  
Given I am on the events page  
When I view the list of events  
Then the details of each event should be collapsed by default

**Scenario 2: User can expand an event to see details**  
Given I am viewing a list of events  
When I click on the "Show Details" button for an event  
Then the details of that event should be displayed

**Scenario 3: User can collapse an event to hide details**  
Given the details of an event are displayed  
When I click on the "Hide Details" button  
Then the details of that event should be hidden

---

### 3. **Feature: Specify Number of Events**

As a user, I should be able to specify the number of events displayed, so that I can control the amount of information I see at once based on my preference.

**Scenario 1: When user hasn’t specified a number, 32 events are shown by default**  
Given I am on the events page  
When I have not set a specific number of events to display  
Then I should see 32 events displayed by default

**Scenario 2: User can change the number of events displayed**  
Given I am on the events page  
When I select the option to show a specific number of events  
Then the page should display that number of events  
And any additional events should be accessible through pagination or scrolling

---

### 4. **Feature: Use the App When Offline**

As a user, I should be able to use the app when offline, so that I can access event information even without an internet connection.

**Scenario 1: Show cached data when there’s no internet connection**  
Given I am viewing event information online  
And my device goes offline  
When I try to view events that I have already loaded  
Then I should still be able to see the event details  
And I should receive a notification indicating I am offline

**Scenario 2: Show error when user changes search settings (city, number of events)**  
Given I am offline  
When I try to change the city or number of events displayed  
Then I should see an error message  
And the search settings should remain unchanged

---

### 5. **Feature: Add an App Shortcut to the Home Screen**

As a user, I should be able to add an app shortcut to my home screen, so that I can quickly access the app without having to navigate to it through my browser.

**Scenario 1: User can install the Meet app as a shortcut on their device home screen**  
Given I am using the app on a mobile device  
When I select the option to add a shortcut to my home screen  
Then a shortcut for the app should appear on my home screen  
And I should be able to launch the app directly from the shortcut

---

### 6. **Feature: Display Charts Visualizing Event Details**

As a user, I should be able to view charts that visualize event details, so that I can better understand trends or key information about the events.

**Scenario 1: Show a chart with the number of upcoming events in each city**  
Given I am viewing an event page with detailed information  
When I select the option to view charts  
Then I should see a chart that shows the number of upcoming events in each city  
And the chart should clearly represent this data
