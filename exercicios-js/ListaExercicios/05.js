function transormar() {
    let valor = 0.1 + 0.2

    console.log(`R$ ${valor.toFixed(2).toString().replace(".", ",")}`);
}

transormar()