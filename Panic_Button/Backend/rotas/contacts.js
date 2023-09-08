const express = require('express');
const router = express.Router();
const fs = require('fs'); // Importe o módulo 'fs' para ler o arquivo JSON
const contacts = require('./contacts.json') //array criado para teste 


router.post('/contacts', (req, res)=>{
    //receba os dados do coropo da solicitaçao  (req.body)
    const newContact = req.body;

    // Valide e insira os dados no banco de dados (ou lista)
    // Por enquanto, vamos apenas adicionar o novo contato ao array
    contacts.push(newContact);

    // Retorne a resposta adequada, por exemplo, um objeto JSON com o novo contato
    res.status(201).json(newContact);
});




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


router.delete('/contacts/:id', (req, res)=>{
    const contactId = req.params.id;

    // Encontre o índice do contato a ser excluído no array
    const contactIndex = contacts.findIndex(contact => contact.id === contactId);

    if (contactIndex === 0){
     // Se o contato não for encontrado, retorne um status 404 (Não Encontrado)
     res.status(404).json({error: 'Contato nao encontrado'});
    } else {
    // senao remova o contato do array
      contacts.splice(contactIndex, 1);

    res.status(204).send();
    }
});

module.exports = router;
