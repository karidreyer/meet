import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {
        given('the main page is open', () => {

        });

        when('the user has not set a specific number of events to display', () => {

        });

        then(/^the user should see (\d+) events displayed$/, (arg0) => {

        });
    });

    test('User can change the number of events displayed', ({ given, when, then, and }) => {
        given('the main page is open', () => {

        });

        when('the user selects the option to show a specific number of events', () => {

        });

        then('the page should display that number of events', () => {

        });

        and('any additional events should be accessible through pagination or scrolling', () => {

        });
    });
});