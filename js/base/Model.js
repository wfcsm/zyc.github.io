window.Model = function(options){
    let resourceName = options.resourceName
    return {
        initAV: function () {
            var APP_ID = 'Wmo2Hze7BjF5P9BvTyOKlYG6-gzGzoHsz';
            var APP_KEY = 'k6hJUyWbk2E7Qg3HqLrraut1';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function () {
            var query = new AV.Query(resourceName);
            return query.find()
        },
        save: function (object) {
            var Message = AV.Object.extend(resourceName);
            var message = new Message();
            return message.save(object)
        }
    }
}