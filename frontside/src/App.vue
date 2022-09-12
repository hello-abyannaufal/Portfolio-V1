<template>
    <div>
        <BodyNavbar/>
        <router-view/>
    </div>
</template>

<script>
    import BodyNavbar from './components/BodyNavbar.vue';

    export default {
    name: 'App',
    components: {
            BodyNavbar
        }
    }
</script>

<style>

</style>
