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

const { weatherData } = store;
const weatherDetails = [
    { param: 'cloudy', value: `${weatherData.clouds.all} %` },
    { param: 'humidity', value: `${weatherData.main.humidity} %` },
    { param: 'wind', value: `${weatherData.wind.speed} m/s` }
];

// Data declaration
const city: Ref<string> = ref('');

/** Handler functions */
const initiateSearch = () => {
    alert(city.value);
}
</script>

<template>
    <div class="panel">
        <Search
            v-model="city"
            @input="inputVal => city = inputVal"
            @click="initiateSearch"
        />
        
        <List classes="cities">
            <ListItem classes="city" v-for="city of cities" :key="city.key">
                {{city.label}}
            </ListItem>
        </List>

        <List classes="details">
            <h4>Weather details</h4>

            <ListItem
                v-for="detail of weatherDetails"
                :key="detail.param"
            >
                <span>{{detail.param}}</span>
                <span :class="detail.param">{{detail.value}}</span>
            </ListItem>
        </List>
    </div>
</template>