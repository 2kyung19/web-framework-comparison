<template>
    <ul>
        <li v-for='item in itemList' :key="item.id">
            <router-link :to="{name:'item', params:{id:item.id}}">{{ item.id }}</router-link>
        </li>
    </ul>
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
      const len = this.itemList.length;

      this.itemList = this.itemList.concat([
        { id: len + 1 },
        { id: len + 2 },
        { id: len + 3 },
        { id: len + 4 },
        { id: len + 5 },
      ]);

      window.sessionStorage.setItem('beforeItems', this.itemList);
      // save scroll position
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
