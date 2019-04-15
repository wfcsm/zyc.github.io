! function () {
    let view = document.getElementById('message')
    let model = {
        initAV: function () {
            var APP_ID = 'Wmo2Hze7BjF5P9BvTyOKlYG6-gzGzoHsz';
            var APP_KEY = 'k6hJUyWbk2E7Qg3HqLrraut1';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function () {
            var query = new AV.Query('Message');
            return query.find()
        },
        save: function (name, content) {
            var Message = AV.Object.extend('Message');
            var message = new Message();

            return message.save({
                "name": name,
                "content": content
            })
        }
    }
    let controller = {
        view: null,
        messageList: null,
        model:null,
        init: function (view,model) {
            this.view = view
            this.model=model
            this.messageList = view.querySelector("#messageList")
            this.form = view.querySelector("#myForm")
            this.model.initAV()
            this.loadMessages()
            this.bindEvents()
        },
       
        loadMessages: function () {
            model.fetch().then((todos) => {
                todos.forEach(element => {
                    let li = document.createElement("li")
                   
                    li.textContent = `${element.attributes.name}: ${element.attributes.name}`
                    this.messageList.append(li);
                });
            }).then(function (todos) {
                // 更新成功
            }, function (error) {
                // 异常处理
            });
        },
        bindEvents: function () {
            this.form.addEventListener("submit", (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let username = document.getElementById("username").value
            let content = document.getElementById("leavemessage").value
            console.log(model);
            model.save(username,content).then(function (object) {
                let li = document.createElement("li")
                li.textContent = `${object.attributes.name}:${object.attributes.content}`
                this.messageList.append(li);
                document.getElementById("leavemessage").value = ""
            }.bind(this))
        }

    }

    controller.init.call(controller, view, model)

}.call()