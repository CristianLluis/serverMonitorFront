<template>
  <v-card class="mb-4" elevation="6">
    <v-timeline dense>
      <v-timeline-item
        v-for="(date, index) in dates"
        small
        :key="index"
        :icon="getIncidents(date).length >= 1 ? 'mdi-exclamation' : 'mdi-check'"
        :color="getIncidents(date).length >= 1 ? 'warning' : 'success'"
        fill-dot
      >
        <div>
          {{ getDateAsString(date) }}
        </div>
        <div class="incidents ml-2">
          <IncidentMsg :incidents="getIncidents(date)" />
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script>
import moment from "moment";
import IncidentMsg from "@/components/visitors/general/IncidentMsg.vue";

export default {
  name: "HistoryView",

  components: {
    IncidentMsg
  },

  data: () => ({
    closedIncidents: [
      {
        id: 1,
        title: "Slow response times",
        end: "2020-12-11 13:00:12",
        start: "2020-12-9 13:00:12",
        update_set: [
          {
            description: "We have noticed some connectivity issues",
            date: "2020-12-9 12:00:12",
            status: "Investigating"
          }
        ]
      },
      {
        id: 2,
        title: "Server Down",
        end: "2020-12-12 22:15:12",
        start: "2020-12-11 13:00:12",
        update_set: [
          {
            description: "Website could not be accessed",
            date: "2020-12-11 14:00:12",
            status: "resolved"
          }
        ]
      },
      {
        id: 3,
        title: "Email Server Down",
        end: "2020-12-12 19:15:12",
        start: "2020-12-11 13:00:12",
        update_set: [
          {
            description: "Could not send emails",
            date: "2020-12-11 14:00:12",
            status: "resolved"
          }
        ]
      }
    ],
    dates: []
  }),

  methods: {
    getIncidents(date) {
      return this.closedIncidents.filter(i =>
        moment(i.end)
          .startOf("day")
          .isSame(moment(date).startOf("day"))
      );
    },

    getDateAsString: date => moment(date).format("ddd, DD MMM YYYY")
  },

  created() {
    const start = new Date();
    for (let i = 1; i <= 6; i++) {
      this.dates.push(new Date(start));
      start.setDate(start.getDate() - 1);
    }
  }
};
</script>

<style scoped>
.incidents {
  font-size: 0.75rem
}
</style>
