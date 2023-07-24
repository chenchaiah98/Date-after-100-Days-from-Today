const express = require("express");
const app = express();
const dateAdds = require("date-fns/addDays");

app.get("/", (request, response) => {
  const todayDate = dateAdds(new Date(), 100);
  response.send(
    `${todayDate.getDate()}/${
      todayDate.getMonth() + 1
    }/${todayDate.getFullYear()}`
  );
});

module.exports = app;
