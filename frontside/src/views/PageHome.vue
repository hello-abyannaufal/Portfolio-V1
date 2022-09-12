<template>
<div>
    <!-- Jumbotron -->
    <div class="overflow-hidden relative z-0 bg-green-400 lg:bg-cover bg-no-repeat bg-center p-12 text-center md:h-[80vh] lg:h-[70vh]">
        <!-- Background Image -->
        <div class="overflow-hidden absolute top-0 right-0 bottom-0 left-0 z-0 max-h-full">
            <img src="../assets/image/splash.jpg" alt="" class="brightness-[.30] h-full w-full lg:h-auto object-cover"/>
        </div>

        <!-- Headings -->
        <div class="flex h-full items-center justify-center bg-gray-200">
            <div class="text-white z-10">
                <p class="text-3xl lg:text-6xl font-semibold">Mohamad Abyannaufal</p>
                <p class="lg:mt-14 mt-5 lg:text-lg text-sm">Welcome to my website.</p>
                <p class="lg:text-lg text-sm">I'm a data enthusiast and fresh graduate from Dian Nuswantoro University</p>


                <!-- Social Media Button and Portfolio-->
                <div class="lg:mt-10 mt-5 flex flex-wrap items-center justify-center gap-x-3">
                    <div class="cursor-pointer rounded-full border-2 w-11 h-11 text-white border-white p-3 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#0E76A8] duration-[400ms,700ms] transition-[color,box-shadow]">
                        <svg class="mx-auto h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                        </svg>
                    </div>

                    <div class="cursor-pointer rounded-full border-2 w-11 h-11 text-white border-white p-3 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#00ACEE] duration-[400ms,700ms] transition-[color,box-shadow]">
                        <svg class="mx-auto h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                        </svg>
                    </div>
                    <div class="cursor-pointer rounded-full border-2 w-11 h-11 text-white border-white p-3 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#211F1F] duration-[400ms,700ms] transition-[color,box-shadow]">
                        <svg class="mx-auto h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                        </svg>
                    </div>
                </div>
                <button class="mt-5 transform rounded-lg border-2 border-white bg-transparent py-2 px-10 font-semibold text-white transition duration-200 ease-in hover:-translate-y-1 hover:border-transparent hover:bg-cyan-500 hover:text-white active:translate-y-0">Portfolio</button>
            </div>
        </div>
    </div>
    <!-- End of Jumbotron -->

    <!-- Body Skill -->
    <p class="my-4 mt-36 text-center text-4xl font-semibold">Programming Skills</p>

    <div class="flex flex-wrap items-center justify-center px-10">
        <!-- Card looping -->
        <div v-for="skill in skillProgramming" v-bind:key="skill.id" class="skill">
            <div class="w-80 rounded-xl p-7">
                <!-- Logo -->
                <div class="mx-auto w-24 cursor-pointer rounded-full border-2 border-blue-500 p-3 text-blue-500 transition-[color,box-shadow] duration-[400ms,700ms] hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-500">
                    <svg class="mx-auto h-16 w-16 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path v-bind:d="[skill.path]" />
                    </svg>
                </div>

                <!-- Description -->
                <p class="mt-5 text-center text-xl font-bold">{{ skill.title }}</p>
                <p class="text-center text-sm font-bold text-gray-700">{{ skill.class }}</p>
                <p class="mt-3 text-center text-sm text-gray-600">{{ skill.description }}</p>
            </div>
        </div>
    </div>
    <!-- End of Body Skill-->
    
    <!-- Area of Interest -->
    <p class="my-4 mt-36 text-center text-4xl font-semibold">Area of Interest</p>

    <!-- Area of Cards -->
    <div class="flex flex-wrap items-center justify-center px-10 mb-10 lg:mx-28">
    <!-- Card Looping -->
        <div v-for="interest in interestList" v-bind:key="interest.id" class="skill">
            <div class="w-80 rounded-xl p-7">
                <!-- Logo -->
                <div class="mx-auto w-24 cursor-pointer rounded-xl border-2 border-yellow-400 p-3 text-yellow-400 transition-[color,box-shadow] duration-[400ms,700ms] hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-yellow-400">
                <svg class="mx-auto h-16 w-16 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path v-bind:d="[interest.path]" />
                </svg>
                </div>

                <!-- Description -->
                <p class="mt-5 text-center text-xl font-bold">{{ interest.title }}</p>
                <p class="mt-3 text-center text-sm text-gray-600">{{ interest.description }}</p>
            </div>
        </div>
    </div>
    <!-- End of Area of Interest-->

</div>
</template>

<script>
export default {
    name: 'HomePage',
    data: function() {
        return {
            skillProgramming: [
                {
                    index: 1,
                    title: 'Python',
                    class: 'Advanced',
                    description: 'Python is programming language that easy to use. It have simple syntax and friendly for beginner.',
                    path: 'M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z'
                },
                {
                    index: 2,
                    title: 'JavaScript',
                    class: 'Basic',
                    description: "JavaScript is a dynamic programming language that's used for web development and lots more.",
                    path: 'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z'
                },
                {
                    index: 3,
                    title: 'Vue JS',
                    class: 'Basic',
                    description: "Vue JS is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript.",
                    path: 'M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z'
                }
            ],
            interestList:[
                {
                    index:1,
                    title: "Data Analytics",
                    description: "I like exploring what happens to data anomalies and finding reasons why is that happening.",
                    path: 'M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z'
                },
                {
                    index:2,
                    title: "Machine Learning",
                    description: "Raise the accuracy for prediction it's so exciting! I'm used to finding the best model and implementing it to the data.",
                    path: 'M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z'
                },
                {
                    index:3,
                    title: "NLP",
                    description: "From words, you will learn and find something interesting about how perception of people to a subject.",
                    path: 'M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm160-32c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'
                },
                {
                    index:4,
                    title: "Computer Vision",
                    description: "You can do whatever you want when it comes to images or videos. I also like create model for prediction.",
                    path: 'M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z'
                },
                {
                    index:5,
                    title: "Collaboration",
                    description: "I love it when people come together to solve problems, brainstorming or achieve a common goal.",
                    path: 'M0 224.2C0 100.6 100.2 0 224 0h32c95.2 0 174.2 69.3 189.4 160.1c2.2 13 6.7 25.7 15 36.1l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM240 80c-8.8 0-16 7.2-16 16c0 33-39.9 49.5-63.2 26.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6C161.5 168.1 145 208 112 208c-8.8 0-16 7.2-16 16s7.2 16 16 16c33 0 49.5 39.9 26.2 63.2c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0C184.1 302.5 224 319 224 352c0 8.8 7.2 16 16 16s16-7.2 16-16c0-33 39.9-49.5 63.2-26.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6C318.5 279.9 335 240 368 240c8.8 0 16-7.2 16-16s-7.2-16-16-16c-33 0-49.5-39.9-26.2-63.2c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0C295.9 145.5 256 129 256 96c0-8.8-7.2-16-16-16zM216 224c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm72 32c0 8.8-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16z'
                },
            ]
        }
    }
}
</script>
