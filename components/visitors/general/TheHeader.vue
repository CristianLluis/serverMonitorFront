<template>
  <div>
    <v-app-bar color="primary" app>
      <v-icon color="white" @click="drawer = !drawer">
        mdi-menu
      </v-icon>
      <v-spacer />
      <IndicatorIcon class="pt-3" :status="status" :show-text="true" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <!-- -->
    </v-navigation-drawer>
  </div>
</template>

<script>
import IndicatorIcon from "@/components/visitors/general/IndicatorIcon";

export default {
  name: "TheHeader",

  data: () => ({
    drawer: false
  }),

  computed: {
    status: () => "down"
  },

  components: {
    IndicatorIcon
  },

  created() {
    let that = this;
    document.addEventListener("keyup", function(e) {
      if (e.key === "Escape" && that.drawer) {
        that.drawer = false;
      }
    });
  }
};
</script>

<style scoped></style>
