const express = require("express");
const app = express();
const connect = require("./config/db");
const bodyparser = require("body-parser");
const router = require("./routes/index"); // Assuming this is where your main router is defined

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Mount your main router
app.use("/api", router);

app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("mongodb connected");
});
