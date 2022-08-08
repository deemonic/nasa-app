import { defineStore } from "pinia";

export const useSearchStore = defineStore("searchStore", {

    state: () => {

        return {
            results: [],
            item: null,
        };
    },

    actions: {

        storeResults(results) {
            this.results = results;
        },

        getResults() {
            return this.results;
        },

        storeItem(item) {
            this.item = item;
        },

        getItem() {
            return this.item;
        }

    }
    
})