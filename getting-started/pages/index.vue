<template>
  <div>
    <Title title="Home"/>
    <img src="/favicon.ico" alt="">
    {{ $store.state.title }}
    <button style="background-color:#fff; " class="p-2 text-green-500" @click="increment">Incrementation moi! {{ $store.state.counter}}</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>
