<template>
  <div id="arsenal">
    <section class="content">
      <Card class="Arme1" :title="'dégats'" :ico="require('@/assets/icons/damage.svg')" :icoSize="2" :padding="15"> </Card>
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "arsenal",
  components: { Card },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="scss">
@import "@/global.scss";

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: $color-white;
}
</style>
