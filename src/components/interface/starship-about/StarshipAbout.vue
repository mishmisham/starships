<template lang="pug">
preloader-component(v-if="!ready")
transition(
    name="fade"
    appear
)
    .starship-about(v-if="ready")

        .starship-about_title
            h1 {{ starship.name }}
            span.starship-about_title-starship-class {{ starship.starship_class }}
            span.starship-about_title-manufacturer by {{ starship.manufacturer }}
        
        container-component(
            :inner="true"
            :backgrounded="true"
        )
            .starship-about_main-characterisitics
                h3 Characteristics
                p(
                    v-for="(option, i) in starshipMainParams"
                )
                    b {{option.label}}: 
                    span {{ starship[option.field] }}

        container-component(
            :inner="true"
            :backgrounded="true"
        )
            h4.starship-about_cost
                span Cost:
                span {{ priceToLocale(starship.cost_in_credits) }}
            
</template>
<script setup>
import { onBeforeMount, ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { getStarshipDetails } from '@/requests/starships/getStarshipDetails';
import PreloaderComponent from '@/components/reusables/preloader-component/PreloaderComponent';
import ContainerComponent from '@/components/reusables/container-component/ContainerComponent';
import { starshipMainParams } from './starshipParamLists';
import { priceToLocale } from '@/utils/priceToLocale';

const ready = ref(false);
const route = useRoute();
const starship = reactive({});

onBeforeMount(async() => {
    const data = await getStarshipDetails(route.params.id);
    Object.assign(starship, data)
    ready.value = true;
});

</script>

<style lang="scss">
@import './starship-about.scss';
</style>
