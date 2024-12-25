const emojis = [
    "💵",
    "💵",
    "😱",
    "😱",
    "😡",
    "😡",
    "🤡",
    "🤡",
    "👹",
    "👹",
    "🏎️",
    "🏎️",
    "😺",
    "😺",
    "🦊",
    "🦊",
];
let openCards = [];


let shuffleEmojis = emojis.sort(()=>
    Math.random()>0.5? 2 : -1
);

for(let i = 0 ;i<emojis.length;i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    document.querySelector(".game").appendChild(box);

    /*   nao trabalho com function e DOM 0 */

    /* DOM 2 */
    box.addEventListener("click",(e)=>{
        handleClick(e.currentTarget)
    })
    

}


 const handleClick = (e)=>{

  
        if(openCards.length<2){
            e.classList.add("boxOpen");
            openCards.push(e);
           }

           if(openCards.length == 2){
                setTimeout(checkMatch(),500);
           }
           console.log(openCards)

     
  
}
 
const checkMatch = ()=>{
        if(openCards[0].innerHTML === openCards[1].innerHTML){
            console.log(openCards)
            openCards[0].classList.add("boxMatch");
            openCards[1].classList.add("boxMatch");
        }else{
            openCards[0].classList.remove("boxOpen");
            openCards[1].classList.remove("boxOpen");
        };
        openCards = [];
        if(document.querySelectorAll(".boxMatch").length === emojis.length){
            alert("Você venceu");
        };
}