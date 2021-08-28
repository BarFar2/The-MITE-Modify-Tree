let modInfo = {
	name: "The-MITE-Modify-Tree",
	id: "The-MITE-Modify-Tree",
	author: "I",
	pointsName: "时间",
	discordName: "",
	discordLink: "",
	initialStartPoints: new OmegaNum (0), // Used for hard resets and new players
	
	offlineLimit: 10,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "",
}

let changelog = `<h1>更新日志:</h1><br>
	<h3>v0.1</h3><br>
		- 增加8种资源、4(3)种工具和9(8)个合成配方<br>
		- emm`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new OmegaNum(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints()) return new OmegaNum(0)
	let gain = new OmegaNum(1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	"当前endgame:1工作台等级，合成1燧石斧、1燧石锹"
]

// Determines when the game "ends"
function isEndgame() {
	return false
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}