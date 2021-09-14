var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://localhost:5432/eventonica');

// const marlin = { name: "Marlin", email: "marlin@gmail.com", userId:"1" };
// const nemo = { name: "Nemo", email: "nemo@gmail.com", userId: "2" };
// const dory = { name: "Dory", email: "dory@gmail.com" , userId: "3"};
// const users =[marlin, nemo, dory];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

function addUser(data) {
  // note: this returns a Promise
  console.log(data);
  return db.one('INSERT INTO users (name, email) values (\$1, \$2) RETURNING id, name, email', [data.name, data.email]);
}
router.post('/users', (req, res) => {
  
});

router.post('/', function(req, res, next) {
  addUser(req.body).then(async() => {
    const users = await db.any('SELECT * FROM users');
    res.json(users);
  });
})
module.exports = router;
