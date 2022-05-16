const express = require('express');
// const Agent = require('./models/exampleModel')
const agentRouters = require('./routers/exampleRoutes')
const app = express();
require('dotenv').config();
const sequelize = require('./db/db');

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/api/v1/agent', agentRouters)

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(PORT, () => console.log(`running... http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
