<template>
  <v-card>
    <v-system-bar window>
      <v-btn nuxt to="/" icon small>
        <v-icon style="margin-right: 0px !important;">mdi-close</v-icon>
      </v-btn>
    </v-system-bar>
    <v-container>
      <v-row>
        <v-col>
          <div class="text-h3 font-weight-bold">
            {{ incident.title }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div v-for="(update_set, index) in incident.update_set" :key="index">
            <div class="mt-3">
              {{ update_set.description }}
            </div>
            <div class="d-flex justify-space-between pr-2 mt-2 grey--text">
              <div>
                {{ howLongAgo(update_set.date) }}
              </div>
              <div>Status: {{ update_set.status }}</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { timeFormatter } from "@/mixins/TimeFormatter";

export default {
  name: "incidentDetails",

  mixins: [timeFormatter],

  data: () => ({
    incidents: [
      {
        id: 1,
        title: "Connectivity issues",
        update_set: [
          {
            title: "Connectivity issues: slow response time API",
            description:
              "We are experiencing connectivity issues on our API. We are investigating this issue and will keep you up to date on this.",
            date: "2020-12-09 12:30:00",
            status: "identified"
          },
          {
            title: "We are still investigating this issue.",
            description:
              "We are still working hard on investigating this issue. We appreciate your support and patience.",
            date: "2020-12-10 12:23:23",
            status: "investigating"
          }
        ]
      },
      {
        id: 2,
        title: "Love issues",
        update_set: [
          {
            title: "I do net get enough love :'-(",
            description: "I am experiencing a tremendous lack of love",
            date: "2020-12-12 12:30:00",
            status: "unresolved"
          },
          {
            title: "Still no love",
            description: "Will I ever someone who loves me?",
            date: "2020-12-14 12:23:23",
            status: "investigating"
          }
        ]
      },
      {
        id: 3,
        title: "Love issues",
        update_set: [
          {
            title: "I do net get enough love :'-(",
            description: "I am experiencing a tremendous lack of love",
            date: "2020-12-12 12:30:00",
            status: "unresolved"
          },
          {
            title: "Still no love",
            description: "Will I ever someone who loves me?",
            date: "2020-12-14 12:23:23",
            status: "investigating"
          }
        ]
      }
    ],
    incident: []
  }),

  mounted() {
    this.incident = this.incidents.find(
      i => i.id === parseInt(this.$route.params.id)
    );
  }
};
</script>

<style></style>
