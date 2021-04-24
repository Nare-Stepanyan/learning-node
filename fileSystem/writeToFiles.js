var fs = require("fs");

var data = {
  name: "Nare",
};

fs.writeFile("datas.txt", JSON.stringify(data), (err) => {
  if (err) {
    throw err;
  }
  console.log("Data has been written to file successfully.");
});
