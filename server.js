const express = require('express');
const app = express();
const port = 3000;

app.get('/serverTiming', require('./serverRoutes/serverTiming'));
app.get('/restApi', require('./serverRoutes/restApi'));

app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
