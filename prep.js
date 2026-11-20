// Copies the school app into this folder so it is packaged inside the .exe
const fs = require("fs"), path = require("path");
fs.copyFileSync(path.join(__dirname, "..", "www", "index.html"), path.join(__dirname, "index.html"));
console.log("School app copied.");
