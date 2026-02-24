'use strict'

function adicionarProdutos(){
    const produto = document.getElementById('produto')
    const lista = document.getElementById('lista')

    const span = document.createElement('span')
    span.textContent = produto.value
    lista.appendChild(span)
    span.className = 'bg-blue-200 px-8 py-2'
}