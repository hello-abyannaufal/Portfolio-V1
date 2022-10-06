<template>
<div class="py-20 lg:px-28 px-5">
    <p class="mb-14 text-center text-4xl font-semibold">My Experience</p>

    <div class="flex w-full items-center justify-center">
        <div>
            <!-- Dot timeline -->
            <div class="flex lg:h-48 h-60">
            <div class="mr-4 flex flex-col items-center">
                <div>
                    <div class="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 text-blue-500 transition-[color,box-shadow] duration-[400ms,700ms] hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <!-- SVG From Heroicons-->
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                    </div>
                </div>
                <div class="h-full w-px bg-blue-500"></div>
            </div>
            <div class="pb-8">
                <p class="text-xl font-bold text-gray-600">Bachelor Degree in Informatics Engineering</p>
                <p class="mb-2 font-semibold text-gray-700">Dian Nuswantoro University, March 2022</p>
                <p class="text-gray-700">GPA: 3.41 (On a scale 4.00)</p>
            </div>
            </div>

            <!-- Dot timeline -->
            <div class="flex lg:h-48 h-60">
            <div class="mr-4 flex flex-col items-center">
                <div>
                <div class="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 text-blue-500 transition-[color,box-shadow] duration-[400ms,700ms] hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <!-- SVG From Heroicons-->
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                </div>
                </div>
                <div class="h-full w-px bg-blue-500"></div>
            </div>
            <div class="pb-8">
                <p class="text-xl font-bold text-gray-600">Graduated from Bootcamp with Satisfying Grade</p>
                <p class="mb-4 font-semibold text-gray-700">Fullstack Bangalore, September 2022</p>
                <a href="https://drive.google.com/file/d/1674wVU7N-gvJT7PELCxdaRt00a5p4Inn/view?usp=sharing">
                    <button class="transform rounded-md border-2 border-blue-500 bg-transparent py-2 px-2 text-xs font-semibold text-blue-500 transition duration-200 ease-in hover:-translate-y-1 hover:border-transparent hover:bg-blue-500 hover:text-white active:translate-y-0">View Certificate</button>
                </a>
            </div>
            </div>

            <!-- Stop Dot timeline -->
            <div class="flex">
            <div class="mr-4 flex flex-col items-center">
                <div>
                <div class="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 text-blue-500 transition-[color,box-shadow] duration-[400ms,700ms] hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <!-- SVG From Heroicons-->
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                </div>
            </div>
                <div class="pb-8">
                    <p class="text-xl font-bold text-gray-600">Open work as Data Scientist</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'TimelineContent'
    }
</script>
