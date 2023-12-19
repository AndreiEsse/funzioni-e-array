function tabellina(numTabellina) {
    for (let i = 1; i <= 10; i++) {
       tabella = numTabellina * i;
       console.log(`${numTabellina} * ${i} = ${tabella}`);
    }
    return tabella
}
let numMoltipl = 5;
tabellina(numMoltipl);
