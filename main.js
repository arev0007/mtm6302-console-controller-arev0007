
function setTitle(heading){
    const title = document.getElementById("title")
    title.innerHTML = heading
}


function setDescription(info){
    const content = document.getElementById("content")
    content.innerHTML = info
}



function setBackground(color){
    const back = document.getElementById("back")
    back.style.backgroundColor = color
}

function setFontColor(style){
    const back = document.getElementById("back")
    back.style.color = style
}


function setTheme(){
    const back = document.body;
    back.classList.toggle("theme");
}

//function setTheme() is defined to change the theme. 
// the body is setting by setting document.body
//mode.classList.toggle("theme"); toggle the theme class on the body element. 
// References : https://www.w3schools.com/js/default.asp




