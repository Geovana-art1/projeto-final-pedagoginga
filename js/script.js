// Selecione todas as células no tabuleiro (9 divs com classe "cell")
const cells = document.querySelectorAll(".cell");

// Seleciona a área de status (quem joga, vitória ou)
const statusText = document.getElementById("status");

// Seleciona o botão de reiniciar
const statustBtn = document.getElementById("restart");

// Define quem é o jogador
let currentPlayer = "X";

// Array que apresenta o tabuleiro (9 posições)
let board = ["", "", "", "", "", "", "", "", ""]

// Váriavel para controlar se o jogo ainda está em andamento
let gameActive = true;

const winningConditions = [
    [0, 1, 2], // linha superior
    [3, 4, 5], // linha do meio
    [6, 7, 8], // linha inferior
    [0, 3, 6], // coluna esquerda
    [1, 4, 7], // coluna do meio
    [2, 5, 8], // coluna direita
    [0, 4, 8], // coluna principal
    [2, 4, 6] //diagonal secundária
];

function initializeGame() {
    for(let i= 0; i < 9; i++){
        cells[i].addEventListener("click", handLeCellClick)
    }
    restartBtn.addEventListener("click", restartGame)
    statusText.textContent = `Vez do jogador ${currentPlayer}`;
}

function handleCellClick(event) {
    const cell = EventTarget.target // célula clicada
    const index = cell.getAttribute("data-index"); // índiceda célula (0 a 8)

    // Se já tiver valor ou jogo acabou, ignora clique
    if (board[index] !== "" || !gameActive) {
        return
    };
    
    board [index] = currentPlayer;
    cell.textContent = currentPlayer;

    if(currentPlayer === "X"){
        cell.classList.add("x")
    }else {
        cell.classList.add("o")
    }

    checkWinner()
}
