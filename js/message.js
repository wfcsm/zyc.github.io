! function () {
    // let view = document.getElementById('message')
    // let cont



    var APP_ID = 'Wmo2Hze7BjF5P9BvTyOKlYG6-gzGzoHsz';
    var APP_KEY = 'k6hJUyWbk2E7Qg3HqLrraut1';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });

    var Message = AV.Object.extend('Message');
    var message = new Message();
    var query = new AV.Query('Message');
    let ul = document.getElementById("messageList");
   
    query.find().then(function (todos) {
       todos.forEach(element => {
           let li = document.createElement("li")
           li.textContent  =`${element.attributes.name}: ${element.attributes.name}`
           ul.append(li);
       });
    }).then(function (todos) {
        // 更新成功
    }, function (error) {
        // 异常处理
    });

    let myForm = document.getElementById("myForm")

    myForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let username = document.getElementById("username").value
        let content = document.getElementById("leavemessage").value
       
        message.save({
            "name": username,
            "content": content
        }).then(function (object) {
            console.log(1);
            let li =document.createElement("li")
            li.textContent = `${object.attributes.name}:${object.attributes.content}`
            ul.append(li);
            document.getElementById("leavemessage").value=""
        })
    })

}.call()