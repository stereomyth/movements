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
      <Clock1 />
      <Clock1 crot />
      <Clock1 numbers="twenty" :th="24" />
      <Clock1 numbers="roman" />
      <Clock1 numbers="roman" crot />
    </div>
  </div>
</template>

<style lang="postcss">
.clock {
  @apply relative w-64 h-64 text-sm border-4 border-black rounded-full m-5;
}
</style>
