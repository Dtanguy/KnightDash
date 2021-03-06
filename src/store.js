import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/*
SANTÉ = 10+6*[max(caractéristique de Chair sans OD)]
DEFENSE =[max(caractéristique de Bête + OD])
REACTION =[max(caractéristique de Machine + OD)] 
INITIATIVE=[max(caractéristique de Masque + OD)]


TODO
un champ : "nb de dés de malus"
de plus, il faudrait prévoir ptet un radio button pour le type de combat ?
genre Défaut / Akimbo / Ambidextrie / Aggressif / Défensif / A couvert
node soit / genade
*/

export default new Vuex.Store({
  state: {
    token: "",
    backIp: '',
    currentCoteries: "121",
    currentKnight: "ecarlate",
    svg: {
      aspects: {
        chair: require("@/assets/icons/chair.svg"),
        bete: require("@/assets/icons/bete.svg"),
        machine: require("@/assets/icons/machine.svg"),
        dame: require("@/assets/icons/dame.svg"),
        masque: require("@/assets/icons/masque.svg"),
      },
      life: {
        cdf: require("@/assets/icons/cdf.svg"),
        armor: require("@/assets/icons/shield.svg"),
        health: require("@/assets/icons/health.svg"),
        energy: require("@/assets/icons/energy.svg"),
        hope: require("@/assets/icons/hope.svg"),
        glory: require("@/assets/icons/glory.svg"),
        experience: require("@/assets/icons/mortarboard.svg"),
      },
      coteries: require("@/assets/icons/team.svg"),
      armors: {
        warmaster: {
          img: require("@/assets/armures/warmaster.png"),
          face: require("@/assets/armures/face/warmaster-face.jpg"),
        },
        ranger: {
          img: require("@/assets/armures/ranger.png"),
          face: require("@/assets/armures/face/ranger-face.jpg"),
        },
        barbarian: {
          img: require("@/assets/armures/barbarian.png"),
          face: require("@/assets/armures/face/barbarian-face.jpg"),
        },
        warrior: {
          img: require("@/assets/armures/warrior.png"),
          face: require("@/assets/armures/face/warrior-face.jpg"),
        },
        bard: {
          img: require("@/assets/armures/bard.png"),
          face: require("@/assets/armures/face/bard-face.jpg"),
        },
        rogue: {
          img: require("@/assets/armures/rogue.png"),
          face: require("@/assets/armures/face/rogue-face.jpg"),
        }
      },
    },
    members: {}
  }
})