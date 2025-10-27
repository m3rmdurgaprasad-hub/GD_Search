const express = require('express');
const fetch = require('node-fetch');
const app = express();

const PORT = process.env.PORT || 3000;
const BING_API_KEY = process.env.BING_API_KEY;
const BING_ENDPOINT = process.env.BING_ENDPOINT || 'https://api.bing.microsoft.com/v7.0/search';

app.use(express.static('public'));

app.get('/search', async (req, res) => {
  const query = req.query.q;
  const response = await fetch(`${BING_ENDPOINT}?q=${encodeURIComponent(query)}`, {
    headers: { 'Ocp-Apim-Subscription-Key': BING_API_KEY }
  });
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`gdSearch running on port ${PORT}`);
});

