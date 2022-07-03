<script lang="ts" setup>
// Top level imports

// Props type definitions
interface IProps {
    classes?: string;
}
const { classes = '' } = defineProps<IProps>()
</script>

<template>
    <li :class="classes">
        <slot></slot>
    </li>
</template>