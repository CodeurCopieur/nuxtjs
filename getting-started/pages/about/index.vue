<template>
  <div>
    <Title :title="title"/>
  </div>
</template>

<script >
import Title from '~/components/Title.vue'
export default {
  components: { Title },
  name: 'About',
  layout: 'auth',
  data() {
    return {
      title: 'About'
    }
  }
}
 

</script>

<style>

</style>