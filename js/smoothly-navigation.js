! function () {
    // let view = document.querySelector(".topNavBar")
    let view = View(".topNavBar")
    let controller = {
        view: null,
        aTag: null,
        scrollToElement: function (element) {
            let top = element.offsetTop;
            // let time = 1000;
            let now = window.scrollY; //现在的位置
            // console.log("现在的位置:"+now)
            let target = top - 80 //目标位置
            // 设置循环动画
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
            var coords = {
                y: now
            }; // 起始点 (0, 0)
            var tween = new TWEEN.Tween(coords) // 创建一个新的tween用来改变 'coords'
                .to({
                    y: target
                }, 1000) // 在1s内移动至 (300, 200)
                .easing(TWEEN.Easing.Quadratic.Out) // 使用缓动功能使的动画更加平滑
                .onUpdate(function () { // 在 tween.js 更新 'coords' 后调用
                    window.scrollTo(0, coords.y);
                })
                .start(); // 立即开始 tween
        },
        bindEvent: function () {
            this.aTag = this.view.querySelectorAll("nav>ul>li>a")
            console.log(this.aTag);
            for (let i = 0; i < this.aTag.length; i++) {
                this.aTag[i].onclick =  (e)=>{
                    e.preventDefault();
                    let a = e.currentTarget;
                    let href = a.getAttribute("href");

                    let element = document.querySelector(href);
                    this.scrollToElement(element)
                    // let top = element.offsetTop;

                    // // let time = 1000;

                    // let now = window.scrollY; //现在的位置
                    // // console.log("现在的位置:"+now)
                    // let target = top - 80 //目标位置

                    // // 设置循环动画
                    // function animate(time) {
                    //     requestAnimationFrame(animate);
                    //     TWEEN.update(time);
                    // }
                    // requestAnimationFrame(animate);

                    // var coords = {
                    //     y: now
                    // }; // 起始点 (0, 0)
                    // var tween = new TWEEN.Tween(coords) // 创建一个新的tween用来改变 'coords'
                    //     .to({
                    //         y: target
                    //     }, 1000) // 在1s内移动至 (300, 200)
                    //     .easing(TWEEN.Easing.Quadratic.Out) // 使用缓动功能使的动画更加平滑
                    //     .onUpdate(function () { // 在 tween.js 更新 'coords' 后调用
                    //         window.scrollTo(0, coords.y);
                    //     })
                    //     .start(); // 立即开始 tween
                }
            }
        },
        init: function (view) {
            this.view = view
            this.bindEvent.call(this)

        }
    }
    // let controller = function (view) {
    //     let aTag = view.querySelectorAll("nav>ul>li>a");

    // }
    controller.init.call(controller, view)
}.call()