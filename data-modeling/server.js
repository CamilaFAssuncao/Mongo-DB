const express = require('express');
const { connectToDatabase, insertSampleData } = require('./database');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  await connectToDatabase();
  await insertSampleData();
  res.send('Database operations completed successfully');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
