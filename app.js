const express = require('express');
const app = express();
const PORT = 3000; // Tu peux changer le port si besoin

// Route de base pour la racine "/"
app.get('/', (req, res) => {
  res.send('ça marche enfin fdp');
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
