let player1Number = Math.floor((Math.random() * 6)+1);
let player2Number = Math.floor((Math.random() * 6)+1);
if(player1Number>player2Number)
document.querySelector("h1").innerHTML = "Player 1 wins";

else if (player2Number>player1Number)
  document.querySelector("h1").innerHTML = "Player 2 wins";

else
  document.querySelector("h1").innerHTML = "Draw";
document.querySelector(".player1img").setAttribute("src","images/dice"+player1Number+".png");
document.querySelector(".player2img").setAttribute("src","images/dice"+player2Number+".png");
