// src/features/showHideAnEventsDetails.test.js

import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppDOM;
    let EventListDOM;

    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the main page is open', () => {
            AppDOM = render(<App />).container.firstChild;
        });

        when('the user views the list of events', async () => {
            await waitFor(() => {
                EventListDOM = AppDOM.querySelector('#event-list');
                expect(EventListDOM).toBeInTheDocument();
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32); // Check that the list of events is rendered by checking the length of the list matches the default length (is there a better way?)
            });
        });

        then('the details of each event should be collapsed by default', () => {
            const eventDetails = EventListDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        const user = userEvent.setup();

        given('the user is viewing an event', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
        });

        when(/^the user clicks on the "(.*)" button$/, async () => {
            const showDetailsButton = EventComponent.getByRole('button', { name: /show details/i });
            await user.click(showDetailsButton);
        });

        then('the details of that event should be displayed', () => {
            const eventDetails = EventComponent.container.querySelector('.details');
            expect(eventDetails).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        const user = userEvent.setup();

        given('the details of an event are displayed', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);

            const showDetailsButton = EventComponent.getByRole('button', { name: /show details/i });
            await user.click(showDetailsButton);

            // Check that the event details are visible
            const eventDetails = EventComponent.container.querySelector('.details');
            expect(eventDetails).toBeInTheDocument();
        });

        when(/^the user clicks on the "(.*)" button$/, async () => {
            const hideDetailsButton = EventComponent.getByRole('button', { name: /hide details/i });
            await user.click(hideDetailsButton);
        });

        then('the details of that event should be hidden', () => {
            const eventDetails = EventComponent.container.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });
});