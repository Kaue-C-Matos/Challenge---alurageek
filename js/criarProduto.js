import { requisicoes } from "./requisicoes.js";

const formulario = document.querySelector("[data-formulario]")
const valorInput = document.querySelector("[data-valor]");

function formatarValor(evento){
    let valor = evento.target.value
    valor = valor.replace(/[^0-9.,]/g, "")
    valor.replace(",", ".")

    const valorFormatado = parseFloat(valor)
    if (!isNaN(valorFormatado)) {
        evento.target.value = valorFormatado.toFixed(2);
    } else{
        valor.setCustomValidity("O preço digitado é inválido")
    }
    
}

valorInput.addEventListener("blur", formatarValor());
valorInput.addEventListener("input", formatarValor());

async function criarProduto(evento){
    evento.preventDefault()

    const nome = document.querySelector("[data-nome]").value;
    const valor = valorInput.value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        await requisicoes.criarProdutos(nome, valor, imagem)
        console.log(nome)
    } catch(err){
        alert(err)
    }
}

formulario.addEventListener("submit", evento =>criarProduto(evento))

const botaoLimpar = document.querySelector(".botao-limpar")

botaoLimpar.addEventListener("click", ()=> {
    document.querySelector("[data-nome]").value = "";
    document.querySelector("[data-valor]").value = "";
    document.querySelector("[data-imagem]").value = "";
})