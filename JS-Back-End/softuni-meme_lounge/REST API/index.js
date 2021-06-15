const express = require('express');

const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');


const app = express();

require('./config/setupExpress')(app);
require('./config/setupMongoose')();

app.use('/api', routes);
app.use(errorHandler);


app.listen(5000, console.log.bind(console, 'Server is listening on port 5000'));
