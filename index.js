const dados = require("./dados")

const express = require("express")
const app = express()

function buscarNome(nome) {
    return dados.colecaoUf.filter(item => item.nome.toLowerCase().includes(nome.toLowerCase()))
}

app.get('/ufs', (req, res) => {
    const dado = req.query
    let resultado = dado.estado ? buscarNome(dado.estado) : dados.colecaoUf
    
    resultado.length > 0 ? res.json(resultado) : res.status(404).json({mensagem: "Nenhum estado encontrado"})
})

app.get('/ufs/:iduf', (req, res) => {
    const iduf = parseInt(req.params.iduf)
    const uf = dados.colecaoUf.find(item => item.id == iduf)

    uf ? res.json(uf) : res.status(404).json({mensagem: "Nenhum estado encontrado"})
})

app.listen(8080, () => {
    console.log("Servidor iniciado.")
})