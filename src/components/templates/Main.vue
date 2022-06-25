<script setup lang="ts">
// Top level imports
import { ref } from 'vue';
import type { Ref } from 'vue';

// Atoms / Molecules / Organisms
import WeatherSnapshot from '../organisms/WeatherSnapshot.vue';

const iconName: Ref<string> = ref('113');
const iconDirPath = "../../assets/icons/day/"
</script>

<template>
    <div class="container">
        <h3 class="brand text-uppercase">weather app &trade;</h3>

        <WeatherSnapshot
            temp="300"
            city="London"
            :weather="[{
                id: 800,
                main: 'Clear',
                description : 'clear sky',
                icon: '01d'
             } ]" />
    </div>
</template>