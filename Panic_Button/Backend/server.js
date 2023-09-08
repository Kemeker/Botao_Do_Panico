const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Porta do servidor

// Middleware para analisar dados JSON
app.use(bodyParser.json());

// Defina as rotas da API aqui

app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor do Panic Button!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
