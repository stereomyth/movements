<script>
import { mapState } from 'vuex';

export default {
  props: { numbers: {}, th: { default: 12 }, crot: Boolean },

  computed: {
    s() {
      return `transform: rotate(${this.second * 6}deg)`;
    },
    m() {
      return `transform: rotate(${this.minute * 6}deg)`;
    },
    h() {
      return `transform: rotate(${this.hour * (360 / this.th)}deg)`;
    },

    ...mapState(['hour', 'minute', 'second']),
  },
};
</script>

<template>
  <div class="p-5">
    <div class="relative w-64 h-64 text-sm border-4 border-black rounded-full">
      <Disc :chars="numbers" :crot="crot" />

      <div class="absolute inset-0" :style="s">
        <div class="absolute border-l border-black rounded-full hand s"></div>
      </div>
      <div class="absolute inset-0" :style="m">
        <div class="absolute border-l-2 border-black rounded-full hand m"></div>
      </div>
      <div class="absolute inset-0" :style="h">
        <div class="absolute border-l-4 border-black rounded-full hand h"></div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.hand {
  left: 50%;
  transform: translateX(-50%);
}

.s {
  height: 48%;
  top: 5%;
}
.m {
  height: 38%;
  top: 15%;
}
.h {
  height: 23%;
  top: 30%;
}

pre {
  @apply border border-dashed p-1 m-1 text-xs;
}
</style>
