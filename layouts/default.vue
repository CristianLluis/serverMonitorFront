<template>
  <div>
    <NotificationBar />
    <nuxt />
  </div>
</template>

<script>
import NotificationBar from "@/components/visitors/general/NotificationBar";

export default {
  components: {
    NotificationBar
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
