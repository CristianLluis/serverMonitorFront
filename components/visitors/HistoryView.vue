<template>
  <v-card class="mb-4" elevation="6">
    <v-timeline dense>
      <v-timeline-item v-for="(date, index) in dates" small :key="index">
        <div>
          {{ getDateAsString(date) }}
        </div>
        <div>
          <IncidentMsg :dateObject="checkIncident(date)" />
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
      }
    ],
    dates: []
  }),

  methods: {
    getEndDatesAndTitleOfClosedInsidets() {
      return this.closedIncidents.map(i => ({
        date: moment(i.end)
          .startOf("day")
          .format(),
        title: i.title
      }));
    },

    getDateAsString: date => moment(date).format("ddd, DD MMM YYYY"),

    checkIncident(date) {

      let dateMomentString = moment(date)
        .startOf("day")
        .format();

      let incident = this.getEndDatesAndTitleOfClosedInsidets().filter(
        i => i.date === dateMomentString
      );
      return {
        hasIncident: incident.length >= 1 ? true : false,
        incident: incident
      };
    }
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
