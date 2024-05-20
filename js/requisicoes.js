async function conectaDB(){
    const conexao = await fetch("http://localhost:3000/produtos")
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

export const requisicoes = {
    conectaDB
}