//const logger = require('./logger')
//logger.info('Usando o padrão CommonJS!!!!');

//import Pessoa from './pessoa'

//const pessoa = new Pessoa('Show De Bola');
//console.log(pessoa.toString());


const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'

console.log(produto, novoProduto);