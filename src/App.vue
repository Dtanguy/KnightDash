<template>
  <div id="app">
    <Topbar class="Topbar" v-if="$store.state.token != ''" />
    <Login class="logi" v-if="$store.state.token == ''" />
    <router-view v-if="$store.state.token != ''" />
  </div>
</template>

<script>
import Topbar from "@/components/Topbar";
import Login from "@/components/Login";

export default {
  name: "App",
  components: { Topbar, Login },
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

.logi {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -85%);
}
</style>
