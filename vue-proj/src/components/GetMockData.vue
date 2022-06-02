<template>
    <button type="button" v-on:click='getAnswer1'>버튼1</button>
    <p>{{ answer }}</p>
    <button type="button" v-on:click='getAnswer2'>버튼2</button>
</template>

<script>
import axios from 'axios';
import { getAPI } from '@/api/common';

export default {
  name: 'GetYesOrNo',
  data() {
    return {
      answer: '',
    };
  },
  methods: {
    getAnswer1() {
      const vm = this;
      axios.get('/api/products') // ?error_code=400
        .then((res) => {
          vm.answer = res.data;
        })
        .catch((err) => {
          vm.answer = `err : ${err}`;
        });
    },
    getAnswer2() {
      getAPI('');
    },
  },
};
</script>
