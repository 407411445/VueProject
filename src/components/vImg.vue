<template>
    <img v-bind:alt="props.alt" v-bind:src="props.src" />

</template>

<script setup>
const props = defineProps({
    alt: {
        type: String,
        default: "Img init",
    },
    src: {
        type: String,
        default: "",

    }


})

</script>

<style  scoped>

</style>