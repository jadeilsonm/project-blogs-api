const express = require('express');
const handleError = require('./middlewares/hadleError');

// ...

const app = express();

app.use(express.json());

app.use(require('./router'));

app.use(handleError);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
