
import { defineStore } from "pinia";


export const useSearchStore = defineStore("searchStore", {

    state: () => ({
        
        searchTerm: null,
        resultsCount: 0,
        results: [],
        links: [],
        asset: [],
        
    }),


    actions: {

        initialize()
        {
            if(localStorage.getItem('results')) {
                this.results = JSON.parse(localStorage.getItem('results'))
            }

            if(localStorage.getItem('resultsCount')) {
                this.resultsCount = JSON.parse(localStorage.getItem('resultsCount'))
            }

            if(localStorage.getItem('links')) {
                this.links = JSON.parse(localStorage.getItem('links'))
            }
            
        },

        storeResults(results) {

            localStorage.removeItem('results');
            localStorage.setItem('results', JSON.stringify(results.data.collection.items));
            this.results = JSON.parse(localStorage.getItem('results'));

            localStorage.removeItem('resultsCount');
            localStorage.setItem('resultsCount', JSON.stringify(results.data.collection.metadata.total_hits));
            this.resultsCount = JSON.parse(localStorage.getItem('resultsCount'));

            if(results.data.collection.links) {
                localStorage.removeItem('links');
                localStorage.setItem('links', JSON.stringify(results.data.collection.links));
                this.links = JSON.parse(localStorage.getItem('links'));
            } else {
                this.links = []
            }
            
        },

        storeAsset(asset) {
            
            localStorage.removeItem('asset');
            localStorage.setItem('asset', JSON.stringify(asset.data[0]));
            this.asset = JSON.parse(localStorage.getItem('asset'));

        },

        getAsset() {
           
            if(localStorage.getItem('asset')) {
                this.asset = JSON.parse(localStorage.getItem('asset'))
            }
        }

    }

    
})