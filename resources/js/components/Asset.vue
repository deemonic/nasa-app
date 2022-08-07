<template>
        <main class="justify-center w-full">
           
            <!-- Search Results -->
            <div class="flex-col max-w-4xl mx-auto space-y-8 py-12">
                    Asset
                
            </div>
            <!-- Search Results -->

        </main>

</template>

        <script>

            export default {
    
                data() {
                    return {
                        errors: [],
                        assetData: [],
                    }
                },
                mounted() {

                    
                    
                },
                methods: {
                    getAsset() {
                        
                        axios.get('/api/asset/' + this.$route.params.id)
                            .then((response) => {
                                this.assetData = response.data
                            })
                        }
                }
                
               
            }
        
        </script>