<script>
import { range } from 'lodash';

const numTypes = {
  twelve: range(1, 13),
  twenty: range(1, 25),
  sixty: range(0, 59),
  roman: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
};

export default {
  props: { chars: { default: 'twelve' }, crot: Boolean, p: { default: 0 } },

  computed: {
    characters() {
      return numTypes[this.chars] || [];
    },
    rotation() {
      return 360 / this.characters.length;
    },
  },
};
</script>

<template>
  <div>
    <div
      v-for="(n, i) in characters"
      :key="n"
      :style="`padding: ${p}%; transform: rotate(${(i + 1) * rotation}deg)`"
      class="absolute inset-0"
    >
      <div
        class="text-center origin-center"
        :style="!crot ? `transform: rotate(-${(i + 1) * rotation}deg)` : ''"
        v-html="n"
      ></div>
    </div>
  </div>
</template>

<style lang="postcss"></style>
