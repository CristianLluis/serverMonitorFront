<template>
  <div class="d-flex">
    <v-icon
      class="mr-3 align-self-start pt-1"
      small
      v-text="hasIncident ? 'mdi-alert-circle' : 'mdi-check-circle'"
      :color="hasIncident ? 'warning' : 'success'"
    ></v-icon>
    <div v-if="hasIncident" class="grey--text text--darken-1 d-inlineBlock">
      <div>
        {{ incidentTitle }}
      </div>
      <div class="text-caption">
        Resolved on: {{ incidentEndDate }}
      </div>
    </div>
    <span v-else class="grey--text text--lighten-1">
      No incidents
    </span>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "IncidentMsg",

  props: {
    dateObject: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    hasIncident() {
      return this.dateObject.hasIncident;
    },
    incidentTitle() {
      return this.hasIncident ? this.dateObject.incident[0].title : ""
    },
    incidentEndDate(){
      return this.hasIncident ? moment(this.dateObject.incident[0].date).format("d. MMM yy") : ""
    },
  }
};
</script>

<style scoped>
  .d-inlineBlock{
    display: inline-block;
  }
</style>
