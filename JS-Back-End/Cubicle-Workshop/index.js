const express = require('express');

const config = require('./config/config');
const routes = require('./routes')
const app = express();

require('./config/setupExpress')(app)

app.use(routes);



app.listen(config.PORT, () => console.log(`Server starting on port ${config.PORT}...\nhttp://localhost:${config.PORT}/products`))