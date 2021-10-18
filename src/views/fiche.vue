<template>
  <div>
    <section class="content">
      <!-- LEFT -->
      <div class="knight">
        <table class="table">
          <tbody>
            <tr v-for="(info, i) in knight.infos" :key="i">
              <td>
                <p class="firstMaj">{{ i }}:</p>
              </td>
              <td>
                <p class="firstMaj">{{ info }}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <img class="knightImg" :src="armorImg(knight.infos.type)" />
        <div class="stats1">
          <div class="S1" v-for="(stat, i) in knight.stats1" :key="i">
            <p class="S1value">{{ stat }}</p>
            <p class="S1name">{{ i }}</p>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="stats2">
        <div class="points">
          <div class="point" v-for="(ico, life) in $store.state.life" :key="life">
            <img :src="ico" alt="" />
            <div class="nav-data">
              <p>{{ knight.life[life][0] }}</p>
              <input
                class="life"
                v-bind:class="{
                  hight: knight.life[life][1] / knight.life[life][0] > 0.5,
                  mid: knight.life[life][1] / knight.life[life][0] < 0.5 && knight.life[life][1] / knight.life[life][0] > 0.2,
                  low: knight.life[life][1] / knight.life[life][0] < 0.2,
                }"
                type="number"
                min="0"
                max="1000"
                v-model="knight.life[life][1]"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="traits">
            <div class="trait" v-for="(ico, aspect) in $store.state.aspects" :key="aspect">
              <p>
                <img :src="ico" alt="" />{{ aspect }}<span>{{ knight.stats2[aspect].val }}</span>
              </p>

              <p class="firstMaj" v-for="(val, name) in knight.stats2[aspect]" :key="name">
                {{ name != "val" ? name : "" }}
                <span v-if="name != 'val'">
                  {{ val[0] }}
                  <sup class="od">{{ val[1] }}</sup>
                </span>
              </p>
            </div>
          </div>

          <div class="actions">
            <div class="dices">
              <p><img src="../assets/icons/dice.svg" alt="" />Dés</p>
            </div>
            <div class="damage">
              <p><img src="../assets/icons/damage.svg" alt="" />Degats</p>
              <div class="dline">
                <label class="dline1" style="margin-right: 15px;" for="tentacles">Armure:</label>
                <input class="dline2" type="number" id="tentacles" name="tentacles" min="0" max="1000" v-model="dPas" @change="editPsa" />
              </div>
              <div class="dline">
                <label class="dline1" style="margin-right: 15px;" for="tentacles">Santée:</label>
                <input class="dline2" type="number" id="tentacles" name="tentacles" min="0" max="1000" v-model="dSan" @change="editSan" />
              </div>
              <div class="dline">
                <label class="dline1" style="margin-right: 15px;" for="tentacles">Energie:</label>
                <input class="dline2" type="number" id="tentacles" name="tentacles" min="0" max="1000" v-model="dEn" />
              </div>
              <div class="dline">
                <label class="dline1" style="margin-right: 15px;" for="tentacles">Espoir:</label>
                <input class="dline2" type="number" id="tentacles" name="tentacles" min="0" max="1000" v-model="dEsp" />
              </div>
              <button class="button" @click="dealDamage">
                {{ `Hit me daddy ❤️` }}
              </button>
            </div>
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
      dPas: 0,
      dSan: 0,
      dEn: 0,
      dEsp: 0,
    };
  },
  computed: {
    knight() {
      return this.$store.state.members[this.$store.state.current];
    },
  },
  watch: {},
  methods: {
    armorImg(type) {
      return this.$store.state.armors[type].img;
    },
    editPsa() {
      this.dSan = Math.trunc(this.dPas / 5);
    },
    editSan() {
      this.dPas = 0;
    },
    dealDamage() {
      if (this.dPas > 0) {
        let cdf = this.knight.life.cdf[0];
        this.knight.life.shield[1] -= this.dPas - cdf;
        this.knight.life.health[1] -= Math.trunc((this.dPas - cdf) / 5);
      } else if (this.dSan > 0) {
        this.knight.life.health[1] -= this.dSan;
      } else if (this.dEn > 0) {
        this.knight.life.energy[1] -= this.dEn;
      } else if (this.dEsp > 0) {
        this.knight.life.hope[1] -= this.dEsp;
      }
      this.dPas = 0;
      this.dSan = 0;
      this.dEn = 0;
      this.dEsp = 0;
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
  margin-bottom: -20px;
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
  margin-bottom: -20px;
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

.S1 {
  color: white;
}

.S1value {
  font-size: 3em;
  border-radius: 2em;
  font-weight: 700;
  margin: 0.1em auto;
  text-align: center;
}

.S1name {
  font-size: 1em;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
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
  .actions {
    width: 100vw;
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

.life {
  color: #fff;
  font-size: 0.9em;
  font-weight: 700;

  padding: 0.2em;
  margin-top: 0.2em;
  border-radius: 0.2em;
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.2);
  width: 2.5em;
  margin-left: 8px;
}

.hight {
  color: #00ff00;
}

.mid {
  color: #ffb900;
}

.low {
  color: #ff3200;
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

.actions {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.dices {
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0 0.2em;
  padding: 0.5em;
  min-width: 150px;
  margin-top: 2em;
  flex-grow: 9;
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
  width: 1.7em;
  margin-right: 0.5em;
  vertical-align: middle;
}

.damage {
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0 0.2em;
  padding: 0.5em;
  min-width: 150px;
  margin-top: 2em;
  flex-grow: 1;
  height: 400px;
  padding: 1em;
}

.damage p:first-child {
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 0.5em;
}

.damage p:first-child span {
  color: #fff9c4;
  right: 0.5em;
  font-size: 1.3em;
  margin-right: 0;
}

.damage p {
  line-height: 1.5em;
}

.damage p span {
  float: right;
  margin-right: 0.2em;
}

.damage img {
  width: 2em;
  margin-right: 0.5em;
  vertical-align: middle;
}

.dline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 10px;
  min-width: 100px;
}

.dline1 {
  min-width: 50px;
}

.dline2 {
  width: 50%;
  min-width: 50px;
}

.button {
  margin-top: 35px;
  border: none;
  padding: 10px;
  width: 100%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
}

.button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
