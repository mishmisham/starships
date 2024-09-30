import { defineStore } from 'pinia';
import { getAllStarships } from '@/requests/starships/getAllStarships';

export const useStarshipsStore = defineStore('starsipsStore', {
  state: () => ({
    starships: [],
    count: 0,
    next: null,
    previous: null,
  }),
  actions: {
    async searchStarships(params) {
        const list = await getAllStarships(params);
        const {
          results,
          count,
          next,
          previous
        } = list;

        this.starships = results;
        this.count = count;
        this.next = next ? next.split('?')[1] : null;
        this.previous = previous ? previous.split('?')[1] : null;
    },
  },
  getters: {
    getStarships: (state) => state.starships,
  },
});