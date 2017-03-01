const Pet = require('../Sequelize');

var revise = async function (ctx, next) {
    var id = ctx.query.id;
    var articleContent = await Pet.Article.findAll({
        where : {
            id : id
        }
    });
    articleContent = JSON.parse(JSON.stringify(articleContent));
    console.log(id);
    var category_name = await Pet.Category.findAll({
        where : {
            id : articleContent[0].category
        }
    });
    category_name = JSON.parse(JSON.stringify(category_name));
    ctx.render('background_revise.html', {
        id : id,
        introduction : articleContent[0].introduction,
        articleTitle : articleContent[0].title,
        category : category_name[0].category_name,
        content : articleContent[0].content
    });
};

module.exports = {
    'GET /revise/' : revise
};
