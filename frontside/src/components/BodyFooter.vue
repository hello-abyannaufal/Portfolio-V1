<template>
    <div class="relative bg-blueGray-200 pt-8 pb-6">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap text-left lg:text-left">
                <div class="w-full md:w-6/12 px-4">
                    <h4 class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                    <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                        Find me on any of these platforms.
                    </h5>
                    <div class="mt-6 lg:mb-0 mb-6">
                        <button class="bg-white text-lightBlue-400 hover:text-white hover:bg-[#00ACEE] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <a href="https://twitter.com/abyannaufal27">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </button>
                        
                        <button class="bg-white text-[#0E76A8] hover:text-white hover:bg-[#0E76A8] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <a href="https://www.linkedin.com/in/abyannaufal27">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </button>

                        <button class="bg-white text-[#1EB4F2] hover:text-white hover:bg-[#1EB4F2] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <a href="https://www.kaggle.com/abyannaufal27">
                                <i class="fab fa-kaggle"></i>
                            </a>
                        </button>

                        <button class="bg-white text-blueGray-800 hover:text-white hover:bg-[#211F1F] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <a href="https://github.com/hello-abyannaufal">
                                <i class="fab fa-github"></i>
                            </a>
                        </button>
                    </div>
                </div>
                <div class="w-full md:w-6/12">
                    <div class="flex flex-wrap items-center justify-center mb-6">
                        <div class="w-full md:w-4/12 px-4 ml-auto">
                            <span class="block uppercase text-blueGray-500 text-sm font-bold mb-2">Links</span>
                            <ul class="list-unstyled">
                            <li>
                                <router-link :to="{ path: '/about' }">
                                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About</a>
                                </router-link>
                            </li>
                            <li>
                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Portfolio</a>
                            </li>
                            <li>
                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Certificate</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-blueGray-300">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="md:w-full px-4 mx-auto text-center">
                <div class="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2022</span>
                <a href="https://github.com/hello-abyannaufal" class="text-blueGray-500 hover:text-gray-800" target="_blank"> Mohamad Abyannaufal</a>.
                Powered by
                <a href="https://vuejs.org" class="text-blueGray-500 hover:text-[#42B883]">Vue JS</a> and
                <a href="https://tailwindcss.com/" class="text-blueGray-500 hover:text-[#35B3EB]">Tailwind CSS</a>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterBody'
    }
</script>