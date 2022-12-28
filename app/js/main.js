$(function(){

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

    $('.shop-content__filter-sort, .shop-content__filter-show').styler();
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
    $(".products-items__stars").rateYo({
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


