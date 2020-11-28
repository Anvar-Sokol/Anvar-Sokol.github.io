var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var slideIndex = 0;
var timer;
showSlides(slideIndex);
function auto() {
    window.clearTimeout(timer);
    timer = setTimeout(function() {
        plusSlides(1);
        auto();
    }, 7500);
}
auto();
function clearAuto() {
    window.clearTimeout(timer);
}
function plusSlides(n) {
    showSlides(slideIndex + n);
}
function currentSlide(n) {
    showSlides(n);
}
function limit(n) {
    return n >= slides.length ? 0 : n < 0 ? slides.length - 1 : n;
}
function showSlides(n) {
    n = limit(n);
    slides[slideIndex].style.display = "none";
    dots[slideIndex].classList.remove("active");
    slideIndex = n;
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}