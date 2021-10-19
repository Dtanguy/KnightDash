import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    aspects: {
      chair: require("@/assets/icons/chair.svg"),
      bete: require("@/assets/icons/bete.svg"),
      machine: require("@/assets/icons/machine.svg"),
      dame: require("@/assets/icons/dame.svg"),
      masque: require("@/assets/icons/masque.svg"),
    },
    life: {
      cdf: require("@/assets/icons/cdf.svg"),
      shield: require("@/assets/icons/shield.svg"),
      health: require("@/assets/icons/health.svg"),
      energy: require("@/assets/icons/energy.svg"),
      glory: require("@/assets/icons/glory.svg"),
      mortarboard: require("@/assets/icons/mortarboard.svg"),
      hope: require("@/assets/icons/hope.svg"),
    },
    current: "ecarlate",
    coteries: {
      name: "121",
      logo: require("@/assets/icons/team.svg"),
      members: ["ecarlate", "2", "3", "4", "5", "6"]
    },
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
    members: {
      /* 1 */
      ecarlate: {
        infos: {
          chevalier: "ecarlate",
          coterie: "121",
          nom: "",
          prenom: "",
          IA: "ALISE",
          section: "Giant",
          blason: "Serpent",
          type: "barbarian",
        },
        life: {
          cdf: [12, 12],
          shield: [60, 60],
          health: [39, 39],
          energy: [60, 60],
          hope: [50, 50],
          glory: [80, 80],
          mortarboard: [60, 60],
        },
        stats1: {
          initiative: 3,
          defense: 5,
          reaction: 3,
        },
        stats2: {
          chair: {
            val: 4,
            deplacement: [2, 0],
            force: [4, 1],
            endurance: [4, 1]
          },
          bete: {
            val: 5,
            hargne: [4, 1],
            combat: [5, 1],
            instinct: [2, 0]
          },
          machine: {
            val: 4,
            tir: [2, 0],
            savoir: [4, 0],
            technique: [4, 1]
          },
          dame: {
            val: 2,
            aura: [1, 0],
            parole: [2, 0],
            "sang-froid": [2, 0]
          },
          masque: {
            val: 3,
            discretion: [2, 0],
            "dextérité": [3, 0],
            perception: [2, 0]
          }
        },
        dices: {
          "ceste lourd akimbo": {

          },
          "Environement": {

          }
        }
      },
      /* 2 */
      2: {
        infos: {
          name: "2",
          type: "bard",
        },
        life: {
          cdf: [12, 0],
          shield: [60, 60],
          health: [46, 46],
          energy: [60, 60],
          glory: [80, 80],
          mortarboard: [60, 60],
          hope: [50, 50],
        },
        stats: {
          chair: {
            deplacement: [3, 0],
            force: [6, 1],
            endurence: [4, 0]
          },
          bete: {
            hargne: [3, 1],
            combat: [4, 1],
            instinc: [2, 0]
          },
          machine: {
            tir: [1, 0],
            savoir: [1, 0],
            technique: [1, 0]
          },
          dame: {
            aura: [1, 0],
            parole: [1, 0],
            sangfroid: [2, 0]
          },
          masque: {
            discretion: [1, 0],
            dexteritee: [1, 0],
            perception: [1, 0]
          }
        }
      },
      /* 3 */
      3: {
        infos: {
          name: "3",
          type: "ranger",
        },
        life: {
          cdf: [12, 0],
          shield: [60, 60],
          health: [46, 46],
          energy: [60, 60],
          glory: [80, 80],
          mortarboard: [60, 60],
          hope: [50, 50],
        },
        stats: {
          chair: {
            deplacement: [3, 0],
            force: [6, 1],
            endurence: [4, 0]
          },
          bete: {
            hargne: [3, 1],
            combat: [4, 1],
            instinc: [2, 0]
          },
          machine: {
            tir: [1, 0],
            savoir: [1, 0],
            technique: [1, 0]
          },
          dame: {
            aura: [1, 0],
            parole: [1, 0],
            sangfroid: [2, 0]
          },
          masque: {
            discretion: [1, 0],
            dexteritee: [1, 0],
            perception: [1, 0]
          }
        }
      },
      /* 4 */
      4: {
        infos: {
          name: "4",
          type: "rogue",
        },
        life: {
          cdf: [12, 0],
          shield: [60, 60],
          health: [46, 46],
          energy: [60, 60],
          glory: [80, 80],
          mortarboard: [60, 60],
          hope: [50, 50],
        },
        stats: {
          chair: {
            deplacement: [3, 0],
            force: [6, 1],
            endurence: [4, 0]
          },
          bete: {
            hargne: [3, 1],
            combat: [4, 1],
            instinc: [2, 0]
          },
          machine: {
            tir: [1, 0],
            savoir: [1, 0],
            technique: [1, 0]
          },
          dame: {
            aura: [1, 0],
            parole: [1, 0],
            sangfroid: [2, 0]
          },
          masque: {
            discretion: [1, 0],
            dexteritee: [1, 0],
            perception: [1, 0]
          }
        }
      },
      /* 5 */
      5: {
        infos: {
          name: "5",
          type: "warmaster",
        },
        life: {
          cdf: [12, 0],
          shield: [60, 60],
          health: [46, 46],
          energy: [60, 60],
          glory: [80, 80],
          mortarboard: [60, 60],
          hope: [50, 50],
        },
        stats: {
          chair: {
            deplacement: [3, 0],
            force: [6, 1],
            endurence: [4, 0]
          },
          bete: {
            hargne: [3, 1],
            combat: [4, 1],
            instinc: [2, 0]
          },
          machine: {
            tir: [1, 0],
            savoir: [1, 0],
            technique: [1, 0]
          },
          dame: {
            aura: [1, 0],
            parole: [1, 0],
            sangfroid: [2, 0]
          },
          masque: {
            discretion: [1, 0],
            dexteritee: [1, 0],
            perception: [1, 0]
          }
        }
      },
      /* 6 */
      6: {
        infos: {
          name: "6",
          type: "warrior",
        },
        life: {
          cdf: [12, 0],
          shield: [60, 60],
          health: [46, 46],
          energy: [60, 60],
          glory: [80, 80],
          mortarboard: [60, 60],
          hope: [50, 50],
        },
        stats: {
          chair: {
            deplacement: [3, 0],
            force: [6, 1],
            endurence: [4, 0]
          },
          bete: {
            hargne: [3, 1],
            combat: [4, 1],
            instinc: [2, 0]
          },
          machine: {
            tir: [1, 0],
            savoir: [1, 0],
            technique: [1, 0]
          },
          dame: {
            aura: [1, 0],
            parole: [1, 0],
            sangfroid: [2, 0]
          },
          masque: {
            discretion: [1, 0],
            dexteritee: [1, 0],
            perception: [1, 0]
          }
        }
      },
    }
  }
})