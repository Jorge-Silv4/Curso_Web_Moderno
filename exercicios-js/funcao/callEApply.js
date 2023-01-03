function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: "7634",
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco());
console.log(produto.getPreco());

const carro = {
    preco: 56987,
    desc: 0.22
}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.apply(carro, [0.18, '$']));
console.log(getPreco.call(carro, 0.18, '$'));
