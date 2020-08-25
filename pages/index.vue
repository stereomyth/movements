<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['now', 'hour', 'minute', 'second']),
};
</script>

<template>
  <div class="container ">
    <div class="py-20">
      <h1 class="mb-2 text-6xl uppercase">movements</h1>
      <div>{{ now }}</div>
      <div>{{ hour }}</div>
      <div>{{ minute }}</div>
      <div>{{ second }}</div>
    </div>

    <div class="flex flex-wrap -mx-5">
      <Clock1 numbers="twelve" />
      <Clock1 numbers="twelve" />
      <Clock1 numbers="twenty" />
      <Clock1 numbers="roman" />
    </div>
  </div>
</template>

<style></style>
