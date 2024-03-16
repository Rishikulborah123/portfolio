let nav=document.getElementsByTagName("li")
let about=document.getElementsByClassName("about")
nav[1].addEventListener("click",()=>{
    about.textContent=about;
})