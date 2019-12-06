const title = document.querySelector("#title");
title.innerHTML = "GOODD";


const CLICKED_CLASS = "clicked";  // className을 만듦

function handleClick(){
    const currentClass = title.className; // Q.className : id(title)과 함께있는 class를 의미
    console.log(currentClass);
    if(currentClass !== CLICKED_CLASS){ 
        title.className = CLICKED_CLASS; // clicked로 변경하면서 clicked에 지정된 css속성도 적용 
    } else {
        title.className = "";
    }
}

// ?이벤트발생이전인데 왜 노랑색인가
function init(){
    title.addEventListener("click",handleClick);
}
init();