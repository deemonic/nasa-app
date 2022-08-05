<template>
        <main class="justify-center w-full">
           
            <div class="bg-image">
                <!-- Nasa Search -->
                <div class="flex-col max-w-4xl mx-auto space-y-8 py-12 px-8">
                    
                    <h1 class="text-4xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl">
                        <span class="block xl:inline text-white">NASA Search</span>
                    </h1>

                    <div class="flex items-center">

                        <input v-model="searchTerm" type="text" class="rounded-l-sm w-full h-12 px-4 text-xl" placeholder="Search for the stars..." />

                        <span>
                            <button v-on:click="search()" class="px-6 bg-indigo-600 h-12 text-white text-xl font-medium">Search</button>
                        </span>

                    </div>

                    <div class="flex justify-evenly items-center text-2xl text-white">

                        <label class="flex items-center">
                            <input v-model="imageChecked" class="w-6 h-6 mr-2" type="checkbox" />
                            Image
                        </label>

                        <label class="flex items-center">
                            <input v-model="audioChecked" class="w-6 h-6 mr-2" type="checkbox" />
                            Audio
                        </label>

                    </div>

                </div>
                <!-- Nasa Search-->
            </div>
            
            <!-- Errors -->
            <div v-if="errors.length" class="flex-col max-w-4xl mx-auto py-6 mt-4 px-8 bg-red-200 border border-red-500 rounded-lg shadow">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>
            <!-- Errors -->

            <!-- Search Results -->
            <div v-else class="flex-col max-w-4xl mx-auto space-y-8 py-12">

                <div v-if="searchResults.length != 0" class="flex font-semibold">

                    Total Results: {{ metaData.total_hits }}
                
                </div>

                <div class="grid grid-cols-4 gap-4">

                    <div v-for="result in searchResults">

                        <div class="rounded shadow-lg overflow-hidden">

                            <img :src="result.links[0].href" class="object-cover h-48 object-center" />
                            
                            <button class="px-4 w-full bg-indigo-600 h-8 text-white font-medium">View</button>

                        </div>
    
                    </div>

                </div>
                
            </div>
            <!-- Search Results -->

        </main>

</template>


        <script>

            export default {
        
                data() {
                    return {
                        searchTerm: null,
                        imageChecked: false,
                        audioChecked: false,
                        errors: [],
                        searchResults: [],
                        metaData: [],
                        links: []
                    }
                },
                methods: {
                    checkForm() {

                        this.errors = [];

                        if(this.searchTerm == null || this.searchTerm == "") {
                            this.errors.push('Please enter a search term');
                        }

                        if(this.imageChecked == false && this.audioChecked == false) {
                                this.errors.push('Please check either a image or audio');
                        }
                    },
                    search() {

                        this.checkForm()

                        if(this.errors.length == 0) {
                            
                            axios.get('/api/search?q=' + this.searchTerm + '&media_type=image')
                                .then((response) => {
                                    this.searchResults = response.data.collection.items
                                    this.metaData = response.data.collection.metadata
                                    this.links = response.data.collection.links
                                })
                        }
                    }
                },
               
            }
        
        </script>