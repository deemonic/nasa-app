<template>
        <main class="justify-center mt-10 w-full">
            
            <!-- Nasa Search -->
            <div class="flex-col max-w-4xl mx-auto space-y-8 bg-gray-300 py-12 px-8">
                
                <h1 class="text-4xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl">
                    <span class="block xl:inline">NASA Search</span>
                </h1>

                <div class="flex items-center">
                    <input type="text" class="rounded-l-sm w-full h-12 px-4 text-xl" placeholder="Search for the stars..." />
                    <span>
                        <button class="px-4 bg-indigo-600 h-12 text-white font-medium">Search</button>
                    </span>
                </div>

                <div class="flex justify-evenly items-center text-2xl">

                    <label>
                        <input type="checkbox" value="images" />
                        Images
                    </label>

                     <label>
                        <input type="checkbox" value="audio" />
                        Audio
                    </label>

                </div>

            </div>
            <!-- Nasa Search-->

            <!-- Search Results -->
            <div class="flex-col max-w-4xl mx-auto space-y-8 py-12 px-8">
                Results display here!
            </div>
            <!-- Search Results -->

        </main>

</template>

<script setup>


</script>