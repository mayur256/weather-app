<script lang="ts" setup>
// Top level imports

// Props type definitions
interface IProps {
    iconKey: string
}

const { iconKey } = defineProps<IProps>();

</script>
<template>
    <span class="material-icons">{{iconKey}}</span>
</template>