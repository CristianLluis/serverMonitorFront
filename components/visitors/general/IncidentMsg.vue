<template>
  <div class="d-flex">
    <div v-if="!hasIncidents">
      <span class="grey--text text--lighten-1">
        No incidents
      </span>
    </div>
    <div v-else>
      <div
        v-for="incident in incidents"
        :key="incident.id"
        class="mt-1"
      >
        <v-hover v-slot="{ hover }">
          <v-card class="pa-1" @click="openIncidentDetails(incident)" :elevation="hover ? '2' : '0'">
            <div class="grey--text text--darken-1">
              {{ incident.title }}
            </div>
            <div class="text-caption grey--text">
              Resolved on: {{ getResolveDate(incident) }}
            </div>
          </v-card>
        </v-hover>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "IncidentMsg",

  props: {
    incidents: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    hasIncidents() {
      return this.incidents.length >= 1;
    }
  },

  methods: {
    getResolveDate(incident) {
      return moment(incident.end).format("dd. MMM yy");
    },

    openIncidentDetails(incident) {
      this.$router.push({ name: "incident-id", params: { id: incident.id } });
    }
  }
};
</script>
