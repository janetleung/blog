const fs = require('fs');


//用koa-router注册controllers里的各条路由，返回router.routes（）
function addMapping (router, mapping) {
    for (var url in mapping) {
        if (url.indexOf('GET') == 0) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log('register url mapping: GET ' + path);
        } else if (url.indexOf('POST') == 0) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log('register url mapping: POST ' + path);
        }else {
            console.log('invalid url: ' + url);
        }
    }
};



function addControllers(router, dir) {
    var files = fs.readdirSync(__dirname + '/controllers');
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });
    for (var f of js_files) {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/controllers/' + f);
        addMapping(router, mapping);
    }
}


module.exports = function (dir) {
    let
        controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
        router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
};
