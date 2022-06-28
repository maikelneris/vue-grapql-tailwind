<template>
  <header class="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
    <Logo />    
  </header>  
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'Header',
  components: {
    Logo
  }
}
</script>