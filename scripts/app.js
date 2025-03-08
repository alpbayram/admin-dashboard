
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const btn = document.querySelector(".hamburger-icon");
    let style = getComputedStyle(document.querySelector(".sidebar")).display;
    const header = document.querySelector(".header");
    const project = document.querySelector(".projects-container")
    const iconX = document.querySelector(".icon-x")
    const style2 = getComputedStyle(document.querySelector(".icon-x")).display;
    btn.addEventListener("click", menuOpen);
    function menuOpen() {
        style = getComputedStyle(document.querySelector(".sidebar")).display;
        if (style == "none") {
            sidebar.style.display="grid"           
            sidebar.style.gridColumn = "1/2";
            sidebar.style.gridRow = "1/-1";
            
            sidebar.style.zIndex="3"
            sidebar.style.width="11rem"
            iconX.style.display="flex"
            
        }
    }
    
    iconX.addEventListener("click", menuClose);
    function menuClose() {
        style = getComputedStyle(document.querySelector(".sidebar")).display;
        if (style == "grid") {
            sidebar.style.display="none"
            console.log("giriyor")
            
        }
    }
  });