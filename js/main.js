$(document).ready(function () {

    // 모달창 닫기 자바스크립트
    // btn.addEventListener("click", function (e) {
    //     modal.style.display = "none";
    //     modal_content.style.display = "none";
    // })
    // modal.addEventListener('click', function (e) {
    //     modal.style.display = "none";
    //     modal_content.style.display = "none";

    //     modal_content.stopPropagation();
    // });
    const btn = document.querySelector(".modal-btn");
    var modal = document.querySelector(".modal");
    const modal_content = document.querySelector(".modal-content");

    function modal_close(params) {
        params.addEventListener("click", function (e) {
            modal.style.display = "none";
            modal_content.style.display = "none";
        })
    }
    modal_close(btn);
    modal_close(modal);

    //모달창 닫기  Jquery
    // $(".modal-btn").click(function (e) {
    //     $(".modal").fadeOut();
    // })

    // $(".modal").click(function (e) {
    //     $(".modal").fadeOut();
    //     e.preventDefault();

    //     $('.modal-content').stopPropagation();


    // })




    //header fixed
    let header = $('.header');
    let nav_wrap = $('.nav-wrap');
    $(window).scroll(function () {

        let scroll_posy = $(window).scrollTop();
        if (scroll_posy >= 85) {
            nav_wrap.addClass('nav-wrap-active')
            header.addClass('header-active')
        } else {
            nav_wrap.removeClass('nav-wrap-active')
            header.removeClass('header-active')
        }
    })
    //메뉴 관련
    //플로팅메뉴

    let h_more = $('.h-more');
    let sub_header = $('.sub-menu-wrap');
    let btn_close = $('.btn-close')
    let floating_banner = $('.floating-banner')
    let sw_btn = $('.swiper-button-pause')

    h_more.click(function () {
        sub_header.stop().slideToggle();
    })
    btn_close.click(function () {
        $(this).addClass('btn-close-clicked')
        floating_banner.addClass('btn-close-clicked')

    })

    sw_btn.click(function () {
        $(this).toggleClass('sw-button-play');

        let temp = $(this).hasClass('sw-button-play');
        if (temp == true) {
            sw_visual.autoplay.stop();
        } else {
            sw_visual.autoplay.start();
        }
    })
    // swiper 슬라이드 관련
    let sw_visual = new Swiper('.sw-visual', {

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // $(".swiper-button-pause").click(function(){
        //     Swiper.autoplay.stop();
        // });
        // $(".swiper-button-play").click(function(){
        //     Swiper.autoplay.play();
        // });
    });

    new Swiper('.sw-benefit', {
        slidesPerView: 3,
        navigation: {
            nextEl: ".sw-be-next",
            prevEl: ".sw-be-prev",
        },
    });

    new Swiper('.sw-ab', {
        navigation: {
            nextEl: ".sw-ad-next",
            prevEl: ".sw-ad-prev",
        },
    })
})
