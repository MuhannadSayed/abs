<template>
  <div class="wrap">
    <slot />
  </div>
</template>
<script>
export default {
  name: "Wrapper",
};
</script>

<style scoped>
.wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 22px;
}

.wrap > * {
  height: 150px;
}

@media all and (max-width: 998px) {
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wrap > * {
    width: 100%;
  }
}
</style>
