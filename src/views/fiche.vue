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
            <Card class="trait" v-for="(ico, aspect) in $store.state.aspects" :key="aspect" :title="aspect" :titleNb="knight.stats2[aspect].val" :ico="ico">
              <p class="firstMaj" v-for="(val, name) in knight.stats2[aspect]" :key="name" v-bind:class="{ testMode: testMode && name != 'val', selected: rollTest[name] }" @click="testDices(name, val)">
                {{ name != "val" ? name : "" }}
                <span v-if="name != 'val'">
                  {{ val[0] }}
                  <sup class="od">{{ val[1] }}</sup>
                </span>
              </p>
            </Card>
          </div>

          <div class="actions">
            <Card class="dices" :title="'dés'" :ico="require('@/assets/icons/dice.svg')" :icoSize="1.7" :padding="15">
              <div class="dline">
                <label class="dline1 firstMaj" style="margin-top:10px;">Aspects:</label>
                <!--label class="switch">
                  <input type="checkbox" v-model="testMode" />
                  <span class="slider"></span>
                </label-->
              </div>

              <div class="trait_disp_container">
                <div class="" v-for="(dice, name, i) in rollTest" :key="name">
                  <p class="trait_disp firstMaj">
                    {{ name }}
                    <span style="margin-left:20px;">
                      {{ dice[0] }}
                      <sup class="od">{{ dice[1] }}</sup>
                    </span>
                  </p>
                  <p style="font-size: 2em; display: inline-block; margin-left:10px;margin-right:10px;" v-if="i !== Object.keys(rollTest).length - 1">+</p>
                </div>
                <p style="font-size: 2em; display: inline-block; margin-left:10px;margin-right:10px; margin-top:25px;">=</p>
                <p class="button trait_disp firstMaj" @click="rollAspect">
                  {{ `Roll that 🎲` }}
                  <span style="margin-left:20px;">
                    {{ this.rollRes[0] }}
                    <sup class="od">{{ this.rollRes[1] }}</sup>
                  </span>
                </p>
              </div>

              <div v-for="(dice, i) in knight.dices" :key="i">
                <div class="dline">
                  <label class="dline1 firstMaj">{{ i }}:</label>
                </div>
                <div class="trait_disp_container">
                  <p style="font-size: 2em; display: inline-block; margin-left:10px;margin-right:10px; margin-top:25px;">=</p>
                  <p class="button trait_disp firstMaj" @click="rollAspect">
                    {{ `Roll that 🎲` }}
                    <span style="margin-left:20px;">
                      {{ 0 }}
                      <sup class="od">{{ 0 }}</sup>
                    </span>
                  </p>
                </div>
              </div>
            </Card>

            <Card class="damage" :title="'dégats'" :ico="require('@/assets/icons/damage.svg')" :icoSize="2" :padding="15">
              <div class="dline" style="margin-top:20px;">
                <label class="dline1 firstMaj">armure:</label>
                <input class="dline2" type="number" min="0" max="1000" v-model="dPas" @change="editPsa" />
              </div>
              <div class="dline">
                <label class="dline1 firstMaj">santée:</label>
                <input class="dline2" type="number" min="0" max="1000" v-model="dSan" @change="editSan" />
              </div>
              <div class="dline">
                <label class="dline1 firstMaj">energie:</label>
                <input class="dline2" type="number" name="tentacles" min="0" max="1000" v-model="dEn" />
              </div>
              <div class="dline">
                <label class="dline1 firstMaj">espoir:</label>
                <input class="dline2" type="number" min="0" max="1000" v-model="dEsp" />
              </div>
              <button class="button width100" @click="dealDamage()">
                {{ `Hit me daddy ❤️` }}
              </button>
            </Card>
          </div>
        </div>
      </div>

      <audio ref="audio1" src="@/assets/audio/roblox-death-sound.mp3" preload muted style="display: hidden;"></audio>
      <audio ref="audio2" src="@/assets/audio/wilhelm.wav" preload muted style="display: hidden;"></audio>
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "home",
  components: { Card },
  data() {
    return {
      part: false,
      dPas: 0,
      dSan: 0,
      dEn: 0,
      dEsp: 0,
      testMode: true,
      rollTest: {},
      rollRes: [0, 0],
    };
  },
  computed: {
    knight() {
      return this.$store.state.members[this.$store.state.current];
    },
  },
  watch: {
    testMode(v) {
      if (v == false) {
        this.rollTest = {};
      }
    },
  },
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
        let audio1 = this.$refs.audio1;
        audio1.play();
      } else if (this.dSan > 0) {
        this.knight.life.health[1] -= this.dSan;
        if (this.knight.life.health[1] < 1) {
          let audio2 = this.$refs.audio2;
          audio2.play();
        } else {
          let audio1 = this.$refs.audio1;
          audio1.play();
        }
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
    testDices(name, val) {
      if (this.testMode) {
        console.log(name + " " + val[0] + " " + val[1]);
        if (!this.rollTest[name]) {
          this.rollTest[name] = val;
        } else {
          delete this.rollTest[name];
        }
        console.log(this.rollTest);
        this.$forceUpdate();
      }
    },
    rollAspect() {
      let res = [0, 0];
      for (let aspect in this.rollTest) {
        res[0] += this.rollTest[aspect][0];
        res[1] += this.rollTest[aspect][1];
      }
      this.rollRes = res;
    },
  },
};
</script>

<style scoped lang="scss">
$layout-breakpoint-small: 576px; //420px
$layout-breakpoint-medium: 768px; //670px
$layout-breakpoint-large: 992px; //880px
$layout-breakpoint-extralarge: 1200px; //1040px

$color-green: #00ff00;
$color-white: #fff;
$color-orange: #ffb900;
$color-red: #ff3200;
$color-yellow: #fff9c4;
$color-card-bg: rgba(0, 0, 0, 0.4);

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: $color-white;
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
  background-color: $color-card-bg;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: -20px;
}

td {
  text-align: start;
  font-size: 1em;
  height: 10px;
  border-bottom: 0.1em solid $color-white;
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
  background-color: $color-card-bg;
  border-top: 0.1em solid $color-white;
  padding: 1em 0 2em 0;
  font-size: 0.7em;
  margin-left: 15px;
  margin-right: 15px;
}

.S1 {
  color: $color-white;
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
    background-color: $color-card-bg;
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
  width: 70%;
  max-width: 1200px;
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
  margin-top: 10px;
  min-width: 100px;
}

.point img {
  width: 50px;
  display: inline-block;
  vertical-align: middle;
}

.life {
  color: $color-white;
  font-size: 0.9em;
  font-weight: 700;
  padding: 3px;
  margin-top: 5px;
  border-radius: 3px;
  border: 1px solid $color-white;
  background-color: rgba(255, 255, 255, 0.2);
  width: 35px;
  margin-left: 8px;
}

.hight {
  color: $color-green;
}

.mid {
  color: $color-orange;
}

.low {
  color: $color-red;
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
  min-width: 130px;
  margin-top: 2em;
  flex-grow: 1;
}

.trait_disp_container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: -30px;
  margin-bottom: 30px;
  min-width: 130px;
}
.trait_disp {
  background-color: $color-card-bg;
  color: $color-white;
  margin: 0 0.2em;
  padding: 0.5em;
  min-width: 110px;
  margin-top: 2em;
  flex-grow: 1;
  display: inline-block;
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
  min-width: 150px;
  margin-top: 2em;
  flex-grow: 9;
}

.damage {
  min-width: 150px;
  margin-top: 2em;
  flex-grow: 1;
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

.testMode {
  background-color: $color-card-bg;
  margin: -1px;
  margin-top: 5px;
  padding: 5px 15px;
}

.testMode:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.testMode:active {
  background-color: rgba(0, 0, 0, 0.6);
}

.selected {
  border-bottom: 1px solid $color-green;
  margin-bottom: -2px;
  background-color: rgba(0, 0, 0, 0.6);
}

.toRoll {
  background-color: $color-card-bg;
  padding: 5px 15px;
}

.switch {
  float: left;
}

.width100 {
  width: 100%;
}
</style>
