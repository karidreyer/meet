Feature: Specify Number of Events
    Scenario: When user hasn’t specified a number, 32 events are shown by default
        Given the main page is open
        When the user has not set a specific number of events to display
        Then the user should see 32 events displayed

    Scenario: User can change the number of events displayed
        Given the main page is open
        When the user selects the option to show a specific number of events
        Then the page should display that number of events
        And any additional events should be accessible through pagination or scrolling