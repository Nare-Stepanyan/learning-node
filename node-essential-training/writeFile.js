const fs = require("fs");

fs.writeFile("./created.txt", "Hello world!!!", (err) => {
  if (err) {
    throw err;
  }
  console.log("file created");
});
