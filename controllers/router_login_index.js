const blogConfig = require('../blog.config.js');

//登录页面
var loginIndex = async function (ctx, next) {
    var config = blogConfig();
    ctx.render('login.html', {
        blogtitle : config.title,
        blogdescribe : config.describe
    });
};

module.exports = {
    'GET /login/index' : loginIndex
};
