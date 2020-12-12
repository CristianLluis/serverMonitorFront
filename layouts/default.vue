<template>
  <v-app>
    <TheHeader />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheFooter from "@/components/visitors/general/TheFooter";
import TheHeader from "@/components/visitors/general/TheHeader";

export default {
  components: {
    IndicatorIcon,
    TheFooter,
    TheHeader
  }
};
</script>

<style>
body {
  font-family: Montserrat;
}
body,
html {
  margin: 0px;
  padding: 0px;
}
h2,
h3,
h1,
h4 {
  margin-top: 5px;
  margin-bottom: 5px;
}
a,
a:focus,
a:visited,
a:hover {
  color: #000;
  text-decoration: none;
}
.issue,
.yellow {
  background: #f1c21a;
}
.down,
.red {
  background: #cd5c5c;
}
.up,
.green {
  background: #2ee779;
}
</style>
