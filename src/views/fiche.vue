<template>
  <div>
    <nav>
      <h2>SECTION: {{ $store.state.section.name }}</h2>
      <div id="team">
        <div class="logo" style="margin-right: 15px;">
          <img :src="$store.state.section.logo" alt="" />
        </div>
        <div id="teammates">
          <a v-for="(member, i) in $store.state.section.members" :key="member.name" @click="goto(i)">
            <img :src="armorFace($store.state.members[member].type)" alt="" />
          </a>
        </div>
      </div>
    </nav>

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
            <p>{{ knight.stats.init }}</p>
            <p>INITIATIVE</p>
          </div>
          <div class="txtDefinitrea">
            <p>{{ knight.stats.def }}</p>
            <p>DÉFENSE</p>
          </div>
          <div class="txtDefinitrea">
            <p>{{ knight.stats.init }}</p>
            <p>RÉACTION</p>
          </div>
        </div>
      </div>

      <div class="chiffres" style="border: 1px solid red;">
        <div class="points">
          <div class="point" v-for="(ico, life) in $store.state.life" :key="life">
            <img :src="ico" alt="" />
            <div class="nav-data">
              <p>{{ knight.life[life][0] }}</p>
              <p>{{ knight.life[life][1] }}</p>
            </div>
          </div>
        </div>

        <div style="border: 1px solid red;">
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

          <div class="trait" style="height: 400px;  margin-top:2em;"></div>
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
    armorFace(type) {
      return this.$store.state.armors[type].face;
    },
    armorImg(type) {
      return this.$store.state.armors[type].img;
    },
    goto(i) {
      this.$store.state.current = this.$store.state.section.members[i];
    },
  },
};
</script>

<style scoped>
/* TOP */
nav {
  height: 4em;
  background-color: rgba(0, 0, 0, 0.3);
  display: inline-block;
  width: 100%;
  text-align: center;
  overflow: hidden;
}

nav h2 {
  display: inline-block;
  vertical-align: middle;
}

nav h2 {
  margin-left: 2em;
}

nav .logo,
nav #team {
  display: inline-block;
  vertical-align: middle;
  position: relative;
}

nav .logo img {
  width: 2.5em;
}

nav .logo p {
  position: absolute;
  top: 0.75em;
  margin-left: 0.7em;
}

nav #team {
  margin-left: 6em;
}

nav #team a img {
  max-width: 40px;
  display: inline-block;
}

nav #team a img:hover {
  opacity: 0.7;
}

nav #teammates {
  display: inline-block;
  vertical-align: middle;
  border: 1px solid rgba(255, 255, 255, 0.8);
}

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
}

.table {
  background-color: rgba(0, 0, 0, 0.5);
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
  padding-top: 1em;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-top: 0.1em solid #ddd;
  padding: 1em 0 2em 0;
  font-size: 0.7em;
}

.knight > div:first-child p:first-child {
  font-size: 1.5em;
  text-align: center;
  font-weight: 500;
}

.txtDefinitrea {
  display: inline-block;
  color: white;
  font-size: 1em;
  font-weight: 400;
  width: 30%;
  text-align: center;
}

.txtDefinitrea p:first-child {
  font-size: 3em;
  border-radius: 2em;
  width: 1em;
  font-weight: 700;
  margin: 0.1em auto;
  text-align: center;
}

/* RIGHT */
.chiffres {
  width: 60%;
  display: inline-block;
  vertical-align: top;
  font-family: "Asap", Helvetica, sans-serif;
}

.points {
  margin-top: 2em;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.point {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 100px;
  border: 1px solid blue;
}

.point img {
  width: 3em;
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
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.trait {
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0 0.2em;
  padding: 0.5em;
  min-width: 200px;
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
  display: inline-block;
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
</style>
