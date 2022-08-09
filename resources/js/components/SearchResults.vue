<template>
    <!-- Search Results add v-else back in-->
            <div class="flex-col max-w-4xl mx-auto space-y-8 py-12 px-4 lg:px-0">

                <div v-if="searchStore.results.length != 0" class="flex justify-between font-semibold">

                    <div>
                        Total Results: {{ searchStore.resultsCount }}
                    </div>
                
                </div>

                <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    <div v-for="result in searchStore.results">

                        <div class="flex flex-col justify-between rounded shadow-xl border overflow-hidden h-56">

                            <div v-if="'links' in result">

                                <img :src="result.links[0].href" class="object-cover w-full h-48" />

                            </div>

                            <p v-else class="px-6 pt-6 text-sm overflow-hidden h-48">{{ result.data[0].description.substring(0, 100) + '...' }}</p>

                            <router-link @click="searchStore.storeAsset(result)" class="flex justify-center items-center px-4 w-full bg-indigo-600 h-8 text-white font-medium" 
                                :to="{ name: 'asset', params: { id: result.data[0].nasa_id }}">
                                Select
                            </router-link>

                        </div>
    
                    </div>

                </div>
                
            </div>
            <!-- Search Results -->

            <!-- Show More -->
            <div class="flex justify-center mb-8">
                <button @click="loadMore()" class="bg-gray-800 text-white px-4 py-3 text-xl">Show More</button>
            </div>
            <!-- Show More -->
</template>

<script setup>

import { onMounted } from 'vue';
import { useSearchStore } from '../stores/searchStore'


const searchStore = useSearchStore()

onMounted (() => {
    
    searchStore.initialize()
})

const loadMore = async() =>  {


            const response = await axios.get(searchStore.links[0].href)
            console.log(response);
            //searchStore.storeResults(response);
        

}


</script>