const slides = document.querySelectorAll(".slider img")
let index = 0;
function cS() {
    slides[index].classList.remove("visible");
    index = (index+ 1)%slides.length;
    slides[index].classList.add("visible");
}
setInterval(cS,3100);