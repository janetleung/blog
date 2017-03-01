const Pet = require('../Sequelize');

var deleteArticle = async function (ctx, next) {
    var id = ctx.query.id;
    var deleteData = await Pet.Article.findOne({
        where : {
            id : id
        }
    });
    if (deleteData) {
        deleteData = await deleteData.destroy();
        ctx.body = "删除成功!"
    } else {
        ctx.body = "删除出错，请重试！"
    }
};

module.exports = {
    'GET /deleteArticle/' : deleteArticle
};
