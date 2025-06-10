require('dotenv').config(); 

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('static'));

app
   .get('/', onHome) 
   .get('/sonicbranding', onSonicBranding)
   .get('/festival', onFestival)
   .get('/deliverables', onDeliverables)

   .listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

function onHome(req, res) {
  res.render('index'); //rendert views/index.ejs
}

function onSonicBranding(req, res) {
  res.render('sonicbranding')
}

function onFestival(req, res) {
  res.render('festival')
}

function onDeliverables(req, res) {
  res.send('deliverables')
}