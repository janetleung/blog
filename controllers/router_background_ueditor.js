const ueditor = require('ueditor');

const path = require('path');

var imgPath = path.dirname("../static/image");

var ueditorRouter = ueditor(imgPath, async function(ctx, next) {
    // ueditor 客户发起上传图片请求
    if(ctx.query.action === 'uploadimage'){
        var foo = ctx.response.ueditor;

        var imgname = ctx.response.ueditor.filename;

        var img_url = '/image/ueditor/';
        ctx.response.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
    }
    //  客户端发起图片列表请求
    else if (ctx.query.action === 'listimage'){
        var dir_url = '/images/ueditor/';
        ctx.response.ue_list(dir_url);  // 客户端会列出 dir_url 目录下的所有图片
    }
    // 客户端发起其它请求
    else {
        ctx.response.body = 'application/json';
        ctx.response.redirect('/ueditor/ueditor.config.json')
}})

module.exports = {
    "GET /ueditor/ue" : ueditorRouter
};
