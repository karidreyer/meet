// src/__tests__/NumberOfEvents.test.js

import NumberOfEvents from '../components/NumberOfEvents';
import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { getEvents } from '../api';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;

    beforeEach(() => {
        NumberOfEventsComponent = render(
            <NumberOfEvents 
                currentNOE={32}
                setCurrentNOE={() => {}}
                setErrorAlert={() => {}}
            />
        );
    });

    test('component contains a textbox for input', () => {
        const numberOfEventsTextBox = NumberOfEventsComponent.queryByRole('spinbutton'); // "spinbutton" is the role for input type="number"
        expect(numberOfEventsTextBox).toBeInTheDocument();
    });

    test('ensure that the default number of events is 32', () => {
        const numberOfEventsTextBox = NumberOfEventsComponent.queryByRole('spinbutton'); // "spinbutton" is the role for input type="number"
        expect(numberOfEventsTextBox).toHaveValue(32);
    });

    test('ensure that the number of events can be changed' , async () => {
        const numberOfEventsTextBox = NumberOfEventsComponent.queryByRole('spinbutton'); // "spinbutton" is the role for input type="number"
        
        const user = userEvent.setup();
        await user.type(numberOfEventsTextBox, '{backspace}{backspace}10');

        const allEvents = await getEvents();
        NumberOfEventsComponent.rerender(<NumberOfEvents />);
        expect(numberOfEventsTextBox).toHaveValue(10);
    });
});