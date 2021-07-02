<template>
  <div
    class="burger"
    :class="{
      active: active,
    }"
    @click="toggleActive"
  >
    <button type="button" class="burger-button" title="Menu">
      <span class="burger-bar burger-bar--1"></span>
      <span class="burger-bar burger-bar--2"></span>
      <span class="burger-bar burger-bar--3"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Burger",
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  methods: {
    toggleActive() {
      this.active = !this.active;
    },
  },
};
</script>

<style lang="scss" scoped>
$burger-color: #444;
$primary: #2b2b68;

.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}
/*remove blue outline*/
.burger-button {
  position: relative;
  height: 30px;
}
</style>