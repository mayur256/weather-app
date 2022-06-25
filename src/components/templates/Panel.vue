<script setup lang="ts">
</script>

<template>
    <div class="panel">
        <form id="locationinput">
            <input type="text" name="" class="search" placeholder="Search location" />

            <button type="submit" class="submit">
                <span class="material-icons">search</span>
            </button>
        </form>

        <ul class="cities">
            <li class="city">New York</li>
            <li class="city">New Delhi</li>
            <li class="city">Paris</li>
            <li class="city">Tokyo</li>
        </ul>

        <ul class="details">
            <h4 class="">Weather details</h4>
            <li class="">
                <span>Cloudy</span>
                <span class="cloud">89%</span>
            </li>
            <li class="">
                <span>Humidity</span>
                <span class="humidity">64%</span>
            </li>
            <li class="">
                <span>Wind</span>
                <span class="wind">8km/h</span>
            </li>

        </ul>
    </div>
</template>