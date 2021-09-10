var express = require('express');
var router = express.Router();
// var pgp = require('pg-promise')(/* options */)
// var db = pgp('postgres://localhost:5432/eventonica');

const marlin = { name: "Marlin", email: "marlin@gmail.com", userId:"1" };
const nemo = { name: "Nemo", email: "nemo@gmail.com", userId: "2" };
const dory = { name: "Dory", email: "dory@gmail.com" , userId: "3"};
const users =[marlin, nemo, dory];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});
// router.post('/', function(req, res, next) {
//   // db.addUser(req.body).then(() => res.sendStatus(204));
//   return db.one('INSERT INTO users (name) values (\$1) RETURNING id, name', [data.name]);
// });

module.exports = router;
