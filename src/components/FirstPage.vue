<template>
  <div class="first">
    <p>
      輸入想輸入的文字:
      <input id="inputlab" type="text" name="Toinput">
    </p>
    <p class="second">
      {{ message }}
    </p>
    <input v-model="text" type="text">
    <h3>是不是在哭</h3>
  </div>
</template>

<script>
// import { computed, } from 'vue'

// export default {
//   props: {
//     fromapptext: {
//       type: String,
//       required: true
//     }
//   },
//   data() {
//     return {
//       message: ''
//     }
//   },
//   emits: ['update:fromappntext'],
//   setup(props, { emit }) {
//     const text = computed({
//       get: () => props.fromapptext,
//       set: (val) => emit('update:fromapptext', val)
//     })
//     return {
//       text
//     }
//   }

// }

</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color: #540fea;
}

p.second {
  font-size: 30px;
  color: #0b7268;
}
</style>
