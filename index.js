const express = require('express');
const app = express();
const {port} = require('./config')
const apiRouter = require('./routes/api');

//db
require('./db/mongoose');

// routes


//serwer
app.use('/', apiRouter);



app.listen(port, function() {
    console.log('serwer słucha.... http://localhost:' + port);
});

