<template>
    <!-- Jumbotron -->
    <div class="overflow-hidden relative z-0 lg:bg-cover bg-no-repeat bg-center p-12 text-center md:h-[80vh] lg:h-[70vh]">
        <!-- Background Image -->
        <div class="overflow-hidden absolute top-0 right-0 bottom-0 left-0 z-0 max-h-full">
            <img src="../assets/image/splash.jpg" alt="" class="brightness-[.30] h-full w-full lg:h-auto object-cover"/>
        </div>

        <!-- Headings -->
        <div class="flex h-full items-center justify-center ">
            <div class="text-white z-10">
                <p class="text-3xl lg:text-6xl font-semibold">Mohamad Abyannaufal</p>
                <p class="lg:mt-14 mt-5 lg:text-lg text-sm">Welcome to my website.</p>
                <p class="lg:text-lg text-sm">I'm a data enthusiast and fresh graduate from Dian Nuswantoro University</p>


                <!-- Social Media Button and Portfolio-->
                <div class="lg:mt-10 mt-5 flex flex-wrap items-center justify-center gap-x-3">
                    <div class="h-11 w-11 cursor-pointer transform rounded-full border-2 py-3 border-white bg-transparent text-white transition duration-200 ease-in hover:-translate-y-1 hover:border-none hover:bg-[#0E76A8] hover:text-white active:translate-y-0">
                        <a href="https://www.linkedin.com/in/abyannaufal27/">
                            <svg class="mx-auto h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                            </svg>
                        </a>
                    </div>
                    <div class="h-11 w-11 cursor-pointer transform rounded-full border-2 py-3 border-white bg-transparent text-white transition duration-200 ease-in hover:-translate-y-1 hover:border-none hover:bg-[#00ACEE] hover:text-white active:translate-y-0">
                        <a href="https://www.twitter.com/abyannaufal27/">
                            <svg class="mx-auto h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                            </svg>
                        </a>
                    </div>
                    <div class="h-11 w-11 cursor-pointer transform rounded-full border-2 py-3 border-white bg-transparent text-white transition duration-200 ease-in hover:-translate-y-1 hover:border-none hover:bg-[#211F1F] hover:text-white active:translate-y-0">
                        <a href="https://github.com/hello-abyannaufal">
                            <svg class="mx-auto h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                        </a>
                    </div>
                    <div class="h-11 w-11 cursor-pointer transform rounded-full border-2 py-3 border-white bg-transparent text-white transition duration-200 ease-in hover:-translate-y-1 hover:border-none hover:bg-[#1EB4F2] hover:text-white active:translate-y-0">
                        <a href="https://www.kaggle.com/abyannaufal27">
                            <svg class="mx-auto h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 512">
                                <path d="M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <router-link :to="{ path: '/portfolio' }">
                    <button class="mt-5 transform rounded-lg border-2 border-white bg-transparent py-2 px-10 font-semibold text-white transition duration-200 ease-in hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white active:translate-y-0">Portfolio</button>
                </router-link>
            </div>
        </div>
    </div>
    <!-- End of Jumbotron -->
</template>

<script>
    export default {
        name: 'JumbotronBody'
    }
</script>
