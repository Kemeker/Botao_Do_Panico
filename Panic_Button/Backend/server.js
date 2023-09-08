const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Porta do servidor
const contactsRoutes = require('./rotas/contacts'); //importa os arquivos de rotas



// Middleware para analisar dados JSON
app.use(bodyParser.json()); 

app.use('/api', contactsRoutes);


// Defina as rotas da API aqui

app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor do Botao de Emergencia!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
