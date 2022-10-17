<template>
    <div>
        <!-- Area of Interest -->
        <div class="bg-gray-100 my-20">
            <p class="my-4 pt-20 text-center text-4xl font-semibold">Area of Interest</p>

            <!-- Area of Cards -->
            <div class="flex flex-wrap items-center justify-center pb-20 mb-10 2xl:mx-80 xl:mx-60">
            <!-- Card Looping -->
                <div v-for="interest in interests" v-bind:key="interest.id" class="skill">
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
        </div>
        <!-- End of Area of Interest-->
    </div>
</template>

<script>
    export default {
        name: 'InterestContent',
        data() {
            return {
                interests: [
                    {
                        index: 1,
                        title: "Data Analytics",
                        description: "I like exploring what happens to data anomalies and finding reasons why is that happening.",
                        path: "M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
                    },
                    {
                        index: 2,
                        title: "Machine Learning",
                        description: "Raise the accuracy for prediction it's so exciting! I'm used to finding the best model and implementing it to the data.",
                        path: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
                    },
                    {
                        index: 3,
                        title: "NLP",
                        description: "From words, you will learn and find something interesting about how perception of people to a subject.",
                        path: "M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm160-32c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"
                    },
                    {
                        index: 4,
                        title: "Computer Vision",
                        description: "You can do whatever you want when it comes to images or videos. I also like create model for prediction.",
                        path: "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z"
                    },
                    {
                        index: 5,
                        title: "Collaboration",
                        description: "I love it when people come together to solve problems, brainstorming or achieve a common goal.",
                        path: "M0 224.2C0 100.6 100.2 0 224 0h32c95.2 0 174.2 69.3 189.4 160.1c2.2 13 6.7 25.7 15 36.1l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM240 80c-8.8 0-16 7.2-16 16c0 33-39.9 49.5-63.2 26.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6C161.5 168.1 145 208 112 208c-8.8 0-16 7.2-16 16s7.2 16 16 16c33 0 49.5 39.9 26.2 63.2c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0C184.1 302.5 224 319 224 352c0 8.8 7.2 16 16 16s16-7.2 16-16c0-33 39.9-49.5 63.2-26.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6C318.5 279.9 335 240 368 240c8.8 0 16-7.2 16-16s-7.2-16-16-16c-33 0-49.5-39.9-26.2-63.2c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0C295.9 145.5 256 129 256 96c0-8.8-7.2-16-16-16zM216 224c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm72 32c0 8.8-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16z"
                    }
                ]
            }
        }
    }
</script>