Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default
        Given the main page is open
        When the user views the list of events
        Then the details of each event should be collapsed by default

    Scenario: User can expand an event to see details
        Given the user is viewing an event
        When the user clicks on the "Show Details" button
        Then the details of that event should be displayed

    Scenario: User can collapse an event to hide details
        Given the details of an event are displayed
        When the user clicks on the "Hide Details" button
        Then the details of that event should be hidden