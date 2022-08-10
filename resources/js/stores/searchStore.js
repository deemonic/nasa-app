
import { defineStore } from "pinia";


export const useSearchStore = defineStore("searchStore", {

    state: () => ({
        
        searchTerm: null,
        imageChecked: false,
        audioChecked: false,
        resultsCount: 0,
        results: [],
        links: [],
        asset: [],
        mediaAssets: [],
        
    }),


    actions: {

        initialize()
        {
            if(sessionStorage.getItem('searchTerm')) {
                this.searchTerm = JSON.parse(sessionStorage.getItem('searchTerm'))
            }

            if(sessionStorage.getItem('imageChecked')) {
                this.imageChecked = JSON.parse(sessionStorage.getItem('imageChecked'))
            }

            if(sessionStorage.getItem('audioChecked')) {
                this.audioChecked = JSON.parse(sessionStorage.getItem('audioChecked'))
            }

            if(sessionStorage.getItem('results')) {
                this.results = JSON.parse(sessionStorage.getItem('results'))
            }

            if(sessionStorage.getItem('resultsCount')) {
                this.resultsCount = JSON.parse(sessionStorage.getItem('resultsCount'))
            }

            if(sessionStorage.getItem('links')) {
                this.links = JSON.parse(sessionStorage.getItem('links'))
            }
            
        },

        storeResults(results) {

            sessionStorage.removeItem('searchTerm')
            sessionStorage.setItem('searchTerm', JSON.stringify(this.searchTerm))
            this.searchTerm = JSON.parse(sessionStorage.getItem('searchTerm'))

            sessionStorage.removeItem('imageChecked')
            sessionStorage.setItem('imageChecked', JSON.stringify(this.imageChecked))
            this.imageChecked = JSON.parse(sessionStorage.getItem('imageChecked'))

            sessionStorage.removeItem('audioChecked')
            sessionStorage.setItem('audioChecked', JSON.stringify(this.audioChecked))
            this.audioChecked = JSON.parse(sessionStorage.getItem('audioChecked'))

            sessionStorage.removeItem('results')
            sessionStorage.setItem('results', JSON.stringify(results.data.collection.items))
            this.results = JSON.parse(sessionStorage.getItem('results'))

            sessionStorage.removeItem('resultsCount')
            sessionStorage.setItem('resultsCount', JSON.stringify(results.data.collection.metadata.total_hits))
            this.resultsCount = JSON.parse(sessionStorage.getItem('resultsCount'))

            if(results.data.collection.links) {
                sessionStorage.removeItem('links')
                sessionStorage.setItem('links', JSON.stringify(results.data.collection.links))
                this.links = JSON.parse(sessionStorage.getItem('links'))
            } else {
                this.links = []
            }
            
        },

        storeAsset(asset) {
            
            sessionStorage.removeItem('asset');
            sessionStorage.setItem('asset', JSON.stringify(asset.data[0]))
            this.asset = JSON.parse(sessionStorage.getItem('asset'))

        },

        getAsset() {
           
            if(sessionStorage.getItem('asset')) {
                this.asset = JSON.parse(sessionStorage.getItem('asset'))
            }
        },

        storeMediaAssets(assets) {
            
            let mediaAssets = assets.data.collection.items[0]
            sessionStorage.removeItem('mediaAssets');
            sessionStorage.setItem('mediaAssets', JSON.stringify(mediaAssets))
            this.mediaAssets = JSON.parse(sessionStorage.getItem('mediaAssets'))

        },
        

    }

    
})