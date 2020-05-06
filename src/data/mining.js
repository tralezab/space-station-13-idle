export const ITEMS = new Map([
	["iron", {
		name: "Iron",
		sellPrice: 1,
		icon: require("@/assets/art/mining/Ironore.png")
	}],
	["glass", {
		name: "Glass",
		sellPrice: 2,
		icon: require("@/assets/art/mining/Sandore.png")
	}],
	["silver", {
		name: "Silver",
		sellPrice: 5,
		icon: require("@/assets/art/mining/Silverore.png")
	}]
]);

export const ACTIONS = {
	mineIron: {
		time: 1.5,
		item: "iron",
		icon: require("@/assets/art/mining/Ironwall.png"),
		xp: 5,
		requiredLevel: 1
	},
	mineSand: {
		time: 2.0,
		item: "glass",
		icon: require("@/assets/art/mining/Sandore.png"),
		xp: 10,
		requiredLevel: 2
	},
	mineSilver: {
		time: 2.5,
		item: "silver",
		icon: require("@/assets/art/mining/Silverwall.png"),
		xp: 15,
		requiredLevel: 3
	}
}

export const JOB = {
	id: "mining",
	name: "Mining",
	icon: require("@/assets/art/mining/icon.png"),
	color: "#95857a",
	items: ITEMS
}
