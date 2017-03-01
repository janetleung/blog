const Pet = require('../Sequelize');

const blogConfig = require('../blog.config.js');

//查询文章内容
var queryArticleContent = async function (id) {
    var content = await Pet.Article.findAll({
        attributes: ['content', 'title', 'created_at'],
        where : {
            id : id
        },
    });
    content = JSON.parse(JSON.stringify(content));
    return content;
};

var articleContent = async function (ctx, next) {
    var config = await blogConfig();
    var id = ctx.query.id;
    console.log('query article content with : id' + ctx.query.id);
    var content = await queryArticleContent(id);
    var createdTime = new Date(parseInt(content[0].created_at) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
    ctx.render('article.html', {
        content : content[0].content,
        title : content[0].title,
        createdTime : createdTime,
        blogtitle : config.title,
        blogdescribe : config.describe
    });
};



module.exports = {
    'GET /article/' : articleContent
};
