const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(process.env.PORT || 8080, function () {
  console.log('server started');
});