const express = require('express');
const scan = require('./scan');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/scan', async (req, res) => {
  // Receive the clothing item data from the request
  const clothingItem = req.body.clothing_item;

  await scan(clothingItem, res);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
