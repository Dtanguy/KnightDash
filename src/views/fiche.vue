<template>
  <div class="hello">
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

    <section id="knight">
      <div>
        <p class="firstMaj">{{ knight.name }}</p>
        <img :src="armorImg(knight.type)" alt="" />
        <div id="definitrea" class="logo width100">
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

      <div id="chiffres">
        <div id="points">
          <div v-for="(ico, life) in $store.state.life" :key="life">
            <img :src="ico" alt="" />
            <div class="nav-data">
              <p>{{ knight.life[life][0] }}</p>
              <p>{{ knight.life[life][1] }}</p>
            </div>
          </div>
        </div>
        <div id="stats">
          <div class="trait" v-for="(ico, aspect) in $store.state.aspects" :key="aspect">
            <p><img :src="ico" alt="" />{{ aspect }}<span>6</span></p>
            <p class="firstMaj" v-for="(val, name) in knight.stats[aspect]" :key="name">
              {{ name }}
              <span>
                {{ val[0] }}
                <sup class="od">{{ val[1] }}</sup>
              </span>
            </p>
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

#knight > div:first-child {
  padding-top: 1em;
  width: 30%;
  position: relative;
  display: inline-block;
}

#knight > div:first-child p:first-child {
  font-size: 1.5em;
  text-align: center;
  font-weight: 500;
}

#knight .width100 {
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  border-top: 0.1em solid #ddd;
  margin: 0;
  padding: 1em 0 2em 0;
  bottom: 0;
}

#knight .txtDefinitrea {
  display: inline-block;
  color: white;
  font-size: 1em;
  font-weight: 400;
  width: 30%;
  text-align: center;
}

#knight .txtDefinitrea p:first-child {
  font-size: 3em;
  border-radius: 2em;
  width: 1em;
  font-weight: 700;
  margin: 0.1em auto;
  text-align: center;
}

#chiffres {
  width: 69%;
  display: inline-block;
  vertical-align: top;
}

#points,
#stats {
  font-family: "Asap", Helvetica, sans-serif;
  width: 100%;
  display: inline-block;
  vertical-align: top;
}

#points #cdf {
  width: auto;
  padding-right: 1em;
}

#points #cdf p {
  font-size: 1em;
  width: auto;
  top: 50%;
  left: 24%;
  position: absolute;
}

#points > div {
  padding-top: 1em;
  width: 7.5em;
  display: inline-block;
  position: relative;
}

#points img {
  width: 3em;
  display: inline-block;
  vertical-align: middle;
}

#points .nav-data {
  display: inline-block;
  vertical-align: middle;
  position: relative;
}

#points .nav-data p:first-child {
  font-size: 1.2em;
  text-align: center;
  width: 2em;
}

#points .nav-data p:last-child {
  font-size: 0.8em;
  text-align: center;
  padding: 0.2em;
  margin-top: 0.2em;
  border-radius: 0.2em;
  background-color: rgba(255, 255, 255, 0.2);
}

#stats {
  margin-top: 2em;
}

.trait {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0 0.2em;
  padding: 0.5em;
  vertical-align: top;
  width: 17%;
  position: relative;
}

.trait p:first-child {
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 0.5em;
}

.trait p:first-child span {
  position: absolute;
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
