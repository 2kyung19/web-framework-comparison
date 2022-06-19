<template>
    <div class="v_menu_box">
        머여시벌
        <slot name="activator" on="true"/>
    </div>
</template>

<script>
export default {
  name: 'VMenu',
};
</script>

<style scoped>
.v_menu_box {
    background-color:green
}
</style>
