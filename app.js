const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const trashTalkGenerator = require('./generator');

const port = 3000;

const app = express();

const targetsList = [
  {
    id: '1',
    name: 'engineer',
    image: '/assets/angry-developer.jpg'
  },
  {
    id: '2',
    name: 'designer',
    image: '/assets/angry-designer.jpg'
  },
  {
    id: '3',
    name: 'entrepreneur',
    image: '/assets/angry-founder.jpg'
  },
]


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  // console.log("Ready");
  // console.log('req', req.body);
  res.render('index', { targets: targetsList });
})

let collection = [];

app.post('/', (req, res) => {
  const options = req.body;
  const trashMessage = trashTalkGenerator(req.body.target);

  collection = targetsList.filter((target) => {
    if (target.name === options.target) {
      target.checked = true;
      return true;
    }
  })

  console.log(collection);

  res.render('index', { targets: targetsList, trashMessage: trashMessage, options, collection });

})

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
})