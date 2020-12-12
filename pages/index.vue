<template>
  <div>
    <NotificationBar />
    <SiteStatus :siteInfo="siteStatus" />
    <div v-if="openIncidents.length >= 1">
      <IncidentListItem
        v-for="i in openIncidents"
        :key="i.id"
        :incident="i"
        @click="openIncidentPage(i)"
      />
    </div>
    <IncidentListItem v-else :hasNoIncidents="true" />
  </div>
</template>

<script>
import NotificationBar from "@/components/visitors/general/NotificationBar.vue";
import IncidentListItem from "@/components/visitors/IncidentListItem.vue";
import SiteStatus from "@/components/visitors/SiteStatus.vue";

export default {
  name: "indexPage",

  components: {
    NotificationBar,
    IncidentListItem,
    SiteStatus
  },

  data: () => ({
    openIncidents: [
      {
        id: 1,
        title: "Connectivity Issues",
        update_set: [
          {
            description: "We have noticed some connectivity issues",
            date: "2020-12-11 13:00:12",
            status: "Investigating"
          }
        ]
      },
      {
        id: 2,
        title: "Connectivity Issues 2",
        update_set: [
          {
            description: "We still have some connectivity issues",
            date: "2020-12-10 13:00:12",
            status: "Investigating"
          }
        ]
      }
    ],

    siteStatus: {
      title: "API",
      status: "up",
      uptime_set: [
        {
          date: "2018-07-12T13:42:58.085870",
          id: 1,
          response_time: 352,
          status: "up"
        },
        {
          date: "2018-07-12T13:43:58.085870",
          id: 2,
          response_time: 231,
          status: "up"
        },
        {
          date: "2018-07-12T13:44:58.085870",
          id: 3,
          response_time: 123,
          status: "down"
        },
        {
          date: "2018-07-12T13:45:58.085870",
          id: 4,
          response_time: 344,
          status: "issue"
        },
        {
          date: "2018-07-12T13:42:58.085870",
          id: 5,
          response_time: 352,
          status: "up"
        },
        {
          date: "2018-07-12T13:43:58.085870",
          id: 6,
          response_time: 231,
          status: "up"
        },
        {
          date: "2018-07-12T13:44:58.085870",
          id: 7,
          response_time: 123,
          status: "down"
        },
        {
          date: "2018-07-12T13:42:58.085870",
          id: 8,
          response_time: 352,
          status: "issue"
        },
        {
          date: "2018-07-12T13:43:58.085870",
          id: 9,
          response_time: 231,
          status: "up"
        },
        {
          date: "2018-07-12T13:44:58.085870",
          id: 10,
          response_time: 123,
          status: "down"
        }
      ]
    }
  }),

  methods: {
    getRouterObject: incident => {
      return {
        name: "incident-id",
        params: { id: incident.id }
      };
    },

    openIncidentPage(i) {
      this.$router.push(this.getRouterObject(i));
    }
  }
};
</script>
