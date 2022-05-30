<template>
    <div class="container">
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
