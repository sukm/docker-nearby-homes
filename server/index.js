const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const homes = require('./routes/api/homes');

const app = express();
const port = process.env.PORT || 3006;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

// Use Router
app.use('/nearbyHomes', homes);
app.use('/api/homes', homes);

app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
