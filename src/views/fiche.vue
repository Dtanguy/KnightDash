<template>
  <div>
    <section class="content">
      <div class="knight">
        <table class="table">
          <tbody>
            <tr>
              <td><p class="firstMaj">chevalier:</p></td>
              <td>
                <p class="firstMaj">{{ knight.name }}</p>
              </td>
            </tr>
            <tr>
              <td><p class="firstMaj">nom:</p></td>
              <td>
                <p class="firstMaj">{{ knight.nom }}</p>
              </td>
            </tr>
            <tr>
              <td><p class="firstMaj">prenom:</p></td>
              <td>
                <p class="firstMaj">{{ knight.prenom }}</p>
              </td>
            </tr>
            <tr>
              <td><p class="firstMaj">IA:</p></td>
              <td>
                <p class="firstMaj">{{ knight.ia }}</p>
              </td>
            </tr>
            <tr>
              <td><p class="firstMaj">blason:</p></td>
              <td>
                <p class="firstMaj">{{ knight.blason }}</p>
              </td>
            </tr>
          </tbody>
        </table>

        <img class="knightImg" :src="armorImg(knight.type)" />

        <div class="stats1">
          <div class="txtDefinitrea">
            <p class="value">{{ knight.stats.init }}</p>
            <p>INITIATIVE</p>
          </div>
          <div class="txtDefinitrea">
            <p class="value">{{ knight.stats.def }}</p>
            <p>DÉFENSE</p>
          </div>
          <div class="txtDefinitrea">
            <p class="value">{{ knight.stats.init }}</p>
            <p>RÉACTION</p>
          </div>
        </div>
      </div>

      <div class="stats2">
        <div class="points">
          <div class="point" v-for="(ico, life) in $store.state.life" :key="life">
            <img :src="ico" alt="" />
            <div class="nav-data">
              <p>{{ knight.life[life][0] }}</p>
              <p>{{ knight.life[life][1] }}</p>
            </div>
          </div>
        </div>

        <div>
          <div class="traits">
            <div class="trait" v-for="(ico, aspect) in $store.state.aspects" :key="aspect">
              <p>
                <img :src="ico" alt="" />{{ aspect }}<span>{{ knight.stats[aspect].val }}</span>
              </p>

              <p class="firstMaj" v-for="(val, name) in knight.stats[aspect]" :key="name">
                {{ name != "val" ? name : "" }}
                <span v-if="name != 'val'">
                  {{ val[0] }}
                  <sup class="od">{{ val[1] }}</sup>
                </span>
              </p>
            </div>
          </div>

          <div class="dices">
            <p><img src="../assets/icons/dice.svg" alt="" />Dés</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",

  data() {
    return {
      part: false,
    };
  },
  computed: {
    knight() {
      return this.$store.state.members[this.$store.state.current];
    },
  },
  methods: {
    armorImg(type) {
      return this.$store.state.armors[type].img;
    },
  },
};
</script>

<style scoped lang="scss">
$layout-breakpoint-small: 576px; //420px
$layout-breakpoint-medium: 768px; //670px
$layout-breakpoint-large: 992px; //880px
$layout-breakpoint-extralarge: 1200px; //1040px

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

/* LEFT */
.knight {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  max-width: 400px;
  margin-bottom: 300px;
}

.table {
  background-color: rgba(0, 0, 0, 0.5);
  margin-left: 15px;
  margin-right: 15px;
}

td {
  text-align: start;
  font-size: 1em;
  height: 10px;
  border-bottom: 0.1em solid #ddd;
  padding-left: 5px;
}

.knightImg {
  margin: 0;
}

.stats1 {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 1em;
  background-color: rgba(0, 0, 0, 0.5);
  border-top: 0.1em solid #ddd;
  padding: 1em 0 2em 0;
  font-size: 0.7em;
  margin-left: 15px;
  margin-right: 15px;
}

.txtDefinitrea {
  color: white;
  font-size: 1em;
  font-weight: 400;
  text-align: center;
}

.txtDefinitrea .value {
  font-size: 3em;
  border-radius: 2em;
  font-weight: 700;
  margin: 0.1em auto;
  text-align: center;
}

@media (max-width: $layout-breakpoint-medium) {
  .content {
    flex-direction: column;
  }
  .point {
    padding: 0.5em;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .points {
    width: 100vw;
  }
  .traits {
    width: 100vw;
  }
  .dices {
    width: calc(100vw - 40px);
  }
}
@media (min-width: $layout-breakpoint-medium) {
  .content {
    flex-direction: row;
  }
}

/* RIGHT */
.stats2 {
  font-family: "Asap", Helvetica, sans-serif;
  width: 60%;
}

.points {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.point {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 2em;
  min-width: 100px;
}

.point img {
  width: 3.1em;
  display: inline-block;
  vertical-align: middle;
}

.point .nav-data {
  display: inline-block;
  vertical-align: middle;
  position: relative;
}

.point .nav-data p:first-child {
  font-size: 1.2em;
  text-align: center;
  width: 2em;
}

.point .nav-data p:last-child {
  font-size: 0.8em;
  text-align: center;
  padding: 0.2em;
  margin-top: 0.2em;
  border-radius: 0.2em;
  background-color: rgba(255, 255, 255, 0.2);
}

.traits {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.trait {
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0 0.2em;
  padding: 0.5em;
  min-width: 150px;
  margin-top: 2em;
  flex-grow: 1;
}

.trait p:first-child {
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 0.5em;
}

.trait p:first-child span {
  color: #fff9c4;
  right: 0.5em;
  font-size: 1.3em;
  margin-right: 0;
}

.trait p {
  line-height: 1.5em;
}

.trait p span {
  float: right;
  margin-right: 0.2em;
}

.trait img {
  width: 1.3em;
  margin-right: 0.5em;
  vertical-align: middle;
}

.od {
  color: #fff9c4;
  font-size: 0.8em;
  vertical-align: top;
  margin-left: 0.2em;
}

.firstMaj:first-letter {
  text-transform: uppercase;
}

.dices {
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0 0.2em;
  padding: 0.5em;
  min-width: 150px;
  margin-top: 2em;
  flex-grow: 1;
  height: 400px;
  padding: 1em;
}

.dices p:first-child {
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 0.5em;
}

.dices p:first-child span {
  color: #fff9c4;
  right: 0.5em;
  font-size: 1.3em;
  margin-right: 0;
}

.dices p {
  line-height: 1.5em;
}

.dices p span {
  float: right;
  margin-right: 0.2em;
}

.dices img {
  width: 2em;
  margin-right: 0.5em;
  vertical-align: middle;
}
</style>
