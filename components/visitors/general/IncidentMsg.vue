<template>
  <div class="d-flex">
    <div v-if="!hasIncidents">
      <span class="grey--text text--lighten-1">
        No incidents
      </span>
    </div>
    <div v-else>
      <div v-for="incident in incidents" :key="incident.id" class="mt-1">
        <div class="text--lighten-2">
          {{incident.title}}
        </div>
        <div class="grey--text text-caption">
          Resolved on: {{ getResolveDate(incident) }}
        </div>
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
      console.log(this.incidents);
      return this.incidents.length >= 1;
    }
  },

  methods: {
    getResolveDate(incident) {
      return moment(incident.end).format("dd. MMM yy");
    }
  }
};
</script>
