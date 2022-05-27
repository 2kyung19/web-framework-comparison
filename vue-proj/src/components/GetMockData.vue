<template>
    <button type="button" v-on:click='getAnswer'>버튼</button>
    <p>{{ answer }}</p>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GetYesOrNo',
  data() {
    return {
      answer: '',
    };
  },
  methods: {
    getAnswer() {
      const vm = this;
      axios.get('/api/products') // ?error_code=400
        .then((res) => {
          vm.answer = res.data;
        })
        .catch((err) => {
          vm.answer = `err : ${err}`;
        });
    },
  },
};
</script>
