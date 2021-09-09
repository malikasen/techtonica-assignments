var express = require('express');
var router = express.Router();

const marlin = { name: "Marlin", email: "marlin@gmail.com", id:"1" };
const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
const dory = { name: "Dory", email: "dory@gmail.com" , id: "3"};
const users =[marlin, nemo, dory];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
