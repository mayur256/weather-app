<script setup lang="ts">
// Top level imports
import { onMounted } from 'vue';

// Reactive Store
import { store } from '@/store';

// Custom Types
import type { IWeatherResponse } from '@/types';

// Template Components
import Panel from '@/components/templates/Panel.vue';
import Main from '../components/templates/Main.vue';
import AppContainer from '../components/templates/AppContainer.vue';

// Utilities
// Constants
import { API_BASE, API_KEY, ERROR_404 } from "@/utils/Constants";
import { isDay, changeBackgroundImage, getCurrentWeather } from "@/utils/Common";

// Lifecycle hooks
onMounted(() => {
    if ('geolocation' in navigator) {
        initiateGeoLocation()
    }
});

/** Handler/Utility functions - starts */

const initiateGeoLocation = () => {
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition): void => {
        const coords: GeolocationCoordinates = position.coords;
        fetchWeatherInfo(coords);
    });
}

// fetches weather info based on current location
const fetchWeatherInfo = ({latitude, longitude}: GeolocationCoordinates): void => {
    fetch(`${API_BASE}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then((response: Response): Promise<IWeatherResponse> => response.json())
        .then((weatherData: IWeatherResponse): void => {
            if (weatherData.cod !== ERROR_404) {
                (store.weatherData as IWeatherResponse) = weatherData;

                // change background and icons based on current weather data
                const weatherImgKey = getCurrentWeather(weatherData);
                const timeOfDay = isDay() ? 'day' : 'night';
                changeBackgroundImage(timeOfDay, weatherImgKey);
            }
        });
}

/** Handler/Utility functions - ends */
</script>

<template>
    <AppContainer>
        <Main />
        <!-- Side Panel with Weather Search and Info-->
        <Panel />
    </AppContainer>
</template>

<style>
.weather-app {
    min-height: 100vh;
    background-image: url('/assets/images/day/clear.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    position: relative;
    transition: 500ms;
    opacity: 1;
}

/* App background overlay*/
.weather-app::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
}

.container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 3rem 4rem 3rem;
}

.container>div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.brand {
    color: #fff;
}

.city-time,
.temp,
.weather {
    margin: 0 1rem;
}

.city-time h1 {
    margin: 0;
    margin-bottom: 0.2rem;
    font-size: 3rem;
}

.temp {
    font-size: 7rem;
    margin: 0;
}

.weather img {
    display: block;
    margin: 0 .5rem 0;
}

.panel {
    position: absolute;
    width: 40%;
    height: 100%;
    top: 0;
    right: 0;
    background: rgba(110, 110, 110, 0.25);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 1;
    padding: 3rem 2rem;
    overflow-y: auto;
}

.panel form {
    margin-bottom: 3rem;
}

.submit {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.5rem;
    margin: 0;
    border: 0;
    outline: 0;
    background: #fa6d1b;
    color: #fff;
    cursor: pointer;
    font-size: 1.2rem;
    transition: 0.4s;
}

.submit:hover {
    background: #fff !important;
    color: #000;
}

.search {
    background: none;
    border: none;
    border-bottom: 1px #ccc solid;
    padding: 0 2rem 0.5rem 0;
    width: 90%;
    color: #fff;
    font-size: 1.1rem;
}

.search:focus {
    outline: none;
}

.search::placeholder {
    color: #ccc;
}

.panel ul {
    padding: 0 0 1rem 0;
    margin: 2rem 0;
    border-bottom: 1px #ccc solid;
}

.panel ul li {
    color: #ccc;
    margin: 2.5rem 0;
}

.panel ul h4 {
    color: #ccc;
    margin: 3rem 0;
}

.city {
    display: block;
    cursor: pointer;
}
.city > .city-name {
    display: inline-block;
    transition: transform .2s;
}
.city > .city-name:hover {
    color: #fff;
    transform: scale(1.1);
}

.details li {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text-capitalize {
    text-transform: capitalize;
}

.text-uppercase {
    text-transform: uppercase;
}

/* Responsive Design Code */
@media only screen and (max-width: 800px) {

    .panel,
    .container {
        position: relative;
        width: 100%;
        top: initial;
    }
}

@media only screen and (max-width: 500px) {
    html {
        font-size: 12px;
    }
}

@media only screen and (max-width: 300px) {
    .weather-app {
        min-height: 40rem;
    }
}
</style>
