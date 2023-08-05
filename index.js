const path = require('path');

const express = require('express');
const app = express();
const port=3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // console.log(req)
    res.render('index');
  });

app.get('/converter', (req, res) => {
// console.log(req)
res.redirect('/');
});

app.get('*',(req,res)=>{
res.render('error')
})

app.listen(port);