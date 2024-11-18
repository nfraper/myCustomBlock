<template>
  <div id="app">
    <CustomBlock />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomBlock from './components/CustomBlock.vue';

export default defineComponent({
  name: 'App',
  components: {
    CustomBlock,
  },
});
</script>

<style>
/* Estilos globales si son necesarios */
</style>
