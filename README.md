# KnightDash

[WIP]
Dashboard for Knight role play (stats, dice rolls and damages management).

<p align="center">
	<img src="https://raw.githubusercontent.com/dtanguy/KnightDash/master/src/assets/readme/1.jpg" width="100%">
</p>

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Knight JSON configuration

```javascript
ecarlate: {
	"infos":{
	   "chevalier":"ecarlate",
	   "nom":"",
	   "prenom":"",
	   "IA":"ALISE",
	   "section":"Giant",
	   "blason":"Serpent",
	   "type":"barbarian"
	},
	"life":{
	   "cdf":[
		  12,
		  12
	   ],
	   "shield":[
		  60,
		  60
	   ],
	   "health":[
		  39,
		  39
	   ],
	   "energy":[
		  60,
		  60
	   ],
	   "hope":[
		  50,
		  50
	   ],
	   "glory":[
		  80,
		  80
	   ],
	   "mortarboard":[
		  60,
		  60
	   ]
	},
	"stats1":{
	   "initiative":3,
	   "defense":5,
	   "reaction":3
	},
	"stats2":{
	   "chair":{
		  "val":4,
		  "deplacement":[
			 2,
			 0
		  ],
		  "force":[
			 4,
			 1
		  ],
		  "endurance":[
			 4,
			 1
		  ]
	   },
	   "bete":{
		  "val":5,
		  "hargne":[
			 4,
			 1
		  ],
		  "combat":[
			 5,
			 1
		  ],
		  "instinct":[
			 2,
			 0
		  ]
	   },
	   "machine":{
		  "val":4,
		  "tir":[
			 2,
			 0
		  ],
		  "savoir":[
			 4,
			 0
		  ],
		  "technique":[
			 4,
			 1
		  ]
	   },
	   "dame":{
		  "val":2,
		  "aura":[
			 1,
			 0
		  ],
		  "parole":[
			 2,
			 1
		  ],
		  "sangfroid":[
			 2,
			 0
		  ]
	   },
	   "masque":{
		  "val":3,
		  "discretion":[
			 2,
			 0
		  ],
		  "dexterite":[
			 3,
			 0
		  ],
		  "perception":[
			 2,
			 0
		  ]
	   }
	}
}
```
