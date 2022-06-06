const { db } = require("./src/config/config");
const server = require("./src/app");

db.sync()
  .then(() => {
    server.listen(5000, console.log("listening to ,", 5000));
  })
  .catch((err) => console.error("database error ", err));
