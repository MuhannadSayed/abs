<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ formatedDate }}</p>
    <p>{{ reason }}</p>
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
<style></style>
