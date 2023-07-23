const express = require("express");
const app = express();
const dateFunction = require("date-fns/addDays");

const date = dateFunction(new Date(), 100);
// DD/MM/YYYY
console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
// module.exports = date;
