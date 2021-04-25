const fs = require("fs");

const files = fs.readdirSync("./lib");

fs.readdir("./lib", (err, files) => {
  if (err) {
    throw err;
  }
  console.log(files);
});

//console.log(files);
