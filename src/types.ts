// type annotation for weather response object
type Coordinates = {
    lat: string,
    lon: string
}
export type Weather = {
    id: number,
    main: string,
    description: string,
    icon: string
}
type Temperature = {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}
type Wind = {
    speed: number,
    deg: number
}

export interface IWeatherResponse {
    coord: Coordinates,
    weather: Weather[],
    base: string;
    main: Temperature,
    visibility: number,
    wind: Wind,
    dt: number; // Time of data in Unix timestamp. is UTC
    clouds?: {
        all: number
    }; // cloudines %
    timezone?: number; // shift in seconds from UTC
    id: number; // city id
    name: string; // name of the city
}