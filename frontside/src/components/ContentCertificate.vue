<template>
<!-- Area Certificate -->
<div class="my-20">
    <p class="my-4 mb-20 pt-20 text-center text-4xl font-semibold">Certificates</p>

    <div class="flex flex-wrap items-center justify-center px-10 pb-20 gap-10">
        <!-- Card looping -->
        <div v-for="cert in data" v-bind:key="cert.id" class="skill">
            {{ cert.publisher }} - {{ cert.title }}
            <a :href="[cert.link]">
                <div class="h-56 w-96 rounded-lg border border-gray-300 duration-300 ease-in-out hover:z-10 hover:scale-110 hover:shadow-xl sm:hover:scale-125 lg:h-[20rem] lg:w-[29rem] lg:hover:scale-[1.2] overflow-hidden">
                    <img :src="[cert.ext]" class="object-center object-fill h-full w-full" />
                </div>
            </a>
        </div>
    </div>
</div>
<!-- End of Area Certificate-->
</template>

<script>
    import certificates from '../assets/certificates/certificate.js'

    export default {
        name: 'CertificateContent',
        data() {
            return {
                data: certificates
            }
        }
    }
</script>