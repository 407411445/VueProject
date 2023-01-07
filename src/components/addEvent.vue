
<template>
    <h1>ADD頁面</h1>
    <h2>pageX {{pageX}} pageY {{pageY}}</h2>
    <!-- <input type="text" :value="props.modelValue" @input="$emit('update:modelValue',$event.target.value)"
        placeholder="父組件傳回來的值" /> -->

    <p>{{data}}</p>
    <button @click="changedata()">click</button>
</template>

<script setup>

import { useWindowspositon } from "../composables/useWindowspositon.js"
import { useSetData } from "../composables/useSetData.js"


const { pageX, pageY } = useWindowspositon();


const { data, setnewData } = useSetData(0);

const changedata = () => {
    setnewData();
}

// const props = defineProps(["modelValue"]);

// const emits = defineEmits(["update:modelValue"]);


</script>

<style  scoped>

</style>