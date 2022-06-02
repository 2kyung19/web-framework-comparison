<template>
    <div class="container" ref='scrollBox'>
        <h2 class='title'>infinite scroll</h2>
        <Observer />
    </div>
</template>

<script>
import Observer from '@/components/Observer.vue';

export default {
  name: 'GetItemList',
  components: {
    Observer,
  },
  mounted() {
    this.$refs.scrollBox.scrollTop = 0;
  },
};
</script>

<style>
    .title {
        font-size:20px;
        font-weight:bold;
    }
    .container {
        padding: 20px;
        border: 1px solid #000;
        height: 150px;
        overflow-y:scroll;
    }
</style>
