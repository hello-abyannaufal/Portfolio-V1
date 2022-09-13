<template>
<div>
    <BodyJumbotron/>
    <ContentSkill/>
    <ContentInterest/>
    <ContentPortfolio/>
</div>
</template>

<script>
import BodyJumbotron from '@/components/BodyJumbotron.vue';
import ContentSkill from '@/components/ContentSkill.vue';
import ContentInterest from '@/components/ContentInterest.vue';
import ContentPortfolio from '@/components/ContentPortfolio.vue';

export default {
    name: "HomePage",
    components: { BodyJumbotron, ContentSkill, ContentInterest, ContentPortfolio }
}
</script>
