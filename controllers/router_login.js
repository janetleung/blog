const blogConfig = require('../blog.config.js');


//登录
var login = async function (ctx, next) {
    var config = await blogConfig();
    var
        username = ctx.request.body.username || '',
        password = ctx.request.body.password || '';
    if (username === config.user && password === config.password) {
        ctx.render('background_write.html', {
            blogtitle : config.title,
            blogdescribe : config.describe,
        });
    } else {
        ctx.render('login_fail.html', {
            blogtitle : config.title,
            blogdescribe : config.describe,
        });
    }
};

//密码验证
var setUp = async function (ctx, next) {
    var config = await blogConfig();
    var
        username = ctx.request.body.user ,
        password = ctx.request.body.password ;
    if (username === config.user && password === config.password) {
        ctx.body = { setUp : true, text : '密码正确！' };
    } else {
        ctx.body = { setUp : false, text : '密码错误，请重试！' };
    }
};

module.exports = {
    'POST /login' : login,
    'POST /setUp' : setUp
};
