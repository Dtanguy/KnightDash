<template>
  <div class="card" :style="{ padding: padding + 'px' }">
    <p class="cardTitle">
      <img class="cardIco" :style="{ width: icoSize + 'em' }" :src="ico" alt="" />
      {{ title }}
      <span class="cardNb">{{ titleNb }}</span>
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    ico: String,
    icoSize: Number,
    title: String,
    titleNb: Number,
    padding: Number,
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

.card {
  background-color: $color-card-bg;
  color: $color-white;
  margin: 0 0.2em;
  padding: 0.5em;
}

.cardTitle {
  text-transform: uppercase;
  font-size: 1.1em;
  font-weight: 700;
  margin-bottom: 0.5em;
}

.cardIco {
  width: 1.3em;
  margin-right: 8px;
  margin-top: -3px;
  vertical-align: middle;
}

.cardNb {
  right: 0.5em;
  font-size: 1.2em;
  margin-right: 0;
  color: $color-yellow;
}

.card p {
  line-height: 1.5em;
}

.card p span {
  float: right;
  margin-right: 0.2em;
}

.od {
  color: $color-yellow;
  font-size: 0.8em;
  vertical-align: top;
  margin-left: 0.2em;
}

.firstMaj :first-letter {
  text-transform: uppercase;
}

/* BUTTON */
.button {
  margin-top: 35px;
  border: none;
  padding: 10px;
  color: $color-white;
  background-color: $color-card-bg;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.button:active {
  background-color: rgba(0, 0, 0, 0.6);
}

/* SWITCH */
.switch {
  position: relative;
  width: 60px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-card-bg;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: $color-white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: $color-green;
}

.slider:hover {
  background-color: rgba(0, 0, 0, 0.6);
}

input:checked + .slider:before {
  -webkit-transform: translateX(35px);
  -ms-transform: translateX(35px);
  transform: translateX(35px);
}
</style>
