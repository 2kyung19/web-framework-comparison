<template>
    <button type="button" v-on:click='sign'>
        <span v-if="login">로그아웃</span>
        <span v-else>로그인</span>
    </button>
</template>

<script>
export default {
  name: 'LoginBtn',
  data() {
    return {
      login: localStorage.getItem('login') ? localStorage.getItem('login') : false,
    };
  },
  methods: {
    sign() {
      if (this.login) {
        localStorage.removeItem('login');
        this.login = false;
      } else {
        localStorage.setItem('login', true);
        this.login = true;
      }
    },
  },
};
</script>
