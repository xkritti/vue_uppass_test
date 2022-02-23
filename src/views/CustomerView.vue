<template>
  <div class="container">
    <div v-for="item in $store.state.list" :key="item.id">
      <component
        :is="isType(item)"
        :name="isName(item)"
        :type="isType(item)"
      ></component>
    </div>
  </div>
</template>
<script>
import input_text from "@/components/input_text.vue";
import email from "@/components/email.vue";
import check_box from "@/components/check_box.vue";
import date from "@/components/date.vue";
import upload_pic from "@/components/upload_pic.vue";

export default {
  components: {
    input_text,
    email,
    check_box,
    date,
    upload_pic,
  },
  methods: {
    isType(item) {
      return `${item.type}`;
    },
    isName(item) {
      return `${item.config.name}`;
    },
  },
};
</script>

<style scoped>
.container {
  border-radius: 8px;
  background-color: white;
  padding: 10px;
  box-shadow: 0px 3px 5px 4px rgba(0, 0, 0, 0.08);
}
</style>
