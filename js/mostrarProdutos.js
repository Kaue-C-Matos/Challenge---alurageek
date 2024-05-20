import { requisicoes } from "./requisicoes.js";

const lista = document.querySelector("[data-container]")

export default function constroiCard(nome, valor, imagem){
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `<img src=${imagem} alt="Imagem do(a) ${nome}" class="img_produto">
    <div class="card-container--info">
        <p>${nome}</p>
        <div class="card-container--value">
            <p>${valor}</p>
            <i class="fa-solid fa-trash"></i>
        </div>
    </div>`

    return card
}

async function listaCards(){
    try {
        const listaDB = await requisicoes.conectaDB()
        listaDB.forEach(elemento =>
            lista.appendChild(constroiCard(elemento.nome, elemento.valor, elemento.imagem)),
        )
    } catch {
        lista.innerHTML = `<h3>Não foi possível carregar a lista de produtos</h3>`
    }
}

listaCards();