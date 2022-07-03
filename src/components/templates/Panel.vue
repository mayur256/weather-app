<script setup lang="ts">
// Top level imports
import { ref } from "vue";
import type { Ref } from "vue";

// store 
import { store } from "@/store";

// Atoms / Molecules / Organisms
import Search from "../molecules/Search.vue";
import List from "../molecules/List.vue";
import ListItem from "../atoms/ListItem.vue";

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

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ee0b8fbe82f7cb7d637108da99424a74`)
        .then(response => response.json())
        .then(response => store.weatherData = response)
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