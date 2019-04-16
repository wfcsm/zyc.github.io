!function(){
    // let view = document.getElementById("topNavBar");
    let view = View("#topNavBar")
    let controller = {
        view: null,
        init:function(view){
            this.view = view
            this.bindEvents()
            // this.bindEvents.call(this)
        },
        bindEvents:function(){
            let view = this.view
            window.addEventListener("scroll", (e)=> {
                if (window.scrollY > 0) {
                    this.active()
                } else {     
                    this.deactive()
                }       
            })
        },
        active:function(){
            this.view.classList.add("sticky")
        },
        deactive:function(){
            this.view.classList.remove("sticky")
        }
    }
    controller.init.call(controller,view)
}.call()
