<script lang="ts" setup>
// Atoms / Molecules / Organisms
import Input from "../atoms/Input.vue";
import Button from "../atoms/Button.vue";
import Icon from "../atoms/Icon.vue";

// Props type definitions
interface IProps {
    modelValue: string;
}
const props = defineProps<IProps>();

// component emits
// type definition
interface IEmits {
    (e: 'input', value: string): void;
    (e: 'click'): void
}
const emit = defineEmits<IEmits>();
</script>

<template>
    <Input
        v-model="modelValue"
        classes="search"
        placeholder="Search location"
        @input="inputVal => emit('input', inputVal)"
    />

    <Button @click="emit('click')">
        <Icon icon-key="search"/>
    </Button>
</template>