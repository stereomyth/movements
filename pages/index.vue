<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['now', 'hour', 'minute', 'second']),
};
</script>

<template>
  <div class="container p-20">
    <h1 class="mb-2 uppercase">movements</h1>
    <div>{{ now }}</div>
    <div>{{ hour }}</div>
    <div>{{ minute }}</div>
    <div>{{ second }}</div>

    <Clock1 />
  </div>
</template>

<style></style>
