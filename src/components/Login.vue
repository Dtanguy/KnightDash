<template>
  <Card class="login" :title="'Arthur requiert votre présence'" :ico="require('@/assets/icons/team.svg')" :icoSize="2" :padding="15" v-on:keyup="handleKey">
    <div class="group" style="margin-top:25px;">
      <ul>
        <li>I – Tu croiras à tout ce qu’enseigne Arthur et tu observeras ces commandements.</li>
        <li>II – Tu protégeras le Knight au péril de ta vie.</li>
        <li>III – Tu auras le respect de toutes les faiblesses humaines et tu t’en constitueras le défenseur contre l’Anathème et toutes les infamies.</li>
        <li>IV – Tu aimeras et chériras l’art comme la lumière.</li>
        <li>V – Tu ne reculeras jamais devant les ténèbres.</li>
        <li>VI – Tu feras à l’Anathème une guerre sans trêve et sans merci.</li>
        <li>VII – Tu t’acquitteras exactement des ordres que les chevaliers de la Table Ronde te donneront, excepté s’ils sont contraires aux commandements d’Arthur.</li>
        <li>VIII – Tu seras fidèle à la parole que tu donnes et par-dessus tout, tu ne mentiras point à tes pairs.</li>
        <li>IX – Tu seras généreux et tu feras ton possible pour aider ceux qui sont dans le besoin.</li>
        <li>X – Tu seras, partout et toujours, le champion de l’Humanité contre l’injustice, le désespoir et le mal.</li>
      </ul>
    </div>
    <div class="group" style="margin-top:25px;">
      <label><b>Endpoint : </b></label>
      <input id="endpoint" class="username" type="text" />
    </div>
    <div class="group">
      <label><b>Password : </b></label>
      <input id="password" class="password" type="password" />
    </div>
    <button class="button" v-on:click="login()">Soyez Prompt et Sans Pitié</button>
  </Card>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Topbar",
  props: {
    title: String,
  },
  components: { Card },
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

<style scoped>
.login {
  margin: auto;
  margin-top: 10%;
  width: 500px;
  text-align: center;
}

.group {
  width: 100%;
  margin: 10px;
  margin-left: 0px;
}
button {
  text-transform: uppercase;
  font-size: 1.1em;
  width: 100%;
}

ul {
  font-size: 0.85em;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin-top: 15px;
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
