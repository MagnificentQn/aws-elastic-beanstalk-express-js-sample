const express = require('express');
const app = express();
const port = 8080;
me is mentionedi
app.get('/', (req, res) => res.send('my congratulations is here amen Lord!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

