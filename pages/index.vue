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

      <div class="clock">
        <Hand svg="orbit1h" :t="hour" :r="12" />
        <Hand svg="orbit1m" :t="minute" :r="60" />
        <Hand svg="orbit1s" :t="second" :r="60" />
      </div>

      <div class="stroke-2 clock" style="stroke: #000">
        <Hand svg="orbit1h" :t="hour" :r="12" />
        <Hand svg="orbit1m" :t="minute" :r="60" />
        <Hand svg="orbit1s" :t="second" :r="60" />
      </div>

      <div class="clock">
        <Hand svg="pinch1h" :t="hour" :r="12" />
        <Hand svg="pinch1m" :t="minute" :r="60" />
        <Hand svg="pinch1s" :t="second" :r="60" />
        <Disc chars="twelve" p="15" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.clock {
  @apply relative w-64 h-64 text-sm border-4 border-black rounded-full m-5;
}
</style>
