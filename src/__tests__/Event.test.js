// src/__tests__/Event.test.js

import { render } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data';
import userEvent from "@testing-library/user-event";

describe('<Event /> component', () => {
    let EventComponent;
    let event = mockData[0]; // Use the first event in the mockData array
    let user;

    beforeEach(() => {
        EventComponent = render(<Event event={event}/>);
        user = userEvent.setup(); // Initialize the userEvent to simulate user interactions (eg. clicks, typing)
    });

    // Test basic rendering of the Event component
    test('renders event title', () => {
        const eventTitle = EventComponent.queryByText(event.summary); 
        expect(eventTitle).toBeInTheDocument();
    });

    test('renders event start time',() => {
        const eventStartTime = EventComponent.queryByText(event.created); // Use the event created time as the start time for simplicity
        expect(eventStartTime).toBeInTheDocument();
    });

    test('renders event location',() => {
        const eventLocation = EventComponent.queryByText(event.location);
        expect(eventLocation).toBeInTheDocument();
    });

    test('renders event details button with the title (Show Details)', () => {
        const showDetailsButton = EventComponent.getByRole('button', { name: /show details/i }); // "i" flag for case-insensitive search
        expect(showDetailsButton).toBeInTheDocument();
    });

    // Test Scenario 1: An event element is collapsed by default
    test('does not render event details by default', () => {
        const eventDetails = EventComponent.queryByText(event.description);
        expect(eventDetails).not.toBeInTheDocument();
    });

    // Test Scenario 2: User can expand an event to see its details
    test('renders event details when the user clicks the "Show Details" button', async () => {
        const showDetailsButton = EventComponent.getByRole('button', { name: /show details/i }); // "i" flag for case-insensitive search
        await user.click(showDetailsButton);

        const eventDetails = EventComponent.queryByText(event.description);
        expect(eventDetails).toBeInTheDocument();
    });

    // Test Scenario 3: User can collapse an event to hide its details
    test('hides event details when the user clicks the "Hide Details" button', async () => {
        const showDetailsButton = EventComponent.getByRole('button', { name: /show details/i }); // "i" flag for case-insensitive search
        await user.click(showDetailsButton);

        const hideDetailsButton = EventComponent.getByRole('button', { name: /hide details/i }); // "i" flag for case-insensitive search
        await user.click(hideDetailsButton);

        const eventDetails = EventComponent.queryByText(event.description);
        expect(eventDetails).not.toBeInTheDocument();
    });
 });