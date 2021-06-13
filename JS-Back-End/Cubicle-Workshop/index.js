const express = require('express');

const port = process.env.PORT || 3000;
const routes = require('./routes')
const app = express();

require('./config/setupExpress')(app);
require('./config/setupMongoose')();

app.use(routes);



app.listen(port, () => console.log(`Server starting on port ${port}...\nhttp://localhost:${port}/products`))