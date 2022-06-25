<script setup lang="ts">
// Top level imports
import { ref } from 'vue';
import type { Ref } from 'vue';

const iconName: Ref<string> = ref('113');
const iconDirPath = "../../assets/icons/day/"
</script>

<template>
    <div class="container">
        <h3 class="brand">the weather</h3>

        <div>
            <h1 class="temp">16&#176;</h1>

            <div class="city-time">
                <h1 class="city-name">London</h1>
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
                <span class="condition">Cloudy</span>
            </div>
        </div>
    </div>
</template>