<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['now']),
};
</script>

<template>
  <div class="container p-20">
    <h1 class="mb-2 uppercase">movements</h1>
    <div>{{ now }}</div>
  </div>
</template>

<style></style>
