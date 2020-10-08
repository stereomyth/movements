<script>
import { mapState } from 'vuex';

const calc = (n, l1, l2) => {
  n = n + 1;
  const split = n.toString();
  if (n < 20) {
    return l1[n];
  }
  if (!(n % 10)) {
    return `${l2[split[0]]}ieth`;
  }
  return `${l2[split[0]]}y ${l1[split[1]]}`;
};

export default {
  props: {},
  data: () => ({
    nums: [
      'zeroth',
      'first',
      'second',
      'third',
      'fourth',
      'fifth',
      'sixth',
      'seventh',
      'eighth',
      'ninth',
      'tenth',
      'eleventh',
      'twelfth',
      'thirteenth',
      'fourteenth',
      'fifthteenth',
      'sixteenth',
      'seventeenth',
      'eighteenth',
      'nineteenth',
    ],

    nums2: ['', '', 'twent', 'thirt', 'fourt', 'fift', 'sixt', 'sevent', 'eight', 'ninet'],
  }),

  computed: {
    sec() {
      return calc(this.second, this.nums, this.nums2);
    },
    min() {
      return calc(this.minute, this.nums, this.nums2);
    },
    hou() {
      return calc(parseInt(this.hour12), this.nums, this.nums2);
    },

    ...mapState(['hour12', 'minute', 'second']),
  },
};
</script>

<template>
  <div class="">
    The
    <strong>{{ sec }}</strong>
    <em>second</em>
    of the
    <strong>{{ min }}</strong>
    <em>minute</em>
    of the
    <strong>{{ hou }}</strong>
    <em>hour</em>
  </div>
</template>

<style lang="postcss"></style>
