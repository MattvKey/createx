new Swiper('.image-slider', {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
 
    },
   
   
    //колво слайдов на показ
    slidesPerView: 1,

    //отступ между слайдами
    spaceBetween: 1000,

    //бесконечный слайдер
    loop: true,

     //scroll speed
     speed: 800,  
});


/*
new Swiper(".image-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },


   

    // в случае отсутвия 2и больше слайдов слайдер перестает работать, при возврате все обратно
    //начинает работать
    watchOverflow: true,

    //отступ между слайдами
    spaceBetween: 0,

    // стартовый слайд под номером, ля а как номер прописать
    inintialSlide: 0,

    //бесконечный слайдер
    loop: true,

    //авто прокрутка
    autoplay: {
        // pause
        delay: 5200,
        // stop on last slide
        stopOnLasrSlide: true,
        // выкл при ручного переключения 
        disableOnInteraction: false,
    },
    //scroll speed
    speed: 1500,

}); 
*/
