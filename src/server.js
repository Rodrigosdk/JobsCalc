const express = require('express');

const router =  require('./router/home');

const app = express();

app.use('/', router);

app.listen(3333,()=>console.log("sever on http://localhost:3333"));