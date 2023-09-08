const express = require('express');
const router = express.Router();
const db = require('../db/DbContacts.db'); // Importe o objeto db do seu arquivo de banco de dados
 

// rota para adicionar um contato ao banco de dados
router.post('/contacts', (req, res)=>{
   
    const {name, phoneNumber} = req.body;

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
  

module.exports = router;
