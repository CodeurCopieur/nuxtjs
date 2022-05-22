<template>
 <div>
    <nav>
      <ul class="flex justify-around">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        
      </ul>
    </nav>
    <h1>Bienvenue dans mon site</h1>
    <nuxt/> 
   
 </div>
</template>

<script>
 export default {
   name: 'default',
   data: () => {
     return {}
   }
  }
</script>

<style>
  
</style>