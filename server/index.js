const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(port, () => console.log(`Todo List listening on port ${port}!`))

