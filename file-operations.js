// file-operations.js
const fs = require('fs');

// Créez Welcome.txt et écrivez « Hello Node »'
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt has been saved!');

  // Lire le fichier et enregistrer le contenu
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
