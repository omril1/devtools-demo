const express = require('express');
const app = express();
const port = 3000;

app.use((_req, res, next) => {
  res.header('Set-Cookie', 'my_cookie=HelloWorld; Path=/; Expires=Wed, 15 Mar 2017 15:59:59 GMT');
  next();
});
app.get('/serverTiming', require('./serverRoutes/serverTiming'));
app.get('/restApi', require('./serverRoutes/restApi'));

app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
