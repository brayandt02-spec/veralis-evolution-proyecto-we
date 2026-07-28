
const menubtn = document.getElementById("menubtn");
const navlinks = document.getElementById("nav-links");
const links = navlinks.querySelectorAll("a");

menubtn.addEventListener("click", ()=>{
    navlinks.classList.toggle("active");
    if(navlinks.classList.contains("active")){
         menubtn.innerHTML= "X";
         menubtn.setAttribute("aria-expanded","true")
    }else {
        menubtn.innerHTML ="☰";
        menubtn.setAttribute("aria-expanded","false")
    }
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navlinks.classList.remove("active");
        menubtn.innerHTML = "☰";
        menubtn.setAttribute("aria-expanded", "false");
    });
});
