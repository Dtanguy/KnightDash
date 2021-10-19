<template>
  <div id="app">
    <Topbar class="Topbar" v-if="$store.state.token != ''" />
    <Login class="login" v-if="$store.state.token == ''" />
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
@import "@/global.scss";

html,
body,
p {
  margin: 0;
  padding: 0;
}

#app {
  color: $color-white;
  font-family: "Asap", Helvetica, sans-serif;
  font-weight: 100;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

@media (max-width: $layout-breakpoint-medium) {
  #app {
    background: url("./assets/bg/bg-2.png");
  }
  .login {
    margin: auto;
  }
}
@media (min-width: $layout-breakpoint-medium) {
  #app {
    background: url("./assets/bg/bg-1.jpg");
    background-size: cover;
  }
  .login {
    position: fixed;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
