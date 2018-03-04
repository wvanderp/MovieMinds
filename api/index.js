const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const api = require('./api');

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 8000;

// app.use('/', express.static('../app'));
app.use('/editor', express.static('../editor/build'));
app.use('/api', api);


app.listen(port);
console.log(`Magic happens on: localhost:${ port}`);
