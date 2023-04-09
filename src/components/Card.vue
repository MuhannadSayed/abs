<template>
  <div class="card">
    <div class="container">
      <p>{{ name }}</p>
      <p>{{ formatedDate }}</p>
      <p>{{ reason }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    name: String,
    formatedDate: String,
    reason: String,
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  text-align: left;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
}
.container {
  padding: 2px 16px;
}
</style>
