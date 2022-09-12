<template>
    <!-- Navbar -->
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        <nav class="relative flex flex-wrap items-center justify-between px-2 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 mb-0 shadow-2xl">
            <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <a class="text-lg font-body font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="/">
                        Mohamad Abyannaufal
                    </a>
                    <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none hover:opacity-75" type="button" v-on:click="toggleNavbar()">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
                <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
                    <ul class="flex flex-col lg:flex-row list-none ml-auto">
                        <li class="nav-item">
                            <router-link :to="{ path: '/about' }">
                            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                <i class="fab fa-regular fa-circle-user text-lg leading-lg text-white opacity-75" /><span class="ml-2">About</span>
                            </a>
                        </router-link>
                        </li>
                        <li class="nav-item">
                            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                <i class="fab fa-solid fa-code text-lg leading-lg text-white opacity-75" /><span class="ml-2">Portfolio</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                <i class="fab fa-solid fa-certificate text-lg leading-lg text-white opacity-75" /><span class="ml-2">Certificate</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <!-- End of Navbar -->
</template>

<script>
    export default {
        name: "BodyNavbar",
        data() {
            return {
                showMenu: false
            }
        },
        methods: {
            toggleNavbar: function(){
                this.showMenu = !this.showMenu;
            }
        }
    }
</script>