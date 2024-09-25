# Meet - Event Finder Application

## Overview
<<<<<<< HEAD

=======
>>>>>>> ef9f4df4af2cac7e4c2a0a8f9fe1c82085c5340b
**Meet** is a serverless, progressive web application (PWA) built with React, utilizing a test-driven development (TDD) technique. The app allows users to explore upcoming events, filtering events by city. It also includes offline support, home screen shortcuts, and information visualizations for a better user experience.

## User Stories & Scenarios

### 1. **Feature: Filter Events by City**

As a user, I should be able to filter events by city, so that I can easily find events happening in a specific location.

**Scenario: Filter events by selecting a city**  
Given I am on the events page, when I select a city from the filter dropdown, then I should see a list of events only from the selected city, and the events from other cities should not be displayed.

---

### 2. **Feature: Show/Hide Event Details**

As a user, I should be able to show or hide event details, so that I can quickly view more information or minimize clutter when browsing.

**Scenario: Show event details**  
Given I am viewing a list of events, when I click on the "Show Details" button for an event, then the details of that event should be displayed.

**Scenario: Hide event details**  
Given I have displayed the details of an event, when I click on the "Hide Details" button, then the details of that event should be hidden.

---

### 3. **Feature: Specify Number of Events**

As a user, I should be able to specify the number of events displayed, so that I can control the amount of information I see at once based on my preference.

**Scenario: Set the number of events displayed**  
Given I am on the events page, when I select the option to show a specific number of events, then the page should display that number of events, and any additional events should be accessible through pagination or scrolling.

---

### 4. **Feature: Use the App When Offline**

As a user, I should be able to use the app when offline, so that I can access event information even without an internet connection.

**Scenario: Access the app offline**  
Given I am viewing event information online and my device goes offline, when I try to view events that I have already loaded, then I should still be able to see the event details, and I should receive a notification indicating I am offline.

---

### 5. **Feature: Add an App Shortcut to the Home Screen**

As a user, I should be able to add an app shortcut to my home screen, so that I can quickly access the app without having to navigate to it through my browser.

**Scenario: Add the app shortcut to the home screen**  
Given I am using the app on a mobile device, when I select the option to add a shortcut to my home screen, then a shortcut for the app should appear on my home screen, and I should be able to launch the app directly from the shortcut.

---

### 6. **Feature: Display Charts Visualizing Event Details**

As a user, I should be able to view charts that visualize event details, so that I can better understand trends or key information about the events.

**Scenario: View charts for event details**  
Given I am viewing an event page with detailed information, when I select the option to view charts, then I should see charts that visualize relevant event details, and the charts should clearly represent data like attendance, ratings, or other key metrics.
