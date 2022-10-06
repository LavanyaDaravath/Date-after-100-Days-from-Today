const express = require("express");
const app = express();

var addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let date = new Date();
  let date1 = addDays(date, 100);
  response.send(
    `${date1.getDate()}/${date1.getMonth() + 1}/${date1.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
