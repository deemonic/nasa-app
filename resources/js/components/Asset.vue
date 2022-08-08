<template>
        <main class="justify-center w-full">
           
            <div class="bg-image">
                <!-- Nasa Search -->
                <div class="flex-col max-w-4xl mx-auto space-y-8 py-12 px-8">
                    
                    <h1 class="text-4xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl">
                        <span class="block xl:inline text-white">{{asset}}</span>
                    </h1>

                </div>
                <!-- Nasa Search-->
            </div>

        </main>

</template>

        <script>

        import { useSearchStore } from '../stores/searchStore';

            export default {

                setup() {

                     const searchStore = useSearchStore()

                    return {
                        searchStore
                    }

                    
                },
    
                data() {
                    return {
                        errors: [],
                        asset: null,
                    }
                },
                mounted() {

                    this.asset = this.searchStore.getItem();
                    console.log(this.asset);
                    
                },
                methods: {
                   
                }
                
               
            }
        
        </script>