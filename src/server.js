const express = require('express');
const { use } = require('./router');
const router = require('./router');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}))

app.use(express.static('public'));
app.use(router);

app.listen(3333, () => console.log("server on http://localhost:3333"));