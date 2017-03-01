var blogManage = async function (ctx, next) {
    ctx.render('background_blog_manage.html')
};

module.exports = {
    'GET /blogManage/' : blogManage
};
