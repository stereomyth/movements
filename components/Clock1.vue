<script>
import { mapState } from 'vuex';
import { range } from 'lodash';

const numTypes = {
  twelve: range(1, 13),
  twenty: range(1, 25),
  sixty: range(0, 59),
  roman: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
};

export default {
  props: ['numbers'],
  computed: {
    s() {
      return `transform: rotate(${this.second * 6}deg)`;
    },
    m() {
      return `transform: rotate(${this.minute * 6}deg)`;
    },
    h() {
      return `transform: rotate(${this.hour * 30}deg)`;
    },

    nums() {
      let ns = [];
      if (this.numbers) {
        ns = [...numTypes[this.numbers]];
        ns.unshift(ns.pop());
      }
      return ns;
    },
    ...mapState(['hour', 'minute', 'second']),
  },
};
</script>

<template>
  <div class="p-5">
    <div class="relative w-64 h-64 border-4 border-black rounded-full">
      <div
        v-for="(n, i) in nums"
        :key="n"
        class="absolute inset-0"
        :style="`transform: rotate(${i * (360 / nums.length)}deg)`"
      >
        <div
          class="absolute origin-center hand"
          :style="`transform: translateX(-50%) rotate(-${i * (360 / nums.length)}deg)`"
        >
          {{ n }}
        </div>
      </div>
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
