let bowling = {
    'giocatori' : [
        {'nome' : 'antonio', 'score' : []},
        {'nome' : 'andrei', 'score' : []},
        {'nome' : 'fede', 'score' : []},
        {'nome' : 'krishi', 'score' : []},
    ],
    "Punti" : function(){
        this.giocatori.forEach((player) => {
            for(i = 0; i < 10; i++){
                player.score.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
            }

        });
      "PuntiFinali" : function(){
        this.giocatori.forEach((player) => {
            player.finalScore = player.score.reduce((tot, el) => tot + el)
        })
    };
    "VincitoreSIUUU" : function(){
        this.giocatori.sort((a, b) => b.finalScore -a.finalScore)
        if(this.giocatori[0].finalScore > this.giocatori[1].finalScore){
            let Vincitore = this.giocatori[0].nome
        } else {
            let Vincitore1 = this.giocatori[0]
            let Vincitore2 = this.giocatori[1]
            console.log(`C è stato un pareggio tra ${Vincitore1.nome} e ${Vincitore2.nome}
            che hanno totalizzato ${Vincitore1.finalScore} punti `);
        }
    }
}
}
bowling.Punti()
bowling.PuntiFinali()
bowling.VincitoreSIUUU()
console.log(bowling.giocatori);