const express = require('express');
const router = express.Router();
const fs = require('fs'); // Importe o módulo 'fs' para ler o arquivo JSON

// Rota para obter a lista de contatos
router.get('/contacts', (req, res) => {
  // Leia o arquivo JSON de contatos
  fs.readFile('./rotas/contacts.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao ler o arquivo de contatos' });
    }

    // Parse o conteúdo do arquivo JSON para um objeto JavaScript
    const contacts = JSON.parse(data);

    // Retorna a lista de contatos em formato JSON
    res.json(contacts);
  });
});

module.exports = router;
