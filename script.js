const elements = {
    section : document.getElementById("description"),
    btnAccess : document.getElementById("access"),
    hidden : "hidden",
};
function seeSection(){
    if(elements.btnAccess.addEventListener("click")){
        elements.section.classList.remove(elements.hidden);
    }
    else{
        elements.section.classList.add(elements.hidden);
    }
}
function hideSection(){
    if(elements.btnAccess.addEventListener("click")){
        elements.section.classList.add(elements.hidden);
    }
    else{
        elements.section.classList.remove(elements.hidden)
    }
}
function action(){
    if (elements.btnAccess.addEventListener("click")){
        seeSection();

    }
    else{
        hideSection();
    }
}