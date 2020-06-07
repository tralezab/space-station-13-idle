const randomJunkTable = [
	{
		id: 'junk',
		weight: 3
	},
	{
		id: 'spacejunk',
		weight: 3
	},
	{
		id: 'armorjunk',
		weight: 3
	},
];

const ACTIONS = {
	//at 25 xp per action gives approximately 4000 total junk to hit 50.
	graytideMining: {
		name: "Mining",
		icon: require("@/assets/art/graytiding/Mining.png"),
		time: 6,
		xp: 25,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "iron",
						count: [1, 3],
						weight: 300
					}, {
						id: "silver",
						count: 2,
						weight: 100
					}, {
						id: "gold",
						weight: 99
					}, {
						id: "limbMagBoots",
						weight: 1
					}
				]
			}
		]
	},
	graytideMeat: {
		name: "Medical",
		icon: require("@/assets/art/graytiding/Medical.png"),
		time: 6,
		xp: 25,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "foodMeatH",
						count: [0, 2],
						weight: 165
					}, {
						id: "foodMeatZ",
						count: [0, 2],
						weight: 165
					}, {
						id: "foodMeatA",
						count: [0, 2],
						weight: 165
					}, {
						id: "limbClownShoes",
						weight: 1
					}
				]
			}
		]
	},
	graytideSecurity: {
		name: "Security",
		icon: require("@/assets/art/graytiding/Security.png"),
		time: 6,
		xp: 25,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "ammoE1",
						count: [1, 3],
						weight: 119
					}, {
						id: "ammoE2",
						count: 2,
						weight: 40
					}, {
						id: "ammoE3",
						weight: 20
					}, {
						id: "ammoE4",
						weight: 10
					}, {
						id: "ammoB1",
						count: [1, 3],
						weight: 120
					}, {
						id: "ammoB2",
						count: 2,
						weight: 40
					}, {
						id: "ammoB3",
						weight: 20
					}, {
						id: "ammoB4",
						weight: 10
					}, {
						id: "limbJackboots",
						weight: 1
					},
				]
			}
		]
	},
	graytideScience: {
		name: "Research",
		icon: require("@/assets/art/graytiding/Science.png"),
		time: 6,
		xp: 25,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "slimeGrey",
						weight: 255
					}, {
						id: "slimeOrange",
						weight: 50
					}, {
						id: "slimePurple",
						weight: 50
					}, {
						id: "slimeBlue",
						weight: 50
					}, {
						id: "slimeYellow",
						weight: 30
					}, {
						id: "slimeDarkPurple",
						weight: 30
					}, {
						id: "slimeDarkBlue",
						weight: 30
					}, {
						id: "limbAdvancedMagboots",
						weight: 1
					}
				]
			}
		]
	},
	graytideSeeds: {
		name: "Botany",
		icon: require("@/assets/art/graytiding/Botany.png"),
		time: 6,
		xp: 25,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "plantSeed",
						count: [0, 2],
						weight: 499
					}, {
						id: "limbBlack",
						weight: 1
					}
				]
			}
		]
	},
	graytideBridge: {
		name: "Captains Quarters",
		icon: require("@/assets/art/graytiding/Command.png"),
		time: 6,
		xp: 25,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "foodPasta1",
						weight: 200
					}, {
						id: "foodPasta2",
						weight: 100
					}, {
						id: "foodPasta3",
						weight: 75
					}, {
						id: "foodPasta4",
						weight: 55
					}, {
						id: "foodPasta5",
						weight: 40
					}, {
						id: "foodPasta6",
						weight: 24
					}, {
						id: "limbCapt",
						weight: 1
					}
				]
			}
		]
	},
	graytidePower: {
		name: "Engineering",
		icon: require("@/assets/art/graytiding/Engineering.png"),
		time: 6,
		xp: 25,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "power",
						count: [0, 25],
						weight: 499
					}, {
						id: "limbInsuls",
						weight: 1
					}
				]
			}
		]
	},
	graytideSpace: {
		name: "Space",
		icon: require("@/assets/art/graytiding/space_anim.gif"),
		time: 6,
		xp: 25,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: .002,
				item: "limbNinja",
				weight: 1
			}
		]
	},
	graytideDouble: {
		name: "Rage Cage",
		icon: require("@/assets/art/graytiding/Rage.png"),
		time: 6,
		xp: 25,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: .002,
				item: "limbBoxing",
				weight: 1
			}
		]
	},
	graytideVault: {
		name: "Vault",
		icon: require("@/assets/art/graytiding/Vault.png"),
		time: 6,
		xp: 25,
		requiredLevel: 1,
		itemTables: [
			{
				chance: .02,
				itemTable: [
					{
						id: 'junk',
						count: [0, 100],
						weight: 10
					}, {
						id: 'spacejunk',
						count: [0, 100],
						weight: 10
					}, {
						id: 'armorjunk',
						count: [0, 100],
						weight: 10
					},
				]
			},
			{
				chance: .002,
				item: "limbMagkrava",
				weight: 1
			}
		]
	},
	graytideBULK: {
		name: "Security",
		icon: require("@/assets/art/graytiding/Security.png"),
		time: 6,
		xp: 25,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: randomJunkTable
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "limbInsuls",
						count: [1, 3],
						weight: 50
					}, {
						id: "limbBoxing",
						count: 2,
						weight: 50
					}, {
						id: "limbMagkrava",
						weight: 50
					}, {
						id: "limbCapt",
						weight: 50
					}, {
						id: "limbNinja",
						count: [1, 3],
						weight: 50
					}, {
						id: "limbBlack",
						count: 2,
						weight: 50
					}, {
						id: "limbMagBoots",
						weight: 50
					}, {
						id: "limbClownShoes",
						weight: 50
					}, {
						id: "limbJackboots",
						weight: 50
					}, {
						id: "limbAdvancedMagboots",
						weight: 50
					},
				]
			}
		]
	},
}

for (let action of Object.values(ACTIONS)) {
	action.failure = {
		chance: .5,
		damage: 10
	}
}

export { ACTIONS }

export const JOB = {
	id: "graytiding",
	name: "Graytiding",
	icon: require("@/assets/art/graytiding/icon.png"),
	color: "#B0B0B0"
}