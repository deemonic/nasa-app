import { defineStore } from "pinia";

export const useAssetStore = defineStore("assetStore", {

    // State
    state: () => {

        return {

            asset: null

        };
     
    },

    actions: {

        store(data) {
            this.asset = data;
        }
    }

    // Getters
})