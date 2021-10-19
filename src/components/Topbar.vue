<template>
  <nav class="topbar">
    <a class="icon" v-on:click="hide = !hide">
      <i class="fa fa-bars"></i>
    </a>
    <div class="menu" v-if="hide">
      <a class="nav-item2 item-support" href="/fiche">
        <span>Fiche</span>
      </a>
      <a class="nav-item2 item-support" href="/arsenal">
        <span>Arsenal</span>
      </a>
    </div>
    <h2 class="title fixe">COTERIE: {{ $store.state.currentCoteries }}</h2>
    <div class="team">
      <div class="logo">
        <img :src="$store.state.svg.coteries" />
      </div>
      <div class="teammates">
        <a v-for="(member, i) in $store.state.coteries[$store.state.currentCoteries].members" :key="i" @click="goto(i)">
          <img :src="armorFace($store.state.members[member].infos.type)" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Topbar",
  data() {
    return {
      hide: false,
    };
  },
  methods: {
    armorFace(type) {
      return this.$store.state.svg.armors[type].face;
    },
    goto(i) {
      let c = this.$store.state.currentCoteries;
      this.$store.state.currentKnight = this.$store.state.coteries[c].members[i];
    },
  },
};
</script>

<style scoped lang="scss">
$layout-breakpoint-small: 576px; //420px
$layout-breakpoint-medium: 768px; //670px
$layout-breakpoint-large: 992px; //880px
$layout-breakpoint-extralarge: 1200px; //1040px

.topbar {
  position: relative;
  z-index: 500;
  width: 100vw;
  height: 65px;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.title {
  display: inline-block;
  vertical-align: middle;
  margin-left: 50px;
}

.logo {
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  width: 2.5em;
}

.team {
  position: relative;
  float: right;
  vertical-align: middle;
  right: 50px;
  top: 10px;
}
.team img {
  width: 2.5em;
}
.team a img:hover {
  opacity: 0.7;
}

.teammates {
  display: inline-block;
  vertical-align: middle;
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.topnav a {
  color: #fff;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

.topnav a:hover {
  color: #fff;
}

@media (max-width: $layout-breakpoint-medium) {
  .fixe {
    display: none;
  }
  .menu {
    position: absolute;
    background-color: rgba(0, 0, 0, 1);
    border-top: 1px solid #c2c2c2;
    width: 100vw;
    top: 65px;
  }
}
@media (min-width: $layout-breakpoint-medium) {
  .mobile {
    display: none;
  }
  .menu {
    position: fixed;
    width: 200px;
  }
}

.icon {
  position: relative;
  left: 15px;
  top: 10px;
  font-size: 2.3em;
  padding-bottom: 50px;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.nav-item2 {
  width: 100%;
  color: #fff;
  white-space: nowrap;
  user-select: none;
  font-size: 17px;
  font-weight: 400;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #c2c2c2;
  display: inline-block;
  line-height: 50px;
  vertical-align: middle;
  text-decoration: none;
}
</style>
