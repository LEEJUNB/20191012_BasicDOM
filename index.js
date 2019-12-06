const title = document.querySelector("#title");
title.innerHTML = "GOODD";


const CLICKED_CLASS = "clicked";  // className을 만듦

function handleClick(){
    const currentClass = title.className; // Q.className : id(title)과 함께있는 class를 의미
    console.log(currentClass);
    if(currentClass !== CLICKED_CLASS){ 
        title.classList.add(CLICKED_CLASS); // classList에 쌓임, but 하나의 클래스만 체크가능
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}

// ?이벤트발생이전인데 왜 노랑색인가
function init(){
    title.addEventListener("click",handleClick);
}
init();