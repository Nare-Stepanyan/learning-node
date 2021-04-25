const fs = require("fs");

fs.readFile("./created.txt", "utf-8", (err, text) => {
  if (err) {
    console.log(err.message);
  }
  console.log(text);
});
