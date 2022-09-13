<template>
    <div class="my-20">
        <!-- Area Portfolio -->
        <p class="my-4 pt-20 text-center text-4xl font-semibold">List of Portfolio</p>
        <p class="mt-10 mb-5 text-center first-letter:text-4xl text-3xl font-semibold">Github</p>
        <div class="pb-20 px-5 lg:px-28 2xl:mx-96 xl:mx-52 md:mx-20 mx-7 ">
            <div class="overflow-auto h-[32rem] border-blue-100 border-2 rounded-2xl">
                <div v-for="repo in githubData" :key="repo.id" class="border-t border-b">
                    <div class="flex flex-col items-start sm:flex-row">
                        <!-- Logo -->
                        <div class="mx-auto py-5 sm:p-7">
                            <svg class="h-16 w-16 fill-current sm:h-20 sm:w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </div>

                        <!-- Description -->
                        <div class="pb-4 pr-4 pl-4 sm:pt-4 sm:pl-0 w-full">
                            <p class="pb-2 text-center font-semibold uppercase text-gray-600 first-letter:text-2xl sm:text-left">{{ repo.name }}</p>
                            <p class="pb-2 text-justify text-gray-500 font-semibold">Created at: {{ repo.created_at }}</p>
                            <p class="text-justify text-gray-500">{{ repo.description }}</p>
                            <div class="flex justify-end">
                                <a :href=repo.html_url >
                                    <button class="mt-4 transform rounded-lg border-2 border-green-500 bg-transparent py-2 px-7 font-semibold bg-green-500 text-white transition duration-200 ease-in hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 hover:text-white active:translate-y-0">Open Link</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End of Area Portfolio -->
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'PortfolioContent',
        data() {
            return {
                githubData: null,
                kaggleData: null
            }
        },
        created() {
            this.getGithub()
        },
        methods: {
            async getGithub() {
                try{
                    const response = await axios.get('http://api.github.com/users/hello-abyannaufal/repos')
                    this.githubData = response.data
                    console.log(`created_at is ${typeof(this.githubData[0].name)}`)
                } catch(err) {
                    console.log(err)
                }
            }
        }
    }
</script>
