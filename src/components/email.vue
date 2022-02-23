<template>
  <div class="email">
    <div class="titel">{{ name }}</div>
    <input type="text" placeholder="example@email.com" />
  </div>
</template>

<script>
export default {
  name: "isEmail",
  props: {
    name: String,
    type: String,
  },
  methods: {
    isType() {
      return `${this.name}`;
    },
  },
  mounted() {
    console.log(this.type);
  },
};
</script>

<style scoped>
.email {
  /* background-color: blueviolet; */
  padding: 10px;
  min-width: 170px;
}

.titel {
  text-align: left;
}
input {
  padding: 10px;
  border: 1px solid gray;
  border-radius: 8px;
  width: 90%;
}
</style>
