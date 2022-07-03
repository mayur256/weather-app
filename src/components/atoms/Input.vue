<script setup lang="ts">
// Props type definitions
interface IProps {
    type?: string;
    name?: string;
    classes?: string;
    modelValue?: string;
}
const { type = 'text', name = '', classes = '', modelValue = '' } = defineProps<IProps>();

// component emits
// type definition
interface IEmits {
    (e: 'input', value: string): void
}
const emit = defineEmits<IEmits>();

</script>

<template>
    <input
        :value="modelValue"
        :type="type"
        :name="name"
        :class="classes"
        @input="emit('input', ($event.target as HTMLInputElement).value )"
    />
</template>
