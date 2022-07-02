// Top level imports
import { reactive } from "vue";

export const store = reactive({
    weatherData: {
        coord: {
            lat: '',
            lon: ''
        },
        weather: [{
            id: 0,
            main: '',
            description: '',
            icon: ''
        }],
        base: '',
        visibility: 0,
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0
        },
        wind: {
            speed: 0,
            deg: 0
        },
        dt: 0,
        clouds: {
            all: 0
        },
        timezone: 0,
        id: 0,
        name: ''
    },
});