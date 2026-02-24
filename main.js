'use strict'

function apertarBotao(){
    
        adicionarCodigos()
        adicionarProdutos()
        adicionarQuantidades()
        limparBotao()
}


function adicionarCodigos(){
    const codigo = document.getElementById('inputCodigo')

    if(codigo == ""){
        return false
    }else{
    const listaCodigos = document.getElementById('listaCodigos')
    const spanCodigo = document.createElement('spanCodigo')
    
    spanCodigo.textContent = codigo.value
    listaCodigos.appendChild(spanCodigo)
    spanCodigo.className = 'bg-blue-200 px-8 py-2'

    return codigo
    }
}

function adicionarProdutos(){
    const produto = document.getElementById('inputProduto')
    if (produto ==""){
        return false
    }else{
    const listaProdutos = document.getElementById('listaProdutos')
    const spanProduto = document.createElement('spanProduto')

    spanProduto.textContent = produto.value
    listaProdutos.appendChild(spanProduto)
    spanProduto.className = 'bg-blue-200 px-8 py-2'
    return produto
    }
}

function adicionarQuantidades(){
    const quantidade = document.getElementById('inputQuantidade')

    if(quantidade==""){
        return false
        }else{
    
    const listaQuantidades = document.getElementById('listaQuantidades')
    const spanQuantidade = document.createElement('spanQuantidade')

    spanQuantidade.textContent = quantidade.value
    listaQuantidades.appendChild(spanQuantidade)
    spanQuantidade.className = 'bg-blue-200 px-8 py-2'
    return quantidade
    }
}



function limparBotao(){
    document.getElementById('inputCodigo').value = ""
    document.getElementById('inputProduto').value = ""
    document.getElementById('inputQuantidade').value = ""
}