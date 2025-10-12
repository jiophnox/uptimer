const axios = require('axios');  // Import axios for making HTTP requests
const express = require('express');
const path = require('path');
const app = express();

// Glitch projects ke URLs
const URLs = [
  "https://hivajoy.onrender.com",
  "https://hivabytesweb.onrender.com",
  "https://hjuptimer.onrender.com",
  "https://hivajoy-file-to-link-bot-8rpf.onrender.com",
  "https://terabox-play.onrender.com",
  "https://og-terabox-player.onrender.com",
  "https://astrologerbot.onrender.com"
];

const TIMEOUT = 30000;

async function wakeAndPing(URL) {
  try {
    // Pehle URL ko access karo taki project wake ho
    console.log(`🌙 Waking up ${URL}...`);
    await axios.get(URL, { timeout: TIMEOUT });

    // Ab actual ping bhejo
    console.log(`✅ Pinged ${URL} at ${new Date().toLocaleTimeString()}`);
  } catch (error) {
    console.error(`❌ Error waking/pinging ${URL}: ${error.message}`);
  }
}

async function pingAll() {
  for (const URL of URLs) {
    // Ensure each ping is awaited before continuing
    await wakeAndPing(URL);  // Har URL ke liye wake + ping
  }
}

// Har 3 minute me ping karega
setInterval(pingAll, 300000);

// Serve the index.html file directly when the root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/web', (req, res) => {
  res.send(`Hello Server running`);
});
// Express server for webhook or other purposes
app.listen(8080, () => {
  console.log('Server is running on port 3000');
});
