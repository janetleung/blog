const Pet = require('../Sequelize');

//插入文章数据
var newArticle = async function (ctx, next) {
    var
        title = ctx.request.body.articleTitle,
        introduction = ctx.request.body.introduction,
        content = ctx.request.body.content,
        now = Date.parse(new Date()) / 1000;

    if (ctx.request.body.new_category) {
        var category = ctx.request.body.new_category;
        var categoryId = await insertCategory(category);
    } else {
        var category = ctx.request.body.category;
        var categoryId = await queryCategory(category);
    }

    console.log('insertData with title: ' + title );
    var insertArticle = await Pet.Article.create({
        title : title,
        content : content,
        introduction : introduction,
        created_at : now,
        category : categoryId
    });
    console.log(JSON.stringify(insertArticle));
    ctx.body = '成功提交！';
};

//插入文章类别数据
var insertCategory = async function (category) {
    console.log('insertData with category: ' + category );
    var insertdata = await Pet.Category.create({
        category_name : category
    });
    insertdata = JSON.parse(JSON.stringify(insertdata));
    return insertdata.id;
};

//查询文章类别数据
var queryCategory = async function (category) {
    console.log('query category: ' + category );
    var querydata = await Pet.Category.findAll({
        where : {
            category_name : category
        }
    });
    querydata = JSON.parse(JSON.stringify(querydata))[0];
    return querydata.id;
};

module.exports = {
    'POST /background/newArticle/' : newArticle
};
