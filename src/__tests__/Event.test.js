// src/__tests__/Event.test.js

import { render } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data';
import userEvent from '@testing-library/user-event';

describe('<Event /> component', () => {
    let EventComponent;
    let event = mockData[0]; // Use the first event in the mockData array

    beforeEach(() => {
        EventComponent = render(<Event event={event}/>);
    });

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
 });