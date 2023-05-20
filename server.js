// Node.js server-side script (server.js)
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = 'your_openai_api_key_here';

app.post('/generate-image', async (req, res) => {
  try {
    const url = "https://api.openai.com/v1/images/generations";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY,
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
