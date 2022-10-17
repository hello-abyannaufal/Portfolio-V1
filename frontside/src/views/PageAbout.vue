<template>
<div>
    <ContentAbout/>
    <ContentTimeline/>
</div>
</template>

<script>
import ContentAbout from '@/components/ContentAbout.vue';
import ContentTimeline from '@/components/ContentTimeline.vue';
    export default {
    name: 'AboutPage',
    components: { 
        ContentAbout, 
        ContentTimeline 
    }
}
</script>