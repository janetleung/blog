const blogConfig = require('../blog.config.js');

//主页
var index = async function (ctx, next) {
    var config =  await blogConfig();
    ctx.render('index.html', {
        blogtitle : config.title,
        blogdescribe : config.describe,
    });
};

module.exports = {
    'GET /' : index
};
