var Pet = require('../Sequelize');

const Sequelize = require('sequelize');

//获取文章信息列表
var articleInformations = async function (ctx, next) {
    var offsetNum = (ctx.query.page - 1) * 8;
    console.log('query article information with : page' + ctx.query.page);
    var queryArticle = await queryArticleList(offsetNum);
    var queryArticle = await queryARticleCategory(queryArticle);
    ctx.body = queryArticle;
};

//查询文章列表
var queryArticleList = async function (offsetNum) {
    var queryArticle = await Pet.Article.findAll({
        attributes: ['title', 'introduction', 'created_at', 'category', 'id'],
        offset : offsetNum,
        limit : 8 ,
        order : [[ 'created_at', 'DESC']],
    });
    queryArticle = JSON.parse(JSON.stringify(queryArticle));
    var id_nums = await Pet.Article.findOne({
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'id_nums']]
    });
    id_nums = JSON.parse(JSON.stringify(id_nums));
    queryArticle.push(id_nums);
    return queryArticle;
};

//查询文章类别
var queryARticleCategory = async function (queryArticle) {
    var queryCategory = await Pet.Category.findAll({});
    queryCategory = JSON.parse(JSON.stringify(queryCategory));
    var arr = {};
    for (var i = 0; i < queryCategory.length - 1; i++) {
        arr[queryCategory[i].id] = queryCategory[i].category_name;
    }
    for (var i = 0; i < queryArticle.length - 1; i++) {
        var categoryId = queryArticle[i].category;
        queryArticle[i].category = arr[categoryId];//category名称替代id
        queryArticle[i].created_at = new Date(parseInt(queryArticle[i].created_at) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');//时间戳转换日期格式
    }
    return queryArticle;
};

module.exports = {
    'GET /articleInformations/' : articleInformations
};
