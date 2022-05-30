<template>
    <ol>
        <li v-for='item in itemList' :key="item.name">{{ item.name }}</li>
    </ol>
    <div ref='trigger'>-</div>
</template>

<script>
export default {
  name: 'ObserverTrigger',
  data() {
    return {
      itemList: [],
    };
  },
  methods: {
    loadItems() {
      this.itemList = this.itemList.concat([
        { name: 'a' },
        { name: 'aa' },
        { name: 'aaa' },
        { name: 'aaaa' },
        { name: 'aaaaa' },
      ]);
    },
    initIntersectionObserver() {
      const io = new IntersectionObserver(async ([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          await this.loadItems();
          observer.observe(entry.target);
        }
      }, {
        threshold: 0.3,
      });

      io.observe(this.$refs.trigger);
    },
  },
  mounted() {
    this.initIntersectionObserver();
  },

};
</script>
