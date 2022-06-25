<script setup lang="ts">
// Top level imports
import { computed } from "vue";

// Props type definitions
type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string
}

interface IProps {
    temp: string;
    city: string;
    weather: [Weather]
    dt?: number
}

const {
    temp = '',
    city = '',
    weather,
    dt = new Date().getTime()
} = defineProps<IProps>();

// Convert kelvin to celcius
const tempInCelcius = computed(() => Math.floor(+temp - 273.15));

</script>

<template>
    <div>
        <h1 class="temp">{{tempInCelcius}}&#176;</h1>

        <div class="city-time">
            <h1 class="city-name">{{city}}</h1>
            <small>
                <span class="time">06:09</span>
                -
                <span class="date">
                    Monday Sep 19
                </span>
            </small>
        </div>

        <div class="weather">
            <img src="../../assets/icons/day/113.png" class="icon" alt="icon" width="50" height="50" />
            <span class="condition">{{weather[0].main}}</span>
        </div>
    </div>
</template>