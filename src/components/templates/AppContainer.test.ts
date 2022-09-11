/**
 * @jest-environment jsdom
 */

// Testing library utilities
import { render } from "@testing-library/vue";

// Subject Components
import AppContainer from "./AppContainer.vue";
import Main from "./Main.vue";

// Test Suite
describe('App container loading status', (): void => { 
    // Test Case - 1
    test('App container is loaded', (): void => {
        // Arrange
        const { getByTestId, debug } = render(Main /*{
            slots: {
                default: Main
            }
        }*/);

        // Assert
        // expect(getByTestId('app-container')).not.toBeNull();
        debug();
    })
});