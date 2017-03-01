const Pet = require('./Sequelize');

//查询博客配置
module.exports = async function () {
        var queryData = await Pet.Information.findOne({
            where : {
                id : 1
            }
        });
        queryData = JSON.parse(JSON.stringify(queryData));
        return queryData;
};
