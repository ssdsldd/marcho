$(function(){

    $('.blog-page__slider').slick({
        infinite: false,
        nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g id="surface1"><path d="M 6.09375 5.015625 C 6.367188 5.28125 6.367188 5.71875 6.09375 5.988281 L 2.59375 9.425781 C 2.320312 9.695312 1.875 9.695312 1.601562 9.425781 C 1.328125 9.15625 1.328125 8.71875 1.601562 8.453125 L 4.609375 5.5 L 1.605469 2.546875 C 1.332031 2.28125 1.332031 1.84375 1.605469 1.574219 C 1.878906 1.304688 2.324219 1.304688 2.597656 1.574219 L 6.097656 5.011719 Z M 6.09375 5.015625 "/></g></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7px" height="14px" viewBox="0 0 7 11" version="1.1"><g id="surface1"><path d="M 0.90625 5.015625 C 0.632812 5.28125 0.632812 5.71875 0.90625 5.988281 L 4.40625 9.425781 C 4.679688 9.695312 5.125 9.695312 5.398438 9.425781 C 5.671875 9.15625 5.671875 8.71875 5.398438 8.453125 L 2.390625 5.5 L 5.394531 2.546875 C 5.667969 2.28125 5.667969 1.84375 5.394531 1.574219 C 5.121094 1.304688 4.675781 1.304688 4.402344 1.574219 L 0.902344 5.011719 Z M 0.90625 5.015625 "/></g></svg></button>'
    });

    $('.card-details__main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        draggable: false,
        asNavFor: '.card-details__column'
      });

      $('.card-details__column').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.card-details__main',
        arrows: false,
        vertical: true,
        draggable: false,
        focusOnSelect: true
      });

    $('.shop-tabs__tab').on('click', function(e){
        e.preventDefault();
        $('.shop-tabs__tab').removeClass('shop-tabs__tab--active');
        $(this).addClass('shop-tabs__tab--active');
        $('.shop-tabs__content').removeClass('shop-tabs__content--active');
        $($(this).attr('href')).addClass('shop-tabs__content--active');
    });

    $('.shop-content__filter-btn').on('click', function(){
        $('.shop-content__filter-btn').removeClass('shop-content__filter-view--active');
        $(this).addClass('shop-content__filter-view--active');
    });


    $('.btn-list').on('click', function(){
        $('.products-items__item').addClass('products-items__item--list');
    });

    $('.btn-grid').on('click', function(){
        $('.products-items__item').removeClass('products-items__item--list');
    });

    $('.shop-content__filter-sort, .shop-content__filter-show, .content-card__cart-input').styler();


    $(".filter-price__input").ionRangeSlider({
        type: "double",
        onStart: function (data){
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

    $('.slider__row').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true
    });
    $(".products-items__stars, .content-card__star, .shop-tabs__star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true,
    });
    function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
    }
    
    function initializeClock(id, endtime) {
    const clock = document.querySelector(id);
    const daysSpan = clock.querySelector('.timer__days');
    const hoursSpan = clock.querySelector('.timer__hours');
    const minutesSpan = clock.querySelector('.timer__minutes');
    const secondsSpan = clock.querySelector('.timer__seconds');
    
    function updateClock() {
        const t = getTimeRemaining(endtime);
    
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
        if (t.total <= 0) {
        clearInterval(timeinterval);
        }
    }
    
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
    }
    
    const deadline = $('.timer__clock').attr('data-timer');
    initializeClock('.timer__clock', deadline);
});


