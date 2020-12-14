<template>
  <div>
    <v-card
      v-if="!hasNoIncidents"
      elevation="6"
      class="mb-4"
      @click="$emit('click')"
    >
      <v-card-text>
        <p class="text-h5">
          {{ incident.title }}
        </p>
        <p class="text-h6">
          {{ lastUpdate.description }}
        </p>
        <div class="d-flex justify-space-between">
          <p>
            {{ howLongAgo(lastUpdate.date) }}
          </p>
          <p>Status: {{ lastUpdate.status }}</p>
        </div>
      </v-card-text>
    </v-card>
    <v-card class="mb-4" elevation="6" v-else>
      <v-card-text>
        No incidents :-)
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
import { timeFormatter } from "@/mixins/TimeFormatter";

export default {
  name: "Incident",

  mixins:[timeFormatter],

  props: {
    incident: {
      type: Object,
      default: () => {
        return {};
      }
    },
    hasNoIncidents: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    lastUpdate() {
      return this.incident.update_set[0];
    }
  },
};
</script>

<style></style>
