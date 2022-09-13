<template>
    <div>
        <BodyNavbar/>
        <router-view/>
        <BodyFooter/>
    </div>
</template>

<script>
    import BodyNavbar from './components/BodyNavbar.vue';
    import BodyFooter from './components/BodyFooter.vue';

    export default {
        name: 'App',
        components: {
            BodyNavbar,
            BodyFooter
        }
    }
</script>

<style>

</style>
