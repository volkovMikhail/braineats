require('dotenv').config();
const express = require('express');

const port = process.env.SERVER_PORT || process.env.PORT || 3001;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('./static'));

app.get('/', (req, res) => {
  res.end('<a href="test.html">121231231 TEST</a>');
});

app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
