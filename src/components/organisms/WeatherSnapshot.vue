<script setup lang="ts">
// Top level imports
import { computed } from "vue";
import type { Weather } from "@/types";

interface IProps {
    temp: number;
    city: string;
    weather: Weather[]
    dt?: number
}

const props = defineProps<IProps>();

// Convert kelvin to celcius
const tempInCelcius = computed(() => Math.ceil(props.temp - 273.15));
const time = computed(() => {
    const dateTime = new Date();
    return `${dateTime.getHours()}:${dateTime.getMinutes()}` ;
})

</script>

<template>
    <div>
        <h1 class="temp">{{tempInCelcius}}&#176;</h1>

        <div class="city-time">
            <h1 class="city-name">{{props.city}}</h1>
            <small>
                <span class="time">{{time}}</span>
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