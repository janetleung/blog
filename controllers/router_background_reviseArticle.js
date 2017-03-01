const Pet = require('../Sequelize');


//插入文章数据
var reviseArticle = async function (ctx, next) {
    var
        title = ctx.request.body.articleTitle,
        introduction = ctx.request.body.introduction,
        content = ctx.request.body.content,
        id = ctx.request.body.id;

    if (ctx.request.body.new_category) {
        var category = ctx.request.body.new_category;
        var categoryId = await insertCategory(category);
    } else {
        var category = ctx.request.body.category;
        var categoryId = await queryCategory(category);
    }
    console.log('queryData with title: ' + title );
    var updateArticle = await Pet.Article.findOne({
        where : {
            id : id
        }
    });
    console.log('upData with title: ' + title);
    updateArticle.title = title;
    updateArticle.introduction = introduction;
    updateArticle.content = content;
    updateArticle.category = categoryId;
    updateArticle = await updateArticle.save();
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
    'POST /background/reviseArticle/' : reviseArticle
};
