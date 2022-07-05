export const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';
export const API_KEY = import.meta.env.VITE_API_KEY;
export const ASSETS_BASE_PATH = '/assets/';
export const ERROR_404 = "404";
export enum WEATHER_CONDITIONS {
    CLEAR = "clear",
    CLOUDS = "clouds",
    RAIN = "rain",
    SNOW = 'snow',
    HAZE = 'haze'
}
