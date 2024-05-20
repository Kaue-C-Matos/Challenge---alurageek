async function conectaDB(){
    const conexao = await fetch("http://localhost:3000/produtos")
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function criarProdutos(nome, valor, imagem){
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem
        })
    })

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

export const requisicoes = {
    conectaDB, criarProdutos
}