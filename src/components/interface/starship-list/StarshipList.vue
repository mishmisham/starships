<template lang="pug">
transition(
    name="fade"
    appear
)
    .starship-list
        starship-search(
            @setReadyValue="setReadyValue"
        )

        preloader-component(v-if="!ready")

        transition(
            name="fade"
            appear
        )
            starship-item-list(
                v-if="ready && starshipStore.starships.length"
            )

            container-component(
                v-else-if="ready"
            )
                h3 No starships found
        
</template>

<script setup>
import { onBeforeMount, ref, provide } from 'vue';
import { useStarshipsStore } from '@/store/starshipStore';
import PreloaderComponent from '@/components/reusables/preloader-component/PreloaderComponent';
import ContainerComponent from '@/components/reusables/container-component/ContainerComponent';
import StarshipItemList from './parts/starship-item-list/StarshipItemList';
import StarshipSearch from './parts/starship-search/StarshipSearch';

const ready = ref(false);
provide('ready', ready);

const starshipStore = useStarshipsStore();

const setReadyValue = (value) => {
    ready.value = value;
}

onBeforeMount(async() => {
    await starshipStore.searchStarships();
    setReadyValue(true);
});

</script>

<style lang="scss">
@import './starship-list.scss';
</style>