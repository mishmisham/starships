<template>
<div class="text-input">
    <input
        type="text"
        v-model="model"
        :disabled="disabled"
        :placeholder="placeholder"
        ref="inputText"
    />
</div>
</template>
<script setup>
import { defineProps, defineModel, defineEmits, defineExpose, useTemplateRef } from 'vue';
const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

const inputText = useTemplateRef('inputText');
const model = defineModel({ default: '' })
const emit = defineEmits(['update:value', 'input']);
const focus = () => {
    if (!inputText.value) {
        return;
    }
    inputText.value.focus();
}

defineExpose({focus});

</script>
<style lang="scss">
@import './text-input.scss';
</style>