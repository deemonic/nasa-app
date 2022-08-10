<template>
        <main class="justify-center w-full">
           
            <div class="bg-image">
                <!-- Nasa Search -->
                <div class="flex-col max-w-4xl mx-auto space-y-8 py-12 px-4 lg:px-0">
                    
                    <h1 class="text-4xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl">
                        <span class="block xl:inline text-white">NASA Search</span>
                    </h1>

                    <div class="sm:flex sm:items-center sm:space-y-0">

                        <input v-model="searchStore.searchTerm" type="text" class="mb-2 sm:mb-0 rounded-l-sm w-full h-12 px-4 text-xl focus:outline-none focus:ring focus:ring-orange-300" placeholder="Search for the stars..." />

                        <span>
                            <button v-on:click="search()" class="w-full px-6 bg-indigo-600 h-12 text-white text-xl font-medium">Search</button>
                        </span>

                    </div>

                    <div class="flex justify-evenly items-center text-lg sm:text-2xl text-white">

                        <label class="flex items-center">
                            <input v-model="searchStore.imageChecked" class="w-6 h-6 mr-2" type="checkbox" />
                            Image
                        </label>

                        <label class="flex items-center">
                            <input v-model="searchStore.audioChecked" class="w-6 h-6 mr-2" type="checkbox" />
                            Audio
                        </label>

                    </div>

                </div>
                <!-- Nasa Search-->
            </div>
            
            <!-- Errors -->
            <div v-if="state.errors.length > 0 " class="flex-col max-w-4xl mx-auto py-6 mt-4 px-8 bg-red-200 border border-red-500 rounded-lg shadow">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in state.errors">{{ error }}</li>
                </ul>
            </div>
            <!-- Errors -->
            
            <Suspense>
                <template #default>
                    <SearchResults/>
                </template>
                <template #fallback>
                    <p>Loading...</p>
                </template>
            </Suspense>
            

        </main>

</template>

<script setup>

import { reactive, onMounted } from 'vue';
import { useSearchStore } from '../stores/searchStore'
import SearchResults from './SearchResults.vue';

const searchStore = useSearchStore()

const state = reactive ({
        errors: [],
})

const validateForm = () => {

    state.errors = []

    if (searchStore.searchTerm == null || searchStore.searchTerm == "") {
        state.errors.push("Please enter a search term");
    }

    if (searchStore.imageChecked == false && searchStore.audioChecked == false) {
        state.errors.push("Please check either a image or audio");
    }

}

const getMediaTypes = () => {

    let mediaTypes = [];

    if (searchStore.imageChecked) {
        mediaTypes.push("image");
    }

    if (searchStore.audioChecked) {
        mediaTypes.push("audio");
    }

    return mediaTypes.toString();
}

const search = async() =>  {

    validateForm()

    if(state.errors.length == 0) {

        try {
            const response = await axios.get("/api/search?q=" + searchStore.searchTerm + "&media_type=" + getMediaTypes())
            searchStore.storeResults(response);
        } catch(err) {
            console.log('err')
        }

    }
}

</script>