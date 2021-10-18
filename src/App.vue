<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* IMPORT DES FONTS */
@import url("https://fonts.googleapis.com/css?family=Maven+Pro");
@import url("https://fonts.googleapis.com/css?family=Asap:400,500,700");

/* DESIGN GÉNÉRAL */
html,
body,
p {
  margin: 0;
  padding: 0;
}

#app {
  background: url("./assets/bg/bg-1.jpg");
  background-size: cover;
  color: white;
  font-family: "Asap", Helvetica, sans-serif;
  font-weight: 100;
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>
