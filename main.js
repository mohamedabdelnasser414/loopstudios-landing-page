const toggleBtn = document.querySelector(".toggle-btn");
const headerEl = document.querySelector("header");
const navLinksEl= document.querySelector(".nav-links");

toggleBtn.addEventListener("click",()=>{
    if(toggleBtn.classList.contains("hamberger")){
        toggleBtn.classList.remove("hamberger")
        toggleBtn.setAttribute("src","./images/icon-close.svg")
        headerEl.classList.add("header-mobile")
        navLinksEl.classList.add("nav-links-mobile")
    }else {
        toggleBtn.classList.add("hamberger")
        toggleBtn.setAttribute("src","./images/icon-hamburger.svg")
        headerEl.classList.remove("header-mobile")
        navLinksEl.classList.remove("nav-links-mobile")
    }
})


