const express = require('express');
const bodyParser = require('body-parser');

const {
  getTopics,
  getTopic,
  addNewTopic,
  addNewOpinion,
} = require('./data');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.redirect('/topics');
});

app.get('/topics', async function (req, res) {
  const topics = await getTopics();
});

app.get('/topics/:id', async function (req, res) {
  const topicId = req.params.id;
  const topic = await getTopic(topicId);
});

app.post('/topic', async function (req, res) {
  const userData = req.body;
  await addNewTopic(userData);
});

app.listen(3000);