<template>
  <div>
    <div>칸반</div>
    <div class="kanban-box">
      <div>
        <div>todo</div>
        <div class="kanban-ticket-box" @dragover="onDragOver" @drop="onDrop('todo')">
          <div
            v-for="(item, idx) in kanban.filter(i=>i.type==='todo')"
            :key="idx"
            class="kanban-ticket"
            draggable="true"
            @dragstart="onDrag(item)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
      <div>
        <div>progress</div>
        <div class="kanban-ticket-box" @dragover="onDragOver" @drop="onDrop('progress')">
          <div
            v-for="(item, idx) in kanban.filter(i=>i.type==='progress')"
            :key="idx"
            class="kanban-ticket"
            draggable="true"
            @dragstart="onDrag(item)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
      <div>
        <div>done</div>
        <div class="kanban-ticket-box" @dragover="onDragOver" @drop="onDrop('done')">
          <div
            v-for="(item, idx) in kanban.filter(i=>i.type==='done')"
            :key="idx"
            class="kanban-ticket"
            draggable="true"
            @dragstart="onDrag(item)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KanbanView',
  data() {
    return {
      kanban: [{ type: 'todo', title: 'todo1' }, { type: 'todo', title: 'todo2' }, { type: 'todo', title: 'todo3' }],
      moveItem: {},
    };
  },
  methods: {
    onDrag(item) {
      this.moveItem = item;
    },
    onDragOver(event) {
      event.preventDefault();
    },
    onDrop(option) {
      if (option !== this.moveItem.type) {
        this.kanban[this.kanban.indexOf(this.moveItem)].type = option;
      }
    },
  },
};
</script>

<style scoped>
.kanban-box {
  display: flex;
  justify-content: space-between;
}
.kanban-ticket-box {
  border: 1px solid green;
  width: 100px;
  min-height: 200px;
}

.kanban-ticket {
  border: 1px solid red;
  width: 80px;
  height: 20px;
  margin: auto;
}
</style>
