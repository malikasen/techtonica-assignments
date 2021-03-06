var express = require('express');
var router = express.Router();
const questions = [{
  id: 1,
  title: "Independence Day was first established as a holiday by Congress in what year?",
  choices: ["1853", "1776", "1938", "1870"],
  correct: "1870"
},
{
  id: 2,
  title: "Who was the First President to live in The White House?",
  choices: ["John Adams", "Thomas Jefferson", "George Washington", " James Madison"],
  correct: "John Adams",
},
{
  id: 3,
  title: "What do the colors of the American Flag symbolize?",
  choices: ["Nothing, the Founding Fathers simply found them aesthetically pleasing.", "Red: hardiness, White: purity, Blue: perseverance", "Red: compassion, White: peace and unity, Blue: remembrance", " Red: revolution, White: stability, Blue: integrity"],
  correct: "Red: hardiness, White: purity, Blue: perseverance"
},
{
  id: 4,
  title: "Calvin Coolidge was the only U.S. President born on The Fourth f July. Three presidents, however, died on that date. Who were they?",
  choices: ["George Washington, Chester Arthur and James Monroe", "Abraham Lincoln, Thomas Jefferson and Richard Nixon", "Zachary Taylor, Martin Van Buren and Warren Harding", " John Adams, Thomas Jefferson and James Monroe"],
  correct: "John Adams, Thomas Jefferson and James Monroe"
},
{
  id: 5,
  title: 'Where did John Philip Sousa compose "The Stars and Stripes Forever", the official march of the United States?',
  choices: ["In an army bunker during the Civil War.", "In Washington, D.C., after visiting the White House for the first time.", "In his living room, after a particularly good dinner.", "On a boat, en route from a European vacation with his wife."],
  correct: "In an army bunker during the Civil War."
},
{
  id: 6,
  title: "Where was the first Fourth of July celebration with a fireworks display held?",
  choices: ["Washington, D.C.", "New York, New York", "Boston, Massachusetts", "Atlanta, Georgia"],
  correct: "Boston, Massachusetts"
},
{
  id: 7,
  title: "How does the community of Seward, Alaska celebrate the Fourth of July?",
  choices: ["They raise over 200 flags outside the courthouse.", "They host the largest picnic celebration in the United States.", "They participate in a six-mile foot race to the top of Mount Marathon.", "Children light thousands of candles in a Festival of Lights."],
  correct: "They participate in a six-mile foot race to the top of Mount Marathon.",
},
{
  id: 8,
  title: "2014 marked the 200th birthday of:",
  choices: ["The Lincoln Memorial", "The Smithsonian Institution", "The Star-Spangled Banner", "The American flag"],
  correct: "The Star-Spangled Banner"
},
{
  id: 9,
  title: "Through which national park does the Continental Divide not pass?",
  choices: ["Yellowstone", "Rocky Mountain", "Glacier", "Yosemite"],
  correct: "Yosemite"
},
{
  id: 10,
  title: "Which U.S. president was the first to appear on television?",
  choices: ["Abraham Lincoln", "Richard Nixon", "Franklin D. Roosevelt", "Ronald Reagan"],
  correct: "Franklin D. Roosevelt"
}]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/questions', function(req, res) {
  res.json(questions)
})

module.exports = router;
