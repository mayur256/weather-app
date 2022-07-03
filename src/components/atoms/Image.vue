<script setup lang="ts">

// props definition
// type definition
interface IProps {
    src: string;
    alt: string;
    classes?: string;
    width?: string | number;
    height?: string | number;
};

const props = defineProps<IProps>();

</script>

<template>
    <img
        :src="props.src"
        :class="props.classes ?? ''"
        :alt="props.alt"
        :width="props.width ?? 100"
        :height="props.height ?? 100"
    />
</template>