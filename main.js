function setTitle(){
    const title=document.getElementsByTagName("h1")[0];
    title.innerHTML = "Interactive Media Design 01";
}

// As getElementsByTagName method return elements with the given tag name, it will return a heading.
// [0] selects the first h1 on the page.
//title.innerHTML sets the text content of the selected h1

//References: https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName





function setTheme(){
    const mode = document.body;
    mode.classList.toggle("theme");
}

//function setTheme() is defined to change the theme. 
// the body is setting by setting document.body
//mode.classList.toggle("theme"); toggle the theme class on the body element. 
// References : https://www.w3schools.com/js/default.asp




