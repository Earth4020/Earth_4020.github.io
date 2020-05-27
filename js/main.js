$(document).ready(function() {
	flag = 0;
	$(".menuIcon").click(function() {
		if(flag==0) {
			$(".open").hide();
			$(".close").show();
			$(".main").fadeIn(1000);
			flag = 1;
		}
		else {
			$(".open").show();
			$(".close").hide();
			$(".main").fadeOut(1000);
			flag = 0;
		}
	});

	$(".menuItem").click(function() {
		$(".open").show();
		$(".close").hide();
		$(".main").fadeOut(100);
	});

		// плавная прокрутка
	$(".navbar").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

// window.addEventListener('scroll', function () {
//     let scroll = window.pageYOffset;
//     let banner = document.querySelector('.header');
//     header.style.transform = ('translate3d(0,' + (scroll / 100) + '%,0) scale(' + (100 - scroll / 100) / 100 + ')');
// });