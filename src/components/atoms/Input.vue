<script setup lang="ts">
// Props type definitions
interface IProps {
    type?: string;
    name?: string;
    classes?: string;
}
const { type = 'text', name = '', classes = ''} = defineProps<IProps>()
</script>

<template>
    <input
        :type="type"
        :name="name"
        :class="classes"
    />
</template>