const express = require('express');
const router = express.Router();
const db = require('../db/DbContacts.db'); // Importe o objeto db do seu arquivo de banco de dados
 

// rota para adicionar um contato ao banco de dados
router.post('/contacts', (req, res)=>{
   
    const {name, phoneNumber} = req.body

    db.run('INSERT INTO contacts (name, phoneNumber) VALUES (?, ?)', [name, phoneNumber], function(err) {

       if (err){
        return res.status(500).json({error: err.message});
       } 
       res.status(201).json({
        id: this.lastID,
        name,
        phoneNumber
       });
    });
});

    
// Rota para obter a lista de contatos
router.get('/contacts', (req, res) => {
    db.all('SELECT * FROM contacts', [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(rows);
    });
  });
  

  // rota para deletar contato
  router.delete('/contacts/:id', (req, res) => {
    const contactId = req.params.id;
  
    db.run('DELETE FROM contacts WHERE id = ?', contactId, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(204).send();
    });
  });

  
  // Rota para atualizar um contato
  router.put('/contacts/:id', (req, res) => {
    const { id } = req.params;
    const { name, phoneNumber } = req.body;

    // A consulta SQL para atualizar o contato
    const sql = `UPDATE contacts SET name = ?, phoneNumber = ? WHERE id = ?`;

    // Executando a consulta SQL para atualizar o contato no banco de dados
    db.run(sql, [name, phoneNumber, id], function(err) {
      if (err) {
        // Se houver erro na atualização, envia um status de erro com a mensagem
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0) {
        // Se nenhuma linha foi atualizada, significa que o contato com o ID fornecido não foi encontrado
        return res.status(404).json({ error: 'Contato não encontrado.' });
      }
      // Se tudo correu bem, retorna o contato atualizado
      res.status(200).json({ id, name, phoneNumber });
    });
});



module.exports = router;
