! function () {
    // let view = document.querySelector(".swiper-container");
    let view = View(".swiper-container")
    let container = {
            view: null,
            swiper: null,
            swiperOption: {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
                autoplay: true, //自动轮播
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            },
            init: function (view) {
                this.view = view
                this.swiper = new Swiper(view, this.swiperOption)
            }
        }
       
        container.init.call(container, view);
}.call()