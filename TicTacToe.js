let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector("popup");
let newgamebtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

let winingPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 6],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

let xTurn = true;
let count = 0;


btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;

            element.innerText = "X";
            element.disabled = true;

        }

        else {

            xTurn = true;

            element.innerText = "O";
            element.disabled = true;

        }
    });
});

function pop(){
    console.log("elias")
}