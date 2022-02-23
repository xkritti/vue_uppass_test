<template>
  <div class="drop-zone">
    <div
      class="drage-item"
      v-for="item in getList()"
      :key="item.id"
      draggable="true"
      @dragstart="startDrag($event, item)"
      @drop="onDrop($event, item)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div class="drage-title">
        <img
          class="icon"
          src="https://cdn.iconscout.com/icon/free/png-256/drag-indicator-1779315-1512591.png"
        />
        {{ item.config.name }}
      </div>

      <img
        class="icon"
        src="https://www.flaticon.com/svg/vstatic/svg/3917/3917145.svg?token=exp=1645543029~hmac=b5131e1d1b76829c9564583979a55663"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";
import { useStore } from "vuex";

export default {
  name: "ListSetup",
  data() {
    // items: null;
  },
  computed: {
    ...mapState({
      list: (state) => state.list,
    }),
  },
  mounted() {
    // const items = ref(this.$store.state.list);
    // console.log(items.value);
    // items.value.forEach((element) => {
    //   console.log(element);
    // });
  },
  setup() {
    const store = useStore();
    const items = ref(store.state.list);
    // console.log(items.value);
    let item_list = [];
    const getList = () => {
      items.value.forEach((item) => {
        item_list.push(item);
      });
      return items.value;
    };
    const startDrag = (event, item) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemId", item.id);
    };
    const onDrop = (event, item) => {
      console.log(store.state.list);
      let indexFrom;
      let indexTo;
      const itemId = event.dataTransfer.getData("itemID");
      // console.log(item);
      // console.log(itemId);
      items.value.forEach((element, index) => {
        if (element.id == item.id) {
          indexTo = index;
        }
        if (element.id == itemId) {
          indexFrom = index;
        }
      });
      let temp_item = items.value[indexFrom];
      items.value.splice(indexFrom, 1);
      items.value.splice(indexTo, 0, temp_item);
      store.state.list = items;
      // console.log(store.state.list);
    };
    return {
      getList,
      startDrag,
      onDrop,
    };
  },
};
</script>

<style>
.drop-zone {
  min-width: 170px;
  min-height: 10px;
  background-color: white;
  border: 1px solid #bbbdc5;
  border-radius: 10px;
  box-shadow: 0px 3px 5px 4px rgba(0, 0, 0, 0.08);
}
.drage-item {
  color: black;
  font-size: 16px;
  margin-bottom: 4px;
  padding: 8px;
  border-bottom: 1px solid #bbbdc5;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.drage-item:last-child {
  border: 0px;
}
.icon {
  height: 16px;
  display: flex;
  padding-right: 5px;
}
.drage-title {
  display: flex;
  align-items: center;
}
</style>
