const axios = require('axios');  // Import axios for making HTTP requests
const express = require('express');
const path = require('path');
const app = express();

// Glitch projects ke URLs
const URLs = [
  "https://magenta-leeward-milkshake.glitch.me",
  "https://rare-invented-olive.glitch.me",
  "https://brazen-familiar-yumberry.glitch.me",
  "https://hivajoy-music.glitch.me",
  "https://panoramic-volcano-receipt.glitch.me",
  "https://heartbreaking-puzzle-ounce.glitch.me",
  "https://terabox-play.glitch.me",
  "https://thread-pepper-forsythia.glitch.me",
  "https://veil-violet-pigment.glitch.me",
  "https://nebula-butter-sedum.glitch.me",
  "https://boiled-stealth-liquid.glitch.me"
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
  
// Express server for webhook or other purposes
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});