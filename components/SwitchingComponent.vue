<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({ color: "" });

onMounted(() => {});
</script>

<template>
  <div class="switching-content-wrapper">

  </div>
</template>

<style scoped>
.switching-content-wrapper {
  width: 1000px;
  height: 800px;
  margin: 10px auto;
  border: 1px solid #000;
}
</style>