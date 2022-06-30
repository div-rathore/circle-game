
var playerRed = "Red";
var playerYellow = "Yellow";

function player1(e){
 playerRed = e.target.value

}
function player2(e){
playerYellow = e.target.value
}
function getRows(e){
rows = e.target.value

}
function getCols(e){
columns = e.target.value
}

var currPlayer = playerRed;

var gameOver = false;
var board;

var rows = 5;
var columns = 6;
/////////
// function getRows(e){
//     rows = e.target.value
//     }
//     function getCols(e){
//     columns = e.target.value
//     }
// function getRowCols(){
//     let rowCount = document.getElementById('rowNumber')
//     let colCount = document.getElementById('colNumber')

// }
////////    
var currentColumns = []; //keeps track of which row each column is at.

window.onload = function() {
    setGame();
}

function setGame() {
    board = [];
    currentColumns = [rows-1, rows-1, rows-1, rows-1, rows-1, rows-1];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // JS
            row.push(' ');
            // HTML
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece() {
    if (gameOver) {
        return;
    }

    //get coords of that tile clicked
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    // figure out which row the current column should be on
    r = currentColumns[c]; 

    if (r < 0) { // board[r][c] != ' '
        return;
    }

    board[r][c] = currPlayer; //update JS board
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currPlayer == playerRed) {
        tile.classList.add("red-circle");
        currPlayer = playerYellow;
    }
    else {
        tile.classList.add("yellow-circle");
        currPlayer = playerRed;
    }

    r -= 1; //update the row height for that column
    currentColumns[c] = r; //update the array

    checkWinner();
}

function checkWinner() {
     // horizontal
     for (let r = 0; r < rows; r++) {
         for (let c = 0; c < columns - 3; c++){
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                    setWinner(r, c);
                    let tile1 = document.getElementById(`${r.toString() + "-" + c.toString()}`);
                    let tile2 = document.getElementById(`${r.toString() + "-" + (c+1).toString()}`);
                    let tile3 = document.getElementById(`${r.toString() + "-" + (c+2).toString()}`);
                    let tile4 = document.getElementById(`${r.toString() + "-" + (c+3).toString()}`);
                        let winningTiles = []
                        winningTiles.push(tile1,tile2,tile3,tile4)
    
                        for(let i of winningTiles){
                            console.log(i.classList);
                            i.classList.remove('tile')
                            i.classList.add('tileWin')
                        }
                    return;
                }
            }
         }
    }

    // vertical
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] != ' ') {
                
               
                if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]) {
                    setWinner(r, c);
                let tile1 = document.getElementById(`${r.toString() + "-" + c.toString()}`);
                let tile2 = document.getElementById(`${(r+1).toString() + "-" + c.toString()}`);
                let tile3 = document.getElementById(`${(r+2).toString() + "-" + c.toString()}`);
                let tile4 = document.getElementById(`${(r+3).toString() + "-" + c.toString()}`);
                    let winningTiles = []
                    winningTiles.push(tile1,tile2,tile3,tile4)

                    for(let i of winningTiles){
                        console.log(i.classList);
                        i.classList.remove('tile')
                        i.classList.add('tileWin')
                    }
                  
                    return;
                }
                
            }
        }
    }

    // anti diagonal
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]) {
                    setWinner(r, c);
                    let tile1 = document.getElementById(`${r.toString() + "-" + c.toString()}`);
                    let tile2 = document.getElementById(`${(r+1).toString() + "-" + (c+1).toString()}`);
                    let tile3 = document.getElementById(`${(r+2).toString() + "-" + (c+2).toString()}`);
                    let tile4 = document.getElementById(`${(r+3).toString() + "-" + (c+3).toString()}`);
                        let winningTiles = []
                        winningTiles.push(tile1,tile2,tile3,tile4)
    
                        for(let i of winningTiles){
                            console.log(i.classList);
                            i.classList.remove('tile')
                            i.classList.add('tileWin')
                        }
                    return;
                    
                }
            }
        }
    }

    // diagonal
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]) {
                    setWinner(r, c);
                    let tile1 = document.getElementById(`${r.toString() + "-" + c.toString()}`);
                    let tile2 = document.getElementById(`${(r+1).toString() + "-" + (c+1).toString()}`);
                    let tile3 = document.getElementById(`${(r+2).toString() + "-" + (c+2).toString()}`);
                    let tile4 = document.getElementById(`${(r+3).toString() + "-" + (c+3).toString()}`);
                        let winningTiles = []
                        winningTiles.push(tile1,tile2,tile3,tile4)
    
                        for(let i of winningTiles){
                            console.log(i.classList);
                            i.classList.remove('tile')
                            i.classList.add('tileWin')
                        }
                    return;
                }
            }
        }
    }
}

function setWinner(r, c) {
    let winner = document.getElementById("winner");
    if (board[r][c] == playerRed) {
        winner.innerText = `${playerRed} Wins`;    
        // confirm(`${playerRed} Wins`) 
          
    } else {
        winner.innerText = `${playerYellow} Wins`;
        // confirm(`${playerYellow} Wins`) 


    }
    gameOver = true;
}

function reset(){
    document.location.reload()
}