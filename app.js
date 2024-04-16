console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn  = "X";
let p1 = "X";
let p2 = "O"
let isgameOver = false;
let point1 = 0;
let point2 = 0;
let p = document.querySelectorAll("td");
p[0].innerText = prompt("Player 1: ");
p[2].innerText = prompt("Player 2: ");
if(p[0].innerText==""){
    p[0].innerText = "Player 1";
}
if(p[2].innerText==""){
    p[2].innerText = "Player 2";
}
if(turn === "X"){
    document.getElementsByClassName("info")[0].innerHTML = `Turn for <b>${p[0].innerText}->X</b>`;
}else{
    document.getElementsByClassName("info")[0].innerHTML = `Turn for <b>${p[2].innerText}->O</b>`;
}
//function to change the turn
const changeTurn = ()=>{
    return turn==="X"?"O": "X";
}
//function to check for win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    console.log(boxtext);
    let wins;
    if(window.innerWidth > 800){  //Viewport > 800px
        wins = [
            [0, 1, 2, 5, 4.6, 0],
            [3, 4, 5, 5, 14.8, 0],
            [6, 7, 8, 5, 24.8, 0],
            [0, 3, 6, -5, 14.8, 90],
            [1, 4, 7, 5, 15, 90],
            [2, 5, 8, 15.1, 14.8, 90],
            [0, 4, 8, 5.4, 15.2, 45],
            [2, 4, 6, 5, 14.8, -45]
        ]
    }else{  // Viewport <= 800px
        wins = [
            [0, 1, 2, 9, 9.6, 0],
            [3, 4, 5, 9, 29.8, 0],
            [6, 7, 8, 9, 49.8, 0],
            [0, 3, 6, -11, 29.8, 90],
            [1, 4, 7, 9, 30, 90],
            [2, 5, 8, 29.1, 29.8, 90],
            [0, 4, 8, 8.4, 29.2, 45],
            [2, 4, 6, 9, 29.8, -45]
        ]
    }
    
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=="")){
            
            isgameOver = true;
            gameover.play();
                if (p1===boxtext[e[0]].innerText){
                    point1++;
                    p[1].innerText = point1;
                    document.querySelector(".info").innerHTML = `<b>${p[0].innerText}</b> Won`;
                }else{
                    point2++;
                    p[3].innerText = point2;
                    document.querySelector(".info").innerHTML = `<b>${p[2].innerText}</b> Won`;
                }
                console.log(p[1].innerText);
            console.log("Hello");
            //----------------------------For celebration Effect-----------------------------------------------------------
            const count = 2000,   
            defaults = {
                origin: { y: 0.8 },
            };

            function fire(particleRatio, opts) {
            confetti(
            Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio),
            })
            );
            }

             fire(0.25, {
                spread: 150,
                startVelocity: 55,
            });
            //---------------------------------------------------------------------------------------
            let x = document.querySelector(".imgbox>img").style.width = "200px";
            document.querySelector(".line").style.borderRadius = "50px";
            if(window.innerWidth > 800){
                document.querySelector(".line").style.width = "20vw";
            }else{
                document.querySelector(".line").style.width = "42vw";
            }
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box"); /*It will return a html collection of div.box*/
Array.from(boxes).forEach(element =>{/*each element = each box*/ 
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click",()=>{
        music.play();
        if(boxtext.innerText===""){
            boxtext.innerText = turn;
            audioturn.play();
            turn = changeTurn();
            checkWin();
            if(isgameOver==false){
                if(turn=="X"){
                    document.getElementsByClassName("info")[0].innerHTML = "Turn for "+`<b>${p[0].innerText}->${turn}</b>`;
                }
                if(turn=="O"){
                    document.getElementsByClassName("info")[0].innerHTML = "Turn for "+`<b>${p[2].innerText}->${turn}</b>`;
                }
            }
        }
    })
})
//Add onclick listener to reset button
let reset = document.querySelector("button");
reset.addEventListener("click",()=>{
    music.pause();
    console.log("hello");
    reset.style.boxShadow = "inset -1px -1px 5px #252222,inset 2px 2px 4px #eefffe";
    setTimeout(()=>{
        reset.style.boxShadow = "-2px -2px 5px #eefffe, 2px 2px 4px #252222";
        reset.style.border = "1px solid white"
    },150)
    let boxtexts = document.querySelectorAll(".boxtext");
    for(box of boxtexts){
        box.innerText = "";
    }
    document.querySelector(".info").innerHTML = "Turn for "+`<b>${turn}</b>`;
    isgameOver= false;
    let x = document.querySelector(".imgbox>img").style.width = "0px";
    document.querySelector(".line").style.width = "0vw";
    if(turn === "X"){
        document.getElementsByClassName("info")[0].innerHTML = `Turn for <b>${p[0].innerText}->X</b>`;
    }else{
        document.getElementsByClassName("info")[0].innerHTML = `Turn for <b>${p[2].innerText}->O</b>`;
    }
});