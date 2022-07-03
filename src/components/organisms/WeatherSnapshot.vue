<script setup lang="ts">
// Top level imports
import { computed } from "vue";
import type { Weather } from "@/types";

// Atoms / Molecules / Organisms
import Image from "../atoms/Image.vue";

interface IProps {
    temp: number;
    city: string;
    weather: Weather[]
    dt?: number
}

const props = defineProps<IProps>();

// Computed Properties
// Convert kelvin to celcius
const tempInCelcius = computed(() => Math.ceil(props.temp - 273.15));
const time = computed(() => {
    const dateTime = new Date();
    return `${dateTime.getHours()}:${dateTime.getMinutes()}`;
});

const date = computed(() => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date().toLocaleString('en-IN', options as any);
});

const isDay = true;

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
                    {{date}}
                </span>
            </small>
        </div>

        <div class="weather">
            <Image
                src="/assets/icons/day/113.png"
                classes="icon"
                alt="icon"
                width="50"
                height="50"
            />
            <span class="condition">{{weather[0].main}}</span>
        </div>
    </div>
</template>