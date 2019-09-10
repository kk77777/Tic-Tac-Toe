var original;
const p1 = 'O';
const p2 = 'X';
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const cells = document.querySelectorAll(".cell");
startGame();

// function startGame() {
//     document.querySelector(".endgame").style.display = "none";
//     original = Array.from(Array(9).keys());
//     var p1Select = [];
//     var p2Select = [];
//     var j = 0;
//     var k = 0;
//     for (var i = 0; i < cells.length; i++) {
//         cells[i].innerText = "";
//         cells[i].style.removeProperty('background-color');
//         if (i / 2 == 0) {

//             p1Select[j] = callTurnClick(i);
            
//             j++;
//         }
//         else {
//             p2Select[k] = callTurnClick(i);
//             k++;
//         }

//         function callTurnClick(i) {
//             var x= cells[i].addEventListener('click', turnClick, false);
//             console.log(x);
//             return x;
//          }
         
        //  function turnClick(square) {
        //      var x = (square.target.id);
        //      return x;
         
//          }
         

//     }
//     console.log(p1Select[j]);
//     // console.log("p1" + p1Select);
//     // console.log(p2Select);

// }


