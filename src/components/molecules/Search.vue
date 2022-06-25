<script lang="ts" setup>
// Atoms / Molecules / Organisms
import Input from "../atoms/Input.vue";
import Button from "../atoms/Button.vue";
import Icon from "../atoms/Icon.vue";
</script>

<template>
    <Input classes="search" placeholder="Search location" />

    <Button>
        <Icon icon-key="search"/>
    </Button>
</template>