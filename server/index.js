const express = require('express')
const cors = require('cors')
require('dotenv').config();
const app = express();
const port = 4400
app.use(cors());
app.use(express.json())


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




module.exports = app;
