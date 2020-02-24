
let globalScore = 0;
let roundScore = 0;
let activePlayer = 1;


const diceroll = document.getElementById("diceroll");
const holdbtn = document.getElementById("hold");
const newgame = document.getElementById("newgame")


diceroll.addEventListener("click", () => {

    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num)

    diceroll.style.display = `block`
    diceroll.style.display = `.dice`
    dice.setAttribute ("src",`./img/dice${num}.png`)

    if ( num !== 1 ){ 
        
        roundScore += num;

        document.querySelector(`#current-` + activePlayer).textContent = roundScore;
    }

    else {

        nextPlayer()

    }

})

holdbtn.addEventListener("click", () => {

    globalScore[activePlayer] += roundScore;

    document.querySelector(`#namescore-` + activePlayer).textContent = globalScore[activePlayer];

    if (globalScore[activePlayer] >= 50 ) { 
    
    
        document.querySelector(`#name-` + activePlayer).textContent = `Winner!`;
    }

    else {

        nextPlayer()

    }

})


const nextPlayer = () => {
    
    roundScore = 0;

    document.querySelector(`#current-` + activePlayer).textContent = roundScore;
    
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;

    

    document.querySelector('.player1').classList.toggle('active');
    document.querySelector('.player2').classList.toggle('active');
}





newgame.addEventListener("click",() => {
    
    document.getElementById('name-1').textContent = 'Player 1';
    document.getElementById('name-2').textContent = 'Player 2';
    document.getElementById('current-1').textContent = 0;
    document.getElementById('current-2').textContent = 0; 

    document.getElementById('namescore-1').textContent = 0;
    document.getElementById('namescore-2').textContent = 0; 


})