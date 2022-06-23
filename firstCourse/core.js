const path = require("path");

const dirUploads = path.join(__dirname, "www", "files", "uploads");
console.log(dirUploads)

// const util = require("util")
const { log } = require("util");
// util.log(path.basename(__filename));
// util.log("^ name of the current file");
log(path.basename(__filename))




// const v8 = require("v8")

// log(v8.getHeapStatistics())