import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {
        let AppComponent;
        given('the main page is open', () => {
            // Render App component
            AppComponent = render(<App />);
        });

        when('the user has not set a specific number of events to display', () => {
            // No action required
        });

        then(/^the user should see (\d+) events displayed$/, async () => {
            // Check that the default number of events (32) is displayed
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });

    test('User can change the number of events displayed', ({ given, when, then }) => {
        let AppComponent;
        let numberOfEventsTextBox;
        given('the main page is open', () => {
            // Render the App component
            AppComponent = render(<App />);
        });

        when('the user selects the option to show a specific number of events', async () => {
            // Simulate user changing the number of events
            numberOfEventsTextBox = AppComponent.getByRole('spinbutton');
        
            const user = userEvent.setup();
            await user.clear(numberOfEventsTextBox);
            await user.type(numberOfEventsTextBox, '10');
        });

        then('the page should display that number of events', async () => {
            // Check that the specified number of events is displayed
            const EventListDOM = AppComponent.container.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(10);
            });
        });
    });
});