const express = require('express');
const app = express();
const {port} = require('./app/config')
const apiRouter = require('./app/routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

// db
require('./app/db/mongoose');

// parsery
//Content-type: application/json
app.use(bodyParser.json());


// fix cors
app.use(cors());
// routes
app.use('/api', apiRouter);



// serwer
app.listen(port, function() {
    console.log('serwer słucha.... http://localhost:' + port);
});

