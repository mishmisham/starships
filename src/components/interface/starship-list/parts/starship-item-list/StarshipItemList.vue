<template lang="pug">
ul.starship-item-list
    starship-item-list-item(
        v-for="(item, index) of starships"
        :key="index"
        :item="item"
    )
</template>

<script setup>
import { useStarshipsStore } from '@/store/starshipStore';
import { computed } from 'vue';
import StarshipItemListItem from '../starship-item-list-item/StarshipItemListItem';

const starshipStore = useStarshipsStore();
const starships = computed(() => starshipStore.getStarships);

</script>
<style lang="scss">
@import './starship-item-list.scss';
</style>