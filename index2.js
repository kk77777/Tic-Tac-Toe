const p1 = "X";
const p2 = "O";
var i = 0;
var gameSet = new Set();
var p1Set = new Set();
var p2Set = new Set();
const gameSound = new Audio(
  "/home/kk/Documents/web development/tic-tac-toe/click.mp3"
);

document.getElementById("turn").innerHTML = "Player 1's Turn";

function newGame() {
  document.getElementById(0).innerHTML = "";
  document.getElementById(1).innerHTML = "";
  document.getElementById(2).innerHTML = "";
  document.getElementById(3).innerHTML = "";
  document.getElementById(4).innerHTML = "";
  document.getElementById(5).innerHTML = "";
  document.getElementById(6).innerHTML = "";
  document.getElementById(7).innerHTML = "";
  document.getElementById(8).innerHTML = "";
  gameSet = new Set();
  p1Set = new Set();
  p2Set = new Set();
  i = 0;
}

function checkWinner() {
  var c1 = document.getElementById(0).textContent;
  var c2 = document.getElementById(1).textContent;
  var c3 = document.getElementById(2).textContent;
  var c4 = document.getElementById(3).textContent;
  var c5 = document.getElementById(4).textContent;
  var c6 = document.getElementById(5).textContent;
  var c7 = document.getElementById(6).textContent;
  var c8 = document.getElementById(7).textContent;
  var c9 = document.getElementById(8).textContent;
  if (c1 == "") {
    c1 = 1;
  }
  if (c2 == "") {
    c2 = 2;
  }
  if (c3 == "") {
    c3 = 3;
  }
  if (c4 == "") {
    c4 = 4;
  }
  if (c5 == "") {
    c5 = 5;
  }
  if (c6 == "") {
    c6 = 6;
  }
  if (c7 == "") {
    c7 = 7;
  }
  if (c8 == "") {
    c8 = 8;
  }
  if (c9 == "") {
    c9 = 9;
  }
  console.log(c1, c2, c3, c4, c5, c6, c7, c8, c9);
  if ((c1 === p1 || c1 === p2) && c1 === c2 && c2 === c3) {
    console.log(c1, c2, c3);
    console.log("case1");
    return c1;
  } else if ((c4 === p1 || c4 === p2) && c4 === c5 && c5 === c6) {
    console.log("case2");
    return c4;
  } else if ((c7 === p1 || c7 === p2) && c7 === c8 && c8 === c9) {
    console.log("case3");
    return c7;
  } else if ((c1 === p1 || c1 === p2) && c1 === c4 && c4 === c7) {
    console.log("case4");
    return c1;
  } else if ((c2 === p1 || c2 === p2) && c5 === c2 && c8 === c2) {
    console.log("case5");
    return c2;
  } else if ((c3 === p1 || c3 === p2) && c6 === c3 && c9 === c6) return c3;
  else if ((c1 === p1 || c1 === p2) && c1 === c5 && c5 === c9) {
    console.log("case7");
    return c1;
  } else if ((c3 === p1 || c3 === p2) && c3 === c5 && c7 === c5) {
    console.log("case8");
    return c3;
  } else return 0;
}

function inputFunction(clickedId) {
  var x = clickedId;
  gameSet.add(x);
  console.log(gameSet);
  var t = document.getElementById(x).textContent;
  if (t == "") {
    if (i % 2 === 0) {
      document.getElementById("turn").innerHTML = "Player 2's Turn";
      document.getElementById(x).classList.remove("blue");
      document.getElementById(x).classList.add("red");

      document.getElementById(x).innerHTML = p1;
      gameSound.play();
      i++;
      p1Set.add(x);
      console.log(p1Set);
      if (p1Set.size >= 3) {
        // document.getElementById(x).innerHTML = p1;

        var win = checkWinner();
        console.log("win = " + win);
        if (win) {
          console.log("win" + win);
          if (win == p1) alert("Player 1 Wins");
          else if (win == p2) alert("Player 2 Wins");
          // window.confirm("Want to play again?");
          newGame();
        } else if (gameSet.size == 9) {
          document.getElementById("turn").innerHTML = "Game Tied";
        }
      }
    } else {
      document.getElementById("turn").innerHTML = "Player 1's Turn";
      console.log("i = " + i);
      document.getElementById(x).classList.add("blue");
      document.getElementById(x).innerHTML = p2;
      gameSound.play();
      i++;
      p2Set.add(x);
      console.log(p2Set);
      if (p1Set.size >= 3) {
        document.getElementById(x).innerHTML = p2;
        var win = checkWinner();
        if (win) {
          console.log("win" + win);
          if (win == p1) alert("Player 1 Wins");
          else if (win == p2) alert("Player 2 Wins");
          // window.confirm("Want to play again?");
          newGame();
        } else if (gameSet.size == 9) {
          document.getElementById("turn").innerHTML = "Game Tied";
        }
      }
    }
  }
}
