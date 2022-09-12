<template>
    <div class="bg-gray-50 py-10">
        <p class="text-center text-4xl font-semibold">Personal Detail</p>
        <div class="mt-7 flex flex-row items-center justify-center">
            <!-- Area of Personal Detail -->
            <div class="flex flex-col-reverse px-24 lg:flex-row">
                <!-- Description -->
                <div class="flex w-auto flex-col justify-center p-7 lg:w-[35rem]">
                    <p class="mb-7 text-center text-2xl font-semibold text-gray-600 lg:text-left">About Me</p>
                    
                    <p class="pb-4 text-justify text-gray-500">
                        I'm a fresh graduate from Dian Nuswantoro University. Data enthusiast and have strong will to learn about something new. 
                    </p>
                    <p class=" pb-4 text-justify text-gray-500">
                        I learn basic programming when I was in university, learning steganography and encryption for my final project. After graduate, I'm exploring Kaggle to study Machine Learning and realized that my passion is data science. 
                        Currently, I'm learning programming using Python, JavaScript, Vue and Tailwind when this web was created.
                    </p>
                    <p class=" pb-4 text-justify text-gray-500">
                        Currently, I'm learning programming using Python, JavaScript, Vue and Tailwind when this web was created.
                    </p>
                </div>

                <!-- Avatar -->
                <div class="flex flex-col items-center justify-center lg:w-2/5">
                    <div class="mx-auto h-60 w-60 rounded-2xl border-2 border-blue-500 overflow-hidden top-0 right-0 bottom-0 left-0 z-0 max-w-full bg-cover hover:shadow-xl">
                        <!-- Put Photo Here -->
                        <img src="../assets/image/avatar.jpg" alt=""/>
                    </div>
                    <button class="mt-5 transform rounded-lg border-2 border-blue-500 bg-transparent py-2 px-5 font-semibold text-blue-500 transition duration-200 ease-in hover:-translate-y-1 hover:border-transparent hover:bg-blue-500 hover:text-white active:translate-y-0">Open Resume</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutContent'
    }
</script>