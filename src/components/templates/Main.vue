<script setup lang="ts">
// Top level imports

// store
import { store } from '@/store';

// Atoms / Molecules / Organisms
import WeatherSnapshot from '../organisms/WeatherSnapshot.vue';

</script>

<template>
    <div class="container">
        <h3 class="brand text-uppercase">weather app &trade;</h3>

        <WeatherSnapshot
            :temp="store.weatherData.main.temp"
            :city="store.weatherData.name"
            :weather="store.weatherData.weather"
            :dt="store.weatherData.dt"
        />
    </div>
</template>