<template lang="pug">
.preloader
    svg(
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 150"
        :style="styleLine"
    )
        path(
            fill="none"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="300 385"
            stroke-dashoffset="0"
            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
        )
            animate(
                attributeName="stroke-dashoffset"
                calcMode="spline"
                dur="2"
                values="685;-685"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
            )
</template>
<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    maxWidth: {
        type: String,
        default: '160px'
    },
    maxHeight: {
        type: String,
        default: '160px'
    }
});

const styleLine = computed(() => {
    const {
        maxWidth,
        maxHeight
    } = props;
    return `max-width:${maxWidth}; max-height:${maxHeight}`;
})

</script>
<style lang="scss">
@import './preloader-component.scss';
</style>