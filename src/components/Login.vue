<template>
  <div class="login" v-on:keyup="handleKey">
    <div class="group">
      <label><b>Endpoint : </b></label>
      <input id="endpoint" class="username" type="text" />
    </div>
    <div class="group">
      <label><b>Password : </b></label>
      <input id="password" class="password" type="password" />
    </div>
    <button class="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "Topbar",
  props: {
    title: String,
  },
  data: function() {
    return {};
  },
  methods: {
    login: function() {
      this.$store.state.backIp = "http://" + document.getElementById("endpoint").value;
      this.pswrd = document.getElementById("password").value;

      this.axios.post(this.$store.state.backIp + "/login", { pswrd: this.pswrd }).then((response) => {
        if (!response.data || response.data.error || !response.data.token) {
          return;
        }

        this.axios
          .post(this.$store.state.backIp + "/getall", {
            token: response.data.token,
          })
          .then((response) => {
            if (!response.data || response.data.error) {
              this.$store.state.token = "";
              return;
            }
            let tmp = JSON.parse(JSON.stringify(response.data));
            this.$store.state.coteries = tmp.coteries;
            this.$store.state.members = tmp.members;

            this.$store.state.token = response.data.token;
            sessionStorage.setItem("IDtoken", this.token);
          })
          .catch((error) => {
            this.stopAll(error.response);
          });
      });
    },
    handleKey: function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.login();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  box-shadow: 0px 0px 4px grey;
  padding: 15px;
  margin-bottom: 0px;
  text-align: center;
  width: 300px;
  background-color: #fafafa;
}

.group {
  width: 100%;
  margin: 10px;
  margin-left: 0px;
}

.checklabel {
  margin-right: 10px;
}

button {
  border-radius: 3px;
  padding: 10px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: 1.1em;
  background-color: #b8b8b8;
  width: 265px;
  margin: 10px;
}

button:hover {
  background-color: #42b983;
  cursor: Pointer;
}

@media screen and (max-width: 640px) {
  .customButton {
    font-size: 5em;
  }

  .container {
    width: 90%;
  }

  .trio {
    min-width: 200px;
    width: 100%;
    height: 100%;
  }
}
</style>
