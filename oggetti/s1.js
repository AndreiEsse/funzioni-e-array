let garage = {
    automobili: [
        {'marca': 'Fiat', 'modelli': ['Panda', 'Punto','500']},
        {'marca': 'Lamborghini', 'modelli': ['Huracan', 'Aventador','Gallardo']},
        {'marca': 'Tesla', 'modelli': ['ModelX', 'ModelS']},
    ],
    stampaMarca: function(marcaInserisci) {
        let trovata = false;

        this.automobili.forEach((auto) => {
            if (auto.marca.toLowerCase() === marcaInserisci.toLowerCase()) {
                trovata = true;
                // console.log(`Modelli di ${marcaInserisci}:`);
                auto.modelli.forEach((modello) => {
                    console.log(modello);
                });
            } else if (trovata = false) {
             console.log(`Nessun modello trovato per la marca ${marcaInserisci}.`);
            }
        });
    }
};

console.log(garage.stampaMarca('lamborghini'));
