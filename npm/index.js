// const scriptModule = require("./script")
// import {sayHello as sayHi, user} from "./script.js"

// import * as ScriptModule from "./script.js"
// import lodash from "lodash"
// import * as scripts from "./scripts/index.js"


console.log("hello");
// import "./script.js"
import("./script.js").then ((res) => console.log(res))

const result = await import("./script.js")


// console.log("Hello word!");

// // sayHi()
// // console.log(user);

// ScriptModule.sayHi()

// const arr = []
// const copyArr = lodash.cloneDeep(arr)

// copyArr.push("1")
// console.log(arr);

// scripts.one()
// scripts.two()