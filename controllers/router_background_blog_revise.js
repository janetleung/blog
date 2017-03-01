const blogConfig = require('../blog.config.js');

const Pet = require('../Sequelize');

var blogRevise = async function (ctx, next) {
    for (var item in ctx.request.body) {
        if (ctx.request.body[item]) {
            var reviseData = await Pet.Information.findOne({
                where : {
                    id : 1
                }
            });
            reviseData[item] = ctx.request.body[item];
            await reviseData.save();
        }
    }
    ctx.body = { setUp : true, text : '设置成功！' };
};


module.exports = {
    'POST /blogRevise/' : blogRevise
};
