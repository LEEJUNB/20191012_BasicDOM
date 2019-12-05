const titleman = document.querySelector("#title"); // DOM
titleman.innerHTML = "what up";

const BASE_COLOR = "rgb(52, 73, 94)"; // "#34495e" 라고 입력하면 적용안됨
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){ // 초기페이지 (초기화)
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}
init(); // 초기화 실행

function handleOffline() {
    console.log("ByeBye!!");
}

function handleOnlne(){
    console.log("Welcome!!");
}

window.addEventListener("offline",handleOffline);
window.addEventListener("online",handleOnlne);

// if ("10"===10){
//     console.log("101010")
// } else if ("10" == 10) {
//     console.log("no type 10")
// } else {
//     console.log("Good")
// }