<script>
import { mapState } from 'vuex';

export default {
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
    ...mapState(['now', 'hour', 'minute', 'second']),
  },
};
</script>

<template>
  <div class="p-10">
    <div>clock1</div>

    <div class="relative w-64 h-64 border-4 border-black rounded-full">
      <div class="absolute inset-0" :style="s">
        <div class="absolute border border-black rounded-full hand s"></div>
      </div>
      <div class="absolute inset-0" :style="m">
        <div class="absolute border-2 border-black rounded-full hand m"></div>
      </div>
      <div class="absolute inset-0" :style="h">
        <div class="absolute border-4 border-black rounded-full hand h"></div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.hand {
  left: 50%;
  /* height: 50%; */
  /* transform-origin: bottom; */

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
</style>
