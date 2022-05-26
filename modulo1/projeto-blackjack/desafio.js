const welcomePlayer = console.log("Boas vindas ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
   blackjackFunc()
}
else {
   console.log("O jogo acabou.")
}

function blackjackFunc() {
   const playerCard1 = comprarCarta(); 
   const playerCard2 = comprarCarta();
   const playerTotalPoints = playerCard1.valor + playerCard2.valor;
   console.log(`Usuário - cartas: ${playerCard1.texto} ${playerCard2.texto} - ${playerTotalPoints}`);

   const computerCard1 = comprarCarta();
   const computerCard2 = comprarCarta();
   const computerTotalPoints = computerCard1.valor + computerCard2.valor;
   console.log(`Computador - cartas: ${computerCard1.texto} ${computerCard2.texto} - ${computerTotalPoints}`);

   if (playerCard1.valor == 11 && playerCard2.valor == 11 || computerCard1.valor == 11 && computerCard2.valor == 11){
      blackjackFunc()
   }
   else {
      if (playerTotalPoints > computerTotalPoints){
         console.log("O usuário ganhou!")
      }
      else if (playerTotalPoints < computerTotalPoints){
         console.log("O computador ganhou!")
      }
      else{
         console.log("Empate!")
      }
   }
   return
}