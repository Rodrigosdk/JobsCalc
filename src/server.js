const express = require('express');
const router = require('./router');

const app = express();

app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(router);

app.listen(3333, () => console.log("server on http://localhost:3333"));