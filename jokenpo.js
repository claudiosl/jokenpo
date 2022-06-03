const prompt = require("prompt-sync")()
prompt("Vamos jogar Jokenpô. Precione [enter]")
console.clear()
prompt("Atenção para as regras do jogo: [enter]")
console.clear()
prompt(`papel ganha da pedra.
 A pedra ganha Tesoura.
 A Tesoura ganha do papel [ENTER]`)
console.clear()
prompt("Os comandos são: [0] PEDRA [1] PAPEL [2] TESOURA [enter]")


let continuar ="S";
while(continuar == "S"){
    console.log("Jokenpô");
    let vitoriaJogador = 0;
    let vitoriaComputador = 0;
    const jokenpo = [ "PEDRA", "PAPEL", "TESOURA"];
    let qtdRodadas = +prompt(`Quantas rodadas iremos jogar? `);

    for (let i = 0; i < qtdRodadas; i++){console.log("PEDRA-0   PAPEL-1  TESOURA-2 ")
    const jogador = +prompt(`Qual é a sua escolha? `)
    const computador = Math.floor(Math.random() * 3)
    console.log(`\n Você escolheu ${jokenpo[jogador]} \n`)
    console.log(`O computador escolheu ${jokenpo[computador]}`)
    console.log()

    if (computador == 0){
        if(jogador == 0){
            console.log("Empatamos")}
        
        else if(jogador == 1){
            console.log("Você ganhou essa rodada ")
            vitoriaJogador++
        }else if(jogador == 2){
            console.log("ih! perdeu. O computador ganhou")
            vitoriaComputador++}
        
     else {console.log("opção invalida não foi possivel contabilizar")
}

} if (computador == 1){
    if (jogador == 1){
        console.log("Empatamos")
    }
     else if (jogador == 0){
        console.log("ih! perdeu.O computador ganhou")
    vitoriaComputador++}

    else if (jogador == 2){
        console.log("Você ganhou essa")
        vitoriaJogador++}
    else
        {console.log("opção invalida não foi possivel contabilizar")}
} if (computador == 2){
    if (jogador == 2){
        console.log("Empatamos")
        }
     else if (jogador == 1)
        {console.log("ih! perdeu.O computador ganhou")
    vitoriaComputador++}

    else if (jogador == 0){
        console.log("Você ganhou ")
        vitoriaJogador++}
    else
    {console.log("opção invalida não foi possivel contabilizar")}
        
    }

}
console.log(`o computador venceu ${vitoriaComputador} rodada(s) `)
console.log(`o jogador venceu ${vitoriaJogador} rodada(s)`)
console.log()
if(vitoriaComputador > vitoriaJogador){
    console.log(" O computador ganhou a rodada")
}
else if(vitoriaJogador > vitoriaComputador){
    console.log("Pode comemorar! você ganhou essa rodada")
}
else{
    console.log("Não tivemos campeão. vamos jogar de novo")
}
continuar = prompt("Deseja continuar? [s/n] ").toUpperCase()
while(continuar != "S" && continuar != "N"){
    continuar = prompt("Deseja continuar [s/n]? ").toUpperCase()
}


}

console.log("Ok. até a próxima!")

