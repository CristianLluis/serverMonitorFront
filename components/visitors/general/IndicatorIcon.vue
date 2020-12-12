<template>
  <div>
    <div :class="'indicator ' + status" />
    <p v-if="showText">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: "IndicatorIcon",
  props: {
    status: {
      type: String,
      default: "up",
      validator(value) {
        return ["up", "down", "issue"].includes(value);
      }
    },
    showText: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    message() {
      return this.status === "up"
        ? "All is good"
        : this.status === "down"
        ? "We are having issues"
        : this.status === "issue"
        ? "We might notice some inconvenience"
        : "Invalid";
    }
  },
};
</script>

<style scoped>
.indicator {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  display: inline-block;
}
p {
  display: inline-block;
  position: relative;
  top: -3px;
  margin-left: 5px;
  font-size: 14px;
  color: #464646;
}
</style>
