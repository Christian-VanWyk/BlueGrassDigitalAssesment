<script setup>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
  <main>
    <Sidebar/>
    <div class="mainLayout">
      <Header />
      <RouterView />
    </div>
  </main>
</template>

<style scoped lang="scss">
  main {
    display: flex;
    width: 100%;
  }
</style>