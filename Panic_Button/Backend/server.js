const express = require('express')
const app = express()
const port = 3000; // Porta do servidor
const contactsRoutes = require('./rotas/contacts'); //importa os arquivos de rotas



app.use(express.json()) // Express já traz o body-parser integrado

app.use('/api', contactsRoutes)


// Defina as rotas da API aqui

app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor do Botao de Emergencia!')
})

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
