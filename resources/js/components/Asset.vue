<template>
        <main class="justify-center w-full">
           
            <div class="bg-image">
                <!-- Title header -->
                <div class="flex-col max-w-4xl mx-auto space-y-8 py-12 px-8">
                    
                    <h1 class="text-4xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl">
                        <span class="block xl:inline text-white">{{ searchStore.asset.title }}</span>
                    </h1>

                </div>
                <!-- Title Header -->
            </div>

            <div class="flex max-w-4xl mx-auto py-3 px-8">

                <router-link @click="searchStore.storeAsset(result)" class="flex justify-center items-center px-4  bg-indigo-600 h-8 text-white font-medium" 
                                :to="{ name: 'search'}">
                                Back
                </router-link>
                
            </div>

            <div v-if="searchStore.asset.media_type == 'audio'" class="flex-col max-w-4xl mx-auto space-y-8 py-12 px-8">
                <audio controls="true" class="border shadow-lg w-full">
                    <source :src="searchStore.mediaAssets.href" type="audio/mp3">
                    Your browser does not support the audio tag.
                </audio>
                <p>{{ searchStore.asset.description }}</p>
            </div>

            <div v-else class="flex-col max-w-4xl mx-auto space-y-8 py-6 px-8">
                <img :src="searchStore.mediaAssets.href" />
                <p>{{ searchStore.asset.description }}</p>
            </div>
            


        </main>

</template>

<script setup>

import { onMounted } from 'vue';
import { useSearchStore } from '../stores/searchStore'


const searchStore = useSearchStore()

onMounted (() => {
    
    searchStore.getAsset()
    getMediaAssets()
})

const getMediaAssets = async() =>  {

    try {
        const response = await axios.get("/api/asset/" + searchStore.asset.nasa_id)
        searchStore.storeMediaAssets(response);
    } catch(err) {
        console.log('err')
    }

    
}

</script>