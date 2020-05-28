/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}









// function scrollAppear() {
//     var introText = document.querySelector('.intro');
//     var introPosition = introText.getBoundingClientRect().top;
//     var screenPosition = window.innerHeight / 1.3;

//     if (introPosition < screenPosition) {
//         introText.classList.add('intro-appear');
//     }
//     else {
//         introText.classList.remove('intro-appear');
//     }
// }

// window.addEventListener('scroll', scrollAppear);




// меню


 // $(function($) {
 //            $(window).scroll(function(){
 //                if($(this).scrollTop() > 800){
 //                    $('.topBar').css('background','#000');
 //                    $('.middleBar').css('background','#000');
 //                    $('.bottomBar').css('background','#000');
 //                }
 //                else if ($(this).scrollTop() < 800){
 //                    $('.topBar').css('background','#fff');
 //                    $('.middleBar').css('background','#fff');
 //                    $('.bottomBar').css('background','#fff');
 //                }
 //            });
 //        });