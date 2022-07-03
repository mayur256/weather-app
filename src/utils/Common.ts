/**
 * This file contains a set of utility functions that can be used throughout the application
 */

// Top level imports

// Custom Types
import type { IWeatherResponse } from "@/types";

// Utilities
import { ASSETS_BASE_PATH, WEATHER_CONDITIONS } from "./Constants";

/**
 * @param - no parameters
 * @returns Boolean
 * @description - returns true if its day, false otherwise
 */
export function isDay(): boolean {
    const hours = (new Date()).getHours();
    return (hours >= 6 && hours < 18);
}

/**
 * 
 * @param timeOfDay {string}
 * @param weatherCondition {string}
 * @returns {void}
 * @description - changes background image of app
 */
export const changeBackgroundImage = (timeOfDay: string, weatherCondition: string): void => {
    const appElement: HTMLDivElement | null = document.querySelector('.weather-app');

    if (appElement) {
        appElement.style.backgroundImage =
            `url(${ASSETS_BASE_PATH}images/${timeOfDay}/${weatherCondition}.jpg)`;
    }
}

/**
 * 
 * @param weatherData {IWeatherResponse}
 * @returns currentWeatherCondition {string}
 */
export const getCurrentWeather = (weatherData: IWeatherResponse): string => {
    /*const weatherConditions = {
        [WEATHER_CONDITIONS.CLEAR]: 'clear',
        [WEATHER_CONDITIONS.CLOUDS]: 'cloudy',
        [WEATHER_CONDITIONS.HAZE]: 'cloudy',
        [WEATHER_CONDITIONS.RAIN]: 'rain',
        [WEATHER_CONDITIONS.SNOW]: 'snowy'
    };

    // `PropertyKey` is short for "string | number | symbol"
    // since an object key can be any of those types, our key can too
    // in TS 3.0+, putting just "string" raises an error
    function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
        return key in obj
    }

    if (hasKey(weatherConditions, weatherData.weather[0].main.toLocaleLowerCase())) {
        return weatherConditions[weatherData.weather[0].main.toLocaleLowerCase()];
    }
    return weatherConditions[weatherData.weather[0].main.toLocaleLowerCase() as any] ?? 'clear';*/

    let result = 'clear';
    switch (weatherData.weather[0].main.toLocaleLowerCase()) {
        case WEATHER_CONDITIONS.CLEAR:
            result = 'clear';
            break;

        case WEATHER_CONDITIONS.CLOUDS:
            result = 'cloudy';
            break;

        case WEATHER_CONDITIONS.HAZE:
            result = 'cloudy';
            break;

        case WEATHER_CONDITIONS.RAIN:
            result = 'rainy';
            break;

        case WEATHER_CONDITIONS.SNOW:
            result = 'snowy';
            break;

        default:
            break;
    }

    return result;
}