const express = require('express');
const app = express();

const logar = require('./verificarLogin')

app.get('/', (req, res) => {
    const dados = req.query
    let mensagem = logar.verificaLogin(dados.login, dados.senha)

    res.status(200).json({mensagem: mensagem})
});

app.listen(8080, () => {
    console.log('Servidor node iniciado');
})