<script>
import orbit1h from '~/assets/svg/orbit1-h.svg?inline';
import orbit1m from '~/assets/svg/orbit1-m.svg?inline';
import orbit1s from '~/assets/svg/orbit1-s.svg?inline';
import pinch1h from '~/assets/svg/pinch1-h.svg?inline';
import pinch1m from '~/assets/svg/pinch1-m.svg?inline';
import pinch1s from '~/assets/svg/pinch1-s.svg?inline';

export default {
  components: { orbit1h, orbit1m, orbit1s, pinch1h, pinch1m, pinch1s },
  props: { svg: String, t: Number, r: Number },

  computed: {
    rotate() {
      return `transform: rotate(${this.t * (360 / this.r)}deg)`;
    },
  },
};
</script>

<template>
  <div class="absolute inset-0" :style="rotate">
    <component :is="svg" class="w-full h-full" />
  </div>
</template>

<style lang="postcss"></style>
