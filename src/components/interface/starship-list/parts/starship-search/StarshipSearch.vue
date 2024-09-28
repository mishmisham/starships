<template lang="pug">
.starship-search
    .starship-search_inner
        text-input(
            v-model="searchQuery"
            placeholder="Search starship"
        )
        easy-pagination(
            @back="e=>runSearch(starshipStore.previous, false)"
            @next="e=>runSearch(starshipStore.next, false)"
            :enableBack="starshipStore.previous && ready"
            :enableNext="starshipStore.next && ready"
        )
</template>
<script setup>
import { ref, defineEmits, inject, watch } from 'vue';
import { useStarshipsStore } from '@/store/starshipStore';
import TextInput from '@/components/input/text-input/TextInput.vue';
import EasyPagination from '@/components/button-composites/easy-pagination/EasyPagination';

const ready = inject('ready');
const searchQuery = ref('');
const debounced = ref(null);
const emit = defineEmits('setReadyValue');
const starshipStore = useStarshipsStore();

const runSearch = async(query, stringify=true)=>{
    clearTimeout(debounced);
    emit('setReadyValue', false);
    debounced.value = setTimeout(async () => {
        await starshipStore.searchStarships(query, stringify);
        setTimeout(() => {
            emit('setReadyValue', true);
        }, 250)
    }, 500);
}

watch([searchQuery], (newData) => {
    runSearch({search: newData[0]});
});

</script>
<style lang="scss">
@import './starship-search.scss';
</style>