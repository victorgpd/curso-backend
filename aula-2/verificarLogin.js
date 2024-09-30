function verificaLogin(login, senha) {
    let mensagem = ""

    if (login == "Victor" && senha == "220721") {
        mensagem = "Logado com sucesso!"
    } else {
        mensagem = "Falha no login!"
    }

    return mensagem
}

exports.verificaLogin = verificaLogin