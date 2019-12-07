const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"); // className이 js-clock 내부의 h1태그를 의미


function getTime(){ 
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init(){
    getTime();
}

init();