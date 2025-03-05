<script setup>
import {onMounted, ref} from 'vue'

const msg = ref("");

onMounted(() => {
  fetch("/api/messages")
      .then((response) => response.text())
      .then((data) => {
        msg.value = data;
      });
})
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>

</style>
