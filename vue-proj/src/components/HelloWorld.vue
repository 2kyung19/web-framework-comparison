<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <get-mock-data />
    <login-btn />
    <get-item-list />
    <v-slot-child>
      <template #header>
        <div>test header</div>
      </template>
      <template #footer>
        <div>test footer</div>
      </template>
      <template #hide>
        <div>not hide</div>
      </template>
    </v-slot-child>
    <v-menu> <!-- menu -->
      <template #activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on">
          {{on}} / {{attrs}}
        </div>
        </template>
    </v-menu>
    <v-tooltip
      v-model="isTooltipVisiable"
    > <!-- 아 염병 -->
      <template #activator="{ on, attrs }">
        <div
          v-bind="attrs"
          v-on="on"
        >
          예?
        </div>
      </template>
      <span>Programmatic tooltip</span>
    </v-tooltip>
  </div>
</template>

<script>
import GetMockData from '@/components/GetMockData.vue';
import LoginBtn from '@/components/LoginBtn.vue';
import GetItemList from '@/components/GetItemList.vue';
import VSlotChild from '@/components/VSlotChild.vue';
import VMenu from '@/components/VMenu.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    GetMockData,
    LoginBtn,
    GetItemList,
    VSlotChild,
    VMenu,
  },
  data() {
    return {
      isTooltipVisiable: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
