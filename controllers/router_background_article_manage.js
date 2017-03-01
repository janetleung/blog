var articleManage = async function (ctx, next) {
    ctx.render('background_article_manage.html');
};

module.exports = {
    'GET /articleManage/' : articleManage
};
