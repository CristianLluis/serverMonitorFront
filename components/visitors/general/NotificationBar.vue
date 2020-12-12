<template>
  <div>
    <v-alert
      v-for="i in notificationErrors"
      :key="i.id"
      :type="getType(i.color)"
    >
      {{ i.text }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "NotificationBar",

  data() {
    return {
      notificationErrors: [
        {
          color: "red",
          id: 0,
          text: "Oh, we are having some issues :-("
        }
      ]
    };
  },

  methods: {
    getType: color => {
      return color === "red"
        ? "error"
        : color === "green"
        ? "success"
        : color === "yellow"
        ? "warning"
        : null
    }
  }
};
</script>

<style scoped>
.full-background {
  padding: 10px;
  z-index: 0;
  position: relative;
  text-align: center;
  color: white;
}
</style>
