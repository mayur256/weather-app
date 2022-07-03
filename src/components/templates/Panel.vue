<script setup lang="ts">
// Top level imports
import { ref } from "vue";
import type { Ref } from "vue";
// Custom types
import type { IWeatherResponse } from "@/types";

// store 
import { store } from "@/store";

// Atoms / Molecules / Organisms
import Search from "../molecules/Search.vue";
import List from "../molecules/List.vue";
import ListItem from "../atoms/ListItem.vue";

// Utilities
// Constants
import { API_BASE, API_KEY, ERROR_404 } from "@/utils/Constants";
import { isDay, changeBackgroundImage, getCurrentWeather } from "@/utils/Common";

const cities = [
    { key: 'new-york', label: 'New York' },
    { key: 'new-delhi', label: 'New Delhi' },
    { key: 'london', label: 'London' },
    { key: 'tokyo', label: 'Tokyo' },
];

const weatherDetails = [
    { param: 'cloudy', value: `$ %` },
    { param: 'humidity', value: `${store.weatherData.main.humidity} %` },
    { param: 'wind', value: `${store.weatherData.wind.speed} m/s` }
];

// Data declaration
const city: Ref<string> = ref('');

/** Handler functions */
const initiateSearch = (): void => {
    const cityVal = city.value;
    if (!cityVal) return;

    fetch(`${API_BASE}?q=${cityVal}&appid=${API_KEY}`)
        .then((response): Promise<IWeatherResponse> => response.json())
        .then((weatherData: IWeatherResponse): void => {
            if (weatherData.cod !== ERROR_404) {
                (store.weatherData as IWeatherResponse) = weatherData;

                // change background and icons based on current weather data
                const weatherImgKey = getCurrentWeather(weatherData);
                const timeOfDay = isDay() ? 'day' : 'night';
                changeBackgroundImage(timeOfDay, weatherImgKey);
            }
        })
}

const onCityClicked = (cityArg: { key: string, label: string }): void => {
    if (city.value === cityArg.label) return;

    city.value = cityArg.label;
    initiateSearch();
}

</script>

<template>
    <div class="panel">
        <Search v-model="city" @input="inputVal => city = inputVal" @click="initiateSearch" />

        <List classes="cities">
            <h4>Top Cities</h4>
            <ListItem classes="city" v-for="city of cities" :key="city.key" @click="onCityClicked(city)">
                <span class="city-name"> {{city.label}}</span>
            </ListItem>
        </List>

        <List classes="details">
            <h4>Weather details</h4>

            <ListItem v-for="detail of weatherDetails" :key="detail.param">
                <span class="text-capitalize">{{detail.param}}</span>
                <span :class="detail.param" v-if="detail.param === 'cloudy'">{{store.weatherData.clouds.all}} %</span>
                <span :class="detail.param" v-if="detail.param === 'humidity'">{{ store.weatherData.main.humidity}} %</span>
                <span :class="detail.param" v-if="detail.param === 'wind'">{{ store.weatherData.wind.speed}} m/s </span>
            </ListItem>
        </List>
    </div>
</template>