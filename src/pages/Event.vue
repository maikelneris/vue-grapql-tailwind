<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex flex-1">
      <Video />
      <Sidebar />
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import Video from '../components/Video.vue'

export default {
  name: 'Event',
  components: {
    Header,
    Sidebar,
    Video
  }
}
</script>