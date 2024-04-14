console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn  = "X";
let isgameOver = false;
//function to change the turn
const changeTurn = ()=>{
    return turn==="X"?"0": "X";
}

//function to check for win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    console.log(boxtext);
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameOver = true;
            gameover.play();
            // document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "56px";
            let x = document.querySelector(".imgbox>img").style.width = "200px";
            console.log(x);
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box"); /*It will return a html collection of div.box*/
Array.from(boxes).forEach(element =>{/*each element = each box*/ 
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.innerText = turn;
            audioturn.play();
            turn = changeTurn();
            checkWin();
            if(gameOver==false){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            }
        }
    })
})

//Add onclick listener to reset button
let reset = document.querySelector("button");
reset.addEventListener("click",()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    for(box of boxtexts){
        box.innerText = "";
    }
    turn = "X";
    isgameOver= false;
    let x = document.querySelector(".imgbox>img").style.width = "0px";
});

