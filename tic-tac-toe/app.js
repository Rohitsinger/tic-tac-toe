// const gameBoard = document.querySelector('#gameBoard')
// const infoDisplay = document.querySelector("#info")
// // console.log(cube);

// const squares = [
//     "","","","","","","","","",
// ]
// function createBoard() {
//     squares.forEach((_cell,index)=>{
//         const cellElement = document.createElement('div');
        
//         cellElement.classList.add('square')
        
//         cellElement.id = index
      
//         cellElement.addEventListener('click', addGo)
        
//         gameBoard.append(cellElement)
//         console.log(cellElement);
//      })
// }

// createBoard()


// function addGo(e) {

//     const goDisplay = document.createElement('div')
//     goDisplay.classList.add('circle');
   
//     e.target.append(goDisplay)
//     // console.log(e.target);
// }
// addGo()

let cells = document.querySelectorAll('.cell')
const button = document.querySelector('#reset')
cells = Array.from(cells)
let currentPlayer = "X"

let winningCombination = [
    [0,1,2] ,  [3,4,5] ,  [6,7,8] ,  [0,3,6] ,  [1,4,7]  , [2,5,8]  , [0,4,8]  , [2,4,6]   
]

function checkForWinning() {
    winningCombination.forEach(function(combination){
         let check = combination.every(i=>cells[i].innerText.trim() == currentPlayer)
         if(check){
            highLightCells(combination)

         }
    })
}

function highLightCells(combination) {
    combination.forEach(function (idx) {
        cells[idx].classList.add("highlight")
       
    })
}

button.addEventListener('click',remove)

function remove(params) {
    cells.forEach((cell)=>{
        cell.textContent =""
    })
}

cells.forEach((cell)=>{
    cell.addEventListener('click',function () {
        if(cell.innerText.trim() != "") return
        cell.innerText = currentPlayer;
        checkForWinning()
        
        currentPlayer = currentPlayer == "X" ? "0":"X"
    })
})
console.log(cells);