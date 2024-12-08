const express = require('express');
const provinces = require('./json/provinces.json'); 

const app = express();
const port = 3000;

app.get('/provinces', (req, res) => {
  res.json(provinces);
});

app.get('/provinces/:id', (req, res) => {
  const { id } = req.params;
  const region = provinces.find(region => region.id === id);
  if (region) {
    res.json(region);
  } else {
    res.status(404).json({ message: 'Region not found' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});