<script setup lang="ts">
// Top level imports

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
    { param: 'cloudy', value: '89%' },
    { param: 'humidity', value: '64%' },
    { param: 'wind', value: '8km/h' }
];

</script>

<template>
    <div class="panel">
        <Search />

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