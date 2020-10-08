<script>
// import orbit1h from '~/assets/svg/orbit1-h.svg?inline';

export default {
  props: { t: {}, clip: Number },
  data: () => ({
    nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    nums2: ['〇', '〡', '〢', '〣', '〤', '〥', '〦', '〧', '〨', '〩'],
    t2: 0,
    anim: false,
  }),

  computed: {
    clipped() {
      return this.clip ? this.nums.slice(0, this.clip) : this.nums;
    },
    curr() {
      return this.clipped[parseInt(this.t2)];
    },
    next() {
      return this.clipped[parseInt(this.t2) + 1] || this.clipped[0];
    },
  },

  watch: {
    t() {
      this.anim = true;
      window.setTimeout(() => {
        this.t2 = this.t;
        this.anim = false;
      }, 900);
    },
  },

  mounted() {
    this.t2 = this.t;
  },
};
</script>

<template>
  <div class="absolute flex-col w-10" :class="{ slink: anim }">
    <div class="slide-digit">{{ curr }}</div>
    <div class="slide-digit">{{ next }}</div>
  </div>
</template>

<style lang="postcss">
.slide-digit {
  @apply h-10 text-center border-r text-xl pt-1;
}
.slink {
  transition: transform 0.4s;
  transform: translateY(-40px);
}
</style>
