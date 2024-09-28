<template lang="pug">
li.starship-item-list_item-wrapper
    container-component
        router-link.starship-item-list_item(:to="itemURL")
            .starship-item-list_item-type
                span {{ item.starship_class }} / 
                span {{ costValue }}
                .starship-item-list_item-corner.starship-item-list_item-corner--bottomleft
            .starship-item-list_item-name
                span {{ item.name }}
            .starship-item-list_item-manufacturer
                span {{ item.manufacturer}}
            .starship-item-list_item-model
                span {{ item.model }}
            
            .starship-item-list_item-params
                span(
                    v-for="(param, key) of starshipParamList"
                    :key="key"
                )
                    u {{ param.label }}: 
                    b {{ item[param.field] }}
        
</template>
<script setup>
import { defineProps, computed } from 'vue';
import ContainerComponent from '@/components/reusables/container-component/ContainerComponent';
import { starshipParamList } from './starshipParamList';
import { priceToLocale } from '@/utils/priceToLocale';
 
const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
});

const itemURL = computed(() => {
    const splittedURL = props.item.url.split('/');
    const itemID = splittedURL[splittedURL.length - 2];
    const fullPath = `/starship/${itemID}`;
    return fullPath;
});

const costValue = computed(() => {
    const {
        cost_in_credits
    } = props.item;
    return priceToLocale(cost_in_credits);
})

</script>
<style lang="scss">
@import './starship-item-list-item.scss';
</style>