<template>
  <v-card elevation="5" class="mb-4">
    <v-card-text v-if="isEmptyObject(siteInfo)">
      <div class="d-flex justify-space-between">
        <div class="text-h5">
          {{ siteInfo.title }}
        </div>
        <div>
          <IndicatorIcon class="pt-2" :status="siteInfo.status"></IndicatorIcon>
        </div>
      </div>
      <table width="100%">
        <tr>
          <td
            style="height: 6px; width: 3.33%; display: inline-block;"
            :class="uptime.status"
            v-for="uptime in siteInfo.uptime_set"
            :key="uptime.id"
          ></td>
        </tr>
      </table>
    </v-card-text>
    <v-card-text v-else>
      No site information available
    </v-card-text>
  </v-card>
</template>

<script>
import IndicatorIcon from "@/components/visitors/general/IndicatorIcon";

export default {
  name: "SiteStaus",

  components: {
    IndicatorIcon
  },

  props: {
    siteInfo: {
      type: Object,
      default: {}
    }
  },

  methods: {
    isEmptyObject(obj) {
      return Object.keys(obj).length >= 1
    }
  },
};
</script>
