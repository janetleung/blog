const Pet = require('../Sequelize');

var queryCategory = async function (ctx, next) {
    console.log('query category! ');
    var querydata = await Pet.Category.findAll({});
    querydata = JSON.parse(JSON.stringify(querydata));
    var resData = [];
    for (var data in querydata) {
        resData.push(querydata[data].category_name);
    }
    ctx.body = resData;
};

module.exports = {
    'GET /querycategory/' : queryCategory
};
