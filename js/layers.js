addLayer("介绍", {
    name: "介绍", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "介绍", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    color: "#428571",
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 1, // Row the layer is in on the tree (0 is the first row)
    startData() { return {
        unlocked: true,
        //points:new OmegaNum(0),

    }},
    resource:"???",
    tabFormat: {
        "介绍": {
            content: [
                "main-display",
                ["display-text", function(){return "MITE的魔改树版，有很多配方在MITE里没有<br>原作者Jack the Ripper - Raiden和QwQ<br>树稍微精良了一些，而且内容稍微多了一点点<br>emm没什么好说的，玩就完了"}],
                ["display-text", function(){return "(燧石镐暂时没用)"}]
            ]
        },
        "纤维绳":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>草|草|无<h1>"}],
                ["display-text", function(){return "<h1>草|无|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
            ]
        },
        "燧石粒":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>沙砾|沙砾|无<h1>"}],
                ["display-text", function(){return "<h1>沙砾|无|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
            ]
        },
        "燧石":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>燧石粒|燧石粒|无<h1>"}],
                ["display-text", function(){return "<h1>燧石粒|燧石粒|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
            ]
        },
        "木板":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>原木|无|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
                ["display-text", function(){return "<h1>需工作台等级1<h1>"}],
            ]
        },
        "木棍":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>木板|无|无<h1>"}],
                ["display-text", function(){return "<h1>木板|无|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
                ["display-text", function(){return "<h1>需工作台等级1<h1>"}],
            ]
        },
        "燧石短斧":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>木棍|燧石|无<h1>"}],
                ["display-text", function(){return "<h1>木棍|纤维绳|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
            ]
        },
        "燧石斧":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>无|燧石|燧石<h1>"}],
                ["display-text", function(){return "<h1>无|木棍|燧石<h1>"}],
                ["display-text", function(){return "<h1>无|木棍|无<h1>"}],
                ["display-text", function(){return "<h1>需工作台等级1<h1>"}],
            ]
        },
        "燧石镐":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>燧石|燧石|燧石<h1>"}],
                ["display-text", function(){return "<h1>无|木棍|无<h1>"}],
                ["display-text", function(){return "<h1>无|木棍|无<h1>"}],
                ["display-text", function(){return "<h1>需工作台等级1<h1>"}],
            ]
        },
        "燧石锹":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>无|燧石|无<h1>"}],
                ["display-text", function(){return "<h1>无|木棍|无<h1>"}],
                ["display-text", function(){return "<h1>无|木棍|无<h1>"}],
                ["display-text", function(){return "<h1>需工作台等级1<h1>"}],
            ]
        },
    }
})
addLayer("k", {
    name: "knapsack", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "背包", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        //points: new OmegaNum(0),
        原木: new OmegaNum(0),
        木板: new OmegaNum(0),
        木棍: new OmegaNum(0),
        草: new OmegaNum(0),
        纤维绳: new OmegaNum(0),
        沙砾: new OmegaNum(0),
        燧石碎片 :new OmegaNum(0),
        燧石: new OmegaNum(0),
        燧石短斧: new OmegaNum(0),
        燧石斧:new OmegaNum(0),
        燧石镐:new OmegaNum(0),
        燧石锹:new OmegaNum(0),
    }},
    color: "#FFDDDD",
    resource: "???",
    row:1,
    tabFormat: {
        "背包": {
            content: [
                "main-display",
                ["display-text", function(){return "你有" + format(player.k.原木) + "个原木"}],
                ["display-text", function(){return "你有" + format(player.k.木板) + "个木板"}],
                ["display-text", function(){return "你有" + format(player.k.木棍) + "个木棍"}],
                ["display-text", function(){return "你有" + format(player.k.草) + "个草"}],
                ["display-text", function(){return "你有" + format(player.k.纤维绳) + "个纤维绳"}],
                ["display-text", function(){return "你有" + format(player.k.沙砾) + "个沙砾"}],
                ["display-text", function(){return "你有" + format(player.k.燧石碎片) + "个燧石碎片"}],
                ["display-text", function(){return "你有" + format(player.k.燧石) + "个燧石"}],
                ["display-text", function(){return "你有" + format(player.k.燧石短斧.mul(3).floor()) + "/3个燧石短斧"}],
                ["display-text", function(){return "你有" + format(player.k.燧石斧.mul(10).floor()) + "/10个燧石斧"}],
                ["display-text", function(){return "你有" + format(player.k.燧石镐.mul(10).floor()) + "/10个燧石镐"}],
                ["display-text", function(){return "你有" + format(player.k.燧石锹.mul(20).floor()) + "/20个燧石锹"}],
            ]
        },
    },
})
function canCraft(q,w,e,a,s,d,z,x,c) {
    if (player.c.qs == q && player.c.ws == w && player.c.es == e && player.c.as == a && player.c.ss == s && player.c.ds == d && player.c.zs == z && player.c.xs == x && player.c.cs == c) {
        return true
    } else {
        return false
    }
}
function craft(q,w,e,a,s,d,z,x,c,doneStStr) {
    if (player.c.qs == q && player.c.ws == w && player.c.es == e && player.c.as == a && player.c.ss == s && player.c.ds == d && player.c.zs == z && player.c.xs == x && player.c.cs == c) {
        player.c.willMake = doneStStr
    } else if (!canCraft("草","草","无","草","无","无","无","无","无") && !canCraft("沙砾","沙砾","无","沙砾","无","无","无","无","无") && !canCraft("燧石碎片","燧石碎片","无","燧石碎片","燧石碎片","无","无","无","无") && !canCraft("木棍","燧石","无","木棍","纤维绳","无","无","无","无") && !canCraft("原木","无","无","无","无","无","无","无","无") && !canCraft("木板","无","无","木板","无","无","无","无","无") && !canCraft("无","燧石","燧石","无","木棍","燧石","无","木棍","无") && !canCraft("燧石","燧石","燧石","无","木棍","无","无","木棍","无") && !canCraft("无","燧石","无","无","木棍","无","无","木棍","无")) {
        player.c.willMake = "无"
    }
}
function canPut(v) {
    if (v.gte(1) || v == "no") {
        return 1
    } else {
        return 0
    }
}
function strToVar(str) {
    if (str == "无" || str == "删除") {
        return "no"
    } else if (str == "原木") {
        return player.k.原木
    } else if (str == "木板") {
        return player.k.木板
    } else if (str == "木棍") {
        return player.k.木棍
    } else if (str == "草") {
        return player.k.草
    } else if (str == "纤维绳") {
        return player.k.纤维绳
    } else if (str == "沙砾") {
        return player.k.沙砾
    } else if (str == "燧石碎片") {
        return player.k.燧石碎片
    } else if (str == "燧石") {
        return player.k.燧石
    } else if (str == "燧石短斧") {
        return player.k.燧石短斧
    }
}
function thingAdd(str,num) {
    if (str == "原木") {
        player.k.原木 = player.k.原木.add(num)
    } else if (str == "木板") {
        player.k.木板 = player.k.木板.add(num)
    } else if (str == "木棍") {
        player.k.木棍 = player.k.木棍.add(num)
    } else if (str == "草") {
        player.k.草 = player.k.草.add(num)
    } else if (str == "纤维绳") {
        player.k.纤维绳 = player.k.纤维绳.add(num)
    } else if (str == "沙砾") {
        player.k.沙砾 = player.k.沙砾.add(num)
    } else if (str == "燧石碎片") {
        player.k.燧石碎片 = player.k.燧石碎片.add(num)
    } else if (str == "燧石") {
        player.k.燧石 = player.k.燧石.add(num)
    } else if (str == "燧石短斧") {
        player.k.燧石短斧 = player.k.燧石短斧.add(num)
    } else if (str == "燧石斧") {
        player.k.燧石斧 = player.k.燧石斧.add(num)
    } else if (str == "燧石镐") {
        player.k.燧石镐 = player.k.燧石镐.add(num)
    } else if (str == "燧石锹") {
        player.k.燧石锹 = player.k.燧石锹.add(num)
    }
}
function thingAss(str,val) {
    if (str == "原木") {
        player.k.原木 = val
    } else if (str == "木板") {
        player.k.木板 = val
    } else if (str == "木棍") {
        player.k.木棍 = val
    } else if (str == "草") {
        player.k.草 = val
    } else if (str == "纤维绳") {
        player.k.纤维绳 = val
    } else if (str == "沙砾") {
        player.k.沙砾 = val
    } else if (str == "燧石碎片") {
        player.k.燧石碎片 = val
    } else if (str == "燧石") {
        player.k.燧石 = val
    } else if (str == "燧石短斧") {
        player.k.燧石短斧 = val
    } else if (str == "燧石斧") {
        player.k.燧石斧 = val
    } else if (str == "燧石镐") {
        player.k.燧石镐 = val
    } else if (str == "燧石锹") {
        player.k.燧石锹 = val
    }
}
function posAss(pos,val) {
    if (pos == "q") {
        player.c.qs = val
    } else if (pos == "w") {
        player.c.ws = val
    } else if (pos == "e") {
        player.c.es = val
    } else if (pos == "a") {
        player.c.as = val
    } else if (pos == "s") {
        player.c.ss = val
    } else if (pos == "d") {
        player.c.ds = val
    } else if (pos == "z") {
        player.c.zs = val
    } else if (pos == "x") {
        player.c.xs = val
    } else if (pos == "c") {
        player.c.cs = val
    }
}

function put(pos,pos2) {//pos:player.c. qs/ws/es……
    var pv = strToVar(pos)
    var nv = strToVar(player.c.nowst)
    if (nv == "no") {
        if (pv != "no") {
            thingAdd(pos,1)
            posAss(pos2,"无")
        }
    } else if (nv.gte(1)) {
        posAss(pos2,player.c.nowst)
        thingAdd(player.c.nowst,-1)
        if (pv != "no") {
            thingAdd(pos,1)
        }
    }
}


addLayer("c", {
    name: "craft", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "合成", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		//points: new OmegaNum(0),

        qs:"无",
        ws:"无",
        es:"无",
        as:"无",
        ss:"无",
        ds:"无",
        zs:"无",
        xs:"无",
        cs:"无",
        nowst:"删除",
        willMake:"无",
    }},
    color: "#DDFFDD",
    resource: "???", // Name of prestige currency
    //type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        craft("草","草","无","草","无","无","无","无","无","纤维绳")
        craft("沙砾","沙砾","无","沙砾","无","无","无","无","无","燧石碎片")
        craft("燧石碎片","燧石碎片","无","燧石碎片","燧石碎片","无","无","无","无","燧石")
        craft("木棍","燧石","无","木棍","纤维绳","无","无","无","无","燧石短斧")
        if (player.wb.points.gte(1)) {
            craft("原木","无","无","无","无","无","无","无","无","木板")
            craft("木板","无","无","木板","无","无","无","无","无","木棍")
            craft("无","燧石","燧石","无","木棍","燧石","无","木棍","无","燧石斧")
            craft("燧石","燧石","燧石","无","木棍","无","无","木棍","无","燧石镐")
            craft("无","燧石","无","无","木棍","无","无","木棍","无","燧石锹")
        }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new OmegaNum(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
    //layerShown(){return player.v.total.gte(1)},
    clickables: {
        11: {
            canClick(){return true},
            display() {return player.c.qs},
            onClick(){
                put(player.c.qs,"q")
            },
        },
        12: {
            canClick(){return true},
            display() {return player.c.ws},
            onClick(){
                put(player.c.ws,"w")
            },
        },
        13: {
            canClick(){return true},
            display() {return player.c.es},
            onClick(){
                put(player.c.es,"e")
            },
        },
        14: {
            canClick(){return false},
            display() {return ""},
            onClick(){},
        },
        15: {
            canClick(){return false},
            display() {return ""},
            onClick(){},
        },
        21: {
            canClick(){return true},
            display() {return player.c.as},
            onClick(){
                put(player.c.as,"a")
            },
        },
        22: {
            canClick(){return true},
            display() {return player.c.ss},
            onClick(){
                put(player.c.ss,"s")
            },
        },
        23: {
            canClick(){return true},
            display() {return player.c.ds},
            onClick(){
                put(player.c.ds,"d")
            },
        },
        24: {
            canClick(){return false},
            display() {return "合成<br>-->"},
            onClick(){},
        },
        25: {
            canClick(){return true},
            display() {return player.c.willMake},
            onClick(){
                if (player.c.willMake == "木板" || player.c.willMake == "木棍") {
                    num = 4
                } else {
                    num = 1
                }
                thingAdd(player.c.willMake,num)
                if (player.c.willMake != "无") {
                    player.c.qs = "无"
                    player.c.ws = "无"
                    player.c.es = "无"
                    player.c.as = "无"
                    player.c.ss = "无"
                    player.c.ds = "无"
                    player.c.zs = "无"
                    player.c.xs = "无"
                    player.c.cs = "无"
                }
            },
        },
        31: {
            canClick(){return true},
            display() {return player.c.zs},
            onClick(){
                put(player.c.zs,"z")
            },
        },
        32: {
            canClick(){return true},
            display() {return player.c.xs},
            onClick(){
                put(player.c.xs,"x")
            },
        },
        33: {
            canClick(){return true},
            display() {return player.c.cs},
            onClick(){
                put(player.c.cs,"c")
            },
        },
        34: {
            canClick(){return false},
            display() {return ""},
            onClick(){},
        },
        35: {
            canClick(){return false},
            display() {return ""},
            onClick(){},
        },
        41: {
            canClick(){return false},
            display() {return "你当前选择" + player.c.nowst},
            onClick(){

            },
        },
        42: {
            canClick(){return false},
            display() {return ""},
            onClick(){

            },
        },
        43: {
            canClick(){return false},
            display() {return ""},
            onClick(){

            },
        },
        44: {
            canClick(){return false},
            display() {return ""},
            onClick(){

            },
        },
        45: {
            canClick(){return false},
            display() {return ""},
            onClick(){

            },
        },
        51: {
            canClick(){return true},
            display() {return "点击选择删除"},
            onClick(){
                player.c.nowst = "删除"
            },
        },
        52: {
            canClick(){return true},
            display() {return "你有" + format(player.k.原木) + "个原木<br>点击选择原木"},
            onClick(){
                player.c.nowst = "原木"
            },
        },
        53: {
            canClick(){return true},
            display() {return "你有" + format(player.k.木板) + "个木板<br>点击选择木板"},
            onClick(){
                player.c.nowst = "木板"
            },
        },
        54: {
            canClick(){return true},
            display() {return "你有" + format(player.k.木棍) + "个木棍<br>点击选择木棍"},
            onClick() {
                player.c.nowst = "木棍"
            },
        },
        55: {
            canClick(){return true},
            display() {return "你有" + format(player.k.草) + "个草<br>点击选择草"},
            onClick(){
                player.c.nowst = "草"
            },
        },
        61: {
            canClick(){return true},
            display() {return "你有" + format(player.k.纤维绳) + "个纤维绳<br>点击选择纤维绳"},
            onClick(){
                player.c.nowst = "纤维绳"
            }
        },
        62: {
            canClick(){return true},
            display() {return "你有" + format(player.k.沙砾) + "个沙砾<br>点击选择沙砾"},
            onClick(){
                player.c.nowst = "沙砾"
            },
        },
        63: {
            canClick(){return true},
            display() {return "你有" + format(player.k.燧石碎片) + "个燧石碎片<br>点击选择燧石碎片"},
            onClick(){
                player.c.nowst = "燧石碎片"
            },
        },
        64: {
            canClick(){return true},
            display() {return "你有" + format(player.k.燧石) + "个燧石<br>点击选择燧石"},
            onClick(){
                player.c.nowst = "燧石"
            },
        },  
        65: {
            canClick(){return true},
            //display() {return "你有" + player.k.工作台 + "个工作台<br>点击选择工作台"},
            onClick(){

            },
        },
    },
    //update(diff){
    //}
})
addLayer("wb", {
    name: "workbench", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "<h6>工作台</h6>", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3,
    startData() { return {
        unlocked: true,
        points:new OmegaNum(0)
    }},
    color: "#DDAA66",
    resource: "工作台等级",
    row:1,
    getMult() {

    },
    clickables: {
        11: {
            canClick() {
                if (player.wb.points == 0) {
                    return player.k.原木.gte(1) && player.k.燧石.gte(1) && player.k.木棍.gte(1) && player.k.纤维绳.gte(1)
                } else if (player.wb.points == 1) {
                    return false
                }
            },
            display() {
                if (player.wb.points == 0) {
                    return "升级为“燧石工作台”<br>解锁“木板”、“木棍”、“燧石斧”、“燧石镐”、“燧石锹”的配方<br>花费：1原木，1燧石，1木棍，1纤维绳"
                } else if (player.wb.points == 1) {
                    return "咕咕咕"
                }
            },
            onClick() {
                if (player.wb.points == 0) {
                    player.k.原木 = player.k.原木.sub(1)
                    player.k.燧石 = player.k.燧石.sub(1)
                    player.k.木棍 = player.k.木棍.sub(1)
                    player.k.纤维绳 = player.k.纤维绳.sub(1)
                    player.wb.points = new OmegaNum(1)
                } else if (player.wb.points == 1) {
                    
                }
            },
            style() {return {"width": "240px", "height": "240px"}},
        },
    },
})

addLayer("w", {
    name: "wood", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "原木", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    startData() { return {
        unlocked: true,
        points:new OmegaNum(0),

        using:"空手"
    }},
    color: "#FFAA66",
    resource: "原木",
    row:2,
    getMult() {
        player.w.points = player.k.原木
    },
    clickables: {
        11: {
            canClick() {
                if (player.w.using == "燧石短斧" && player.k.燧石短斧.gt(0)) {
                    return player.points.gte(20)
                } else if (player.w.using == "燧石斧" && player.k.燧石斧.gt(0)) {
                    return player.points.gte(15)
                } else {
                    return false
                }
            },
            display() {
                if (player.w.using == "燧石短斧" && player.k.燧石短斧.gt(0)) {
                    return "重置你的时间获得1个原木(需要20时间)"
                } else if (player.w.using == "燧石斧" && player.k.燧石斧.gt(0)) {
                    return "重置你的时间获得1个原木(需要15时间)"
                } else {
                    return "重置你的时间获得1个原木(空手不能挖木头)"
                }
            },
            onClick() {
                player.points = new OmegaNum(0)
                if (player.w.using == "燧石短斧") {
                    player.k.燧石短斧 = player.k.燧石短斧.sub(new OmegaNum(1).div(3))
                    if (player.k.燧石短斧.lt(0.001)) {
                        player.k.燧石短斧 = new OmegaNum(0)
                    }
                } else if (player.w.using == "燧石斧") {
                    player.k.燧石斧 = player.k.燧石斧.sub(new OmegaNum(1).div(10))
                    if (player.k.燧石斧.lt(0.001)) {
                        player.k.燧石斧 = new OmegaNum(0)
                    }
                }
                player.k.原木 = player.k.原木.add(1)
            },
            style() {
                return {"width": "180px", "height": "120px"}
            },
        },
        21: {
            canClick() {return false},
            display() {return "你正在使用" + player.w.using},
            style() {
                return {"width": "240px", "height": "120px"}
            }
        },
        31: {
            canClick() {return true},
            display() {return "点击使用空手"},
            onClick() {
                player.w.using = "空手"
            }
        },
        32: {
            canClick() {return true},
            display() {return "点击使用燧石短斧"},
            onClick() {
                player.w.using = "燧石短斧"
            }
        },
        33: {
            canClick() {return true},
            display() {return "点击使用燧石斧"},
            onClick() {
                player.w.using = "燧石斧"
            }
        },
    },
})
addLayer("ws", {
    name: "woodStick", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "木棍", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    startData() { return {
        unlocked: true,
        points:new OmegaNum(0)
    }},
    color: "#DDAA66",
    resource: "木棍",
    row:2,
    getMult() {
        player.ws.points = player.k.木棍
    },
    clickables: {
        11: {
            canClick() {return player.points.gte(30)},
            display() {return "重置你的时间获得1个木棍(需要30时间)(你总不能每挖一个树叶就掉一个木棍吧)"},
            onClick() {
                player.points = new OmegaNum(0)
                player.k.木棍 = player.k.木棍.add(1)
            },
            style() {
                return {"width": "180px", "height": "120px"}
            },
        },
    },
})
addLayer("gr", {
    name: "grass", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "草", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    startData() { return {
        unlocked: true,
        points:new OmegaNum(0)
    }},
    color: "#88FF88",
    resource: "草",
    row:2,
    getMult() {
        player.gr.points = player.k.草
    },
    clickables: {
        11: {
            canClick() {return player.points.gte(10)},
            display() {return "重置你的时间获得1个草(需要10时间)"},
            onClick() {
                player.points = new OmegaNum(0)
                player.k.草 = player.k.草.add(1)
            },
            style() {
                return {"width": "180px", "height": "120px"}
            },
        },
    },
})
addLayer("grv", {
    name: "gravel", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "沙砾", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3,
    startData() { return {
        unlocked: true,
        points:new OmegaNum(0),
        using:"空手",
    }},
    color: "#666666",
    resource: "沙砾",
    row:2,
    getMult() {
        player.grv.points = player.k.沙砾
    },
    clickables: {
        11: {
            canClick() {
                if (player.grv.using == "燧石锹" && player.k.燧石锹.gt(0)) {
                    return player.points.gte(10)
                } else {
                    return player.points.gte(20)
                }
            },
            display() {
                if (player.grv.using == "燧石锹" && player.k.燧石锹.gt(0)) {
                    return "重置你的时间获得1个沙砾(需要10时间)"
                } else {
                    return "重置你的时间获得1个沙砾(需要20时间)"
                }
            },
            onClick() {
                player.points = new OmegaNum(0)
                if (player.grv.using == "燧石锹") {
                    player.k.燧石锹 = player.k.燧石锹.sub(new OmegaNum(1).div(20))
                    if (player.k.燧石锹.lt(0.001)) {
                        player.k.燧石锹 = new OmegaNum(0)
                    }
                } //else if (player.grv.using == "燧石斧") {
                  //  player.k.燧石斧 = player.k.燧石斧.sub(new OmegaNum(1).div(10))
                 //   if (player.k.燧石斧.lt(0.001)) {
                 //        player.k.燧石斧 = new OmegaNum(0)
                //    }
                //}
                player.k.沙砾 = player.k.沙砾.add(1)
            },
            style() {
                return {"width": "180px", "height": "120px"}
            },
        },
        21: {
            canClick() {return false},
            display() {return "你正在使用" + player.grv.using},
            style() {
                return {"width": "240px", "height": "120px"}
            }
        },
        31: {
            canClick() {return true},
            display() {return "点击使用空手"},
            onClick() {
                player.grv.using = "空手"
            }
        },
        32: {
            canClick() {return true},
            display() {return "点击使用燧石锹"},
            onClick() {
                player.grv.using = "燧石锹"
            }
        },
        /*33: {
            canClick() {return true},
            display() {return "点击使用燧石斧"},
            onClick() {
                player.w.using = "燧石斧"
            }
        },*/
    },
})
