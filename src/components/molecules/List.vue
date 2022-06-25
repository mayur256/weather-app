<script lang="ts" setup>
// Top level imports

// Props type definitions
interface IProps {
    classes?: string;
}
const { classes = '' } = defineProps<IProps>()
</script>

<template>
    <ul :class="classes">
        <slot></slot>
    </ul>
</template>