<template>
    <div class="slot_box">
        <slot name="header"/>
        <div>안녕하세요!</div>
        <slot name="footer"/>
        <div class="slot_hide" v-if="isHide">
            여! 히사시부리!
            <slot name="hide" />
        </div>
        <slot name="default">default value</slot>
    </div>

</template>

<script>
export default {
  name: 'VSlotChild',
  computed: {
    isHide() {
      return !!this.$slots.hide;
    },
  },
};
</script>

<style scoped>
.slot_box {
    background-color:red
}
.slot_hide {
    background-color:blue
}
</style>
