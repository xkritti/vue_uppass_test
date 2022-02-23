<template>
  <div class="check_box">
    <div class="titel">{{ name }}</div>
    <div v-for="item in demo" :key="item" class="titel">
      <input type="checkbox" id="key" />
      <label for="key">{{ item }}</label
      ><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "isCheckBox",
  props: {
    name: String,
  },
  data() {
    return {
      demo: ["Google Clound Platform", "Gitlab", "Figma", "Other"],
    };
  },
};
</script>

<style>
.check_box {
  /* background-color: greenyellow; */
  padding: 10px;
  min-width: 170px;
}
.titel {
  text-align: left;
}

</style>
