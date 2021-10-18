<template>
  <div id="app">
    <Topbar class="Topbar" />
    <router-view />
  </div>
</template>

<script>
import Topbar from "@/components/Topbar";
export default {
  name: "App",
  components: { Topbar },
};
</script>

<style lang="scss">
/* IMPORT DES FONTS */
@import url("https://fonts.googleapis.com/css?family=Maven+Pro");
@import url("https://fonts.googleapis.com/css?family=Asap:400,500,700");

$layout-breakpoint-small: 576px; //420px
$layout-breakpoint-medium: 768px; //670px
$layout-breakpoint-large: 992px; //880px
$layout-breakpoint-extralarge: 1200px; //1040px

/* DESIGN GÉNÉRAL */
html,
body,
p {
  margin: 0;
  padding: 0;
}

#app {
  color: white;
  font-family: "Asap", Helvetica, sans-serif;
  font-weight: 100;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

@media (max-width: $layout-breakpoint-medium) {
  #app {
    background: url("./assets/bg/bg-2.png");
    //background-size: cover;
  }
}
@media (min-width: $layout-breakpoint-medium) {
  #app {
    background: url("./assets/bg/bg-1.jpg");
    background-size: cover;
  }
}
</style>
