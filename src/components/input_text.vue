<template>
  <div class="input_text">
    <div class="titel">{{ name }}</div>
    <textarea placeholder="Type your answer here" />
  </div>
</template>

<script>
export default {
  name: "input_text",
  props: {
    type: String,
    name: String,
  },
};
</script>

<style scoped>
.titel {
  text-align: left;
}
.input_text {
  /* background-color: antiquewhite; */
  padding: 10px;
  min-width: 170px;
}
textarea {
  width: 90%;
  padding: 10px;
  min-height: 80px;
  border-radius: 8px;
  margin-top: 8px;
}
</style>
