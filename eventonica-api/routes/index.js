var express = require('express');
var router = express.Router();

var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://localhost:5432/eventonica')
// function addUser(data) {
//   // note: this returns a Promise
//   console.log(data);
//   return db.one('INSERT INTO users (name, email) values (\$1, \$2) RETURNING id, name, email', [data.name, data.email]);
// }
db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Our express app is working properly' });
  // db.any('SELECT * FROM users ')
  // .then(data => console.log(data))
});

// router.post('/users', (req, res) => {
//   addUser(req.body).then(() => res.sendStatus(204));
// });

module.exports = router;
