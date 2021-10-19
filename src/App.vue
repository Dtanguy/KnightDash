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
  data: function() {
    return {};
  },
  mounted() {
    // Initialise
    console.log("Start !");
    console.log(sessionStorage.getItem("IDtoken"));
    /*
    if (sessionStorage.getItem("IDtoken")) {
      this.$store.state.token = sessionStorage.getItem("IDtoken");
      console.log(this.$store.state.token);

      this.axios
        .post(this.$store.state.backIp + "/getall", {
          token: this.$store.state.token,
        })
        .then((response) => {
          if (!response.data || response.data.error) {
            this.$store.state.token = "";
            return;
          }
          let tmp = JSON.parse(JSON.stringify(response.data));
          this.$store.state.coteries = tmp.coteries;
          this.$store.state.members = tmp.members;
          this.$store.state.currentCoteries = tmp.coteries[Object.keys(tmp.coteries)[0]].name;
          this.$store.state.currentKnight = tmp.members[Object.keys(tmp.members)[0]].infos.chevalier;
          this.$store.state.token = response.data.token;
          this.$forceUpdate();
        })
        .catch((error) => {
          this.stopAll(error.response);
        });
    } else {
      this.$store.state.token = "";
    }*/
  },
  methods: {},
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
