<template lang="pug">
.container-wrapper(
    :class="{'container-wrapper--backgrounded': props.backgrounded}"
)
    .container
        .container-corner.container-corner--topright
        .container-corner.container-corner--topleft
        .container-corner.container-corner--bottomleft
        .container-corner.container-corner--bottomright

        .container_inner(v-if="props.inner")
            slot
        
        slot(v-else)
       
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    inner: {
        type: Boolean,
        default: false,
    },
    backgrounded: {
        type: Boolean,
        default: false,
    }
});

</script>

<style lang="scss">
@import './container-component.scss';
</style>