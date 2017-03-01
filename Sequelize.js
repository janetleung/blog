const Sequelize = require('sequelize');

const config = require('./mysql_config');

//实例化
var sequelize = new Sequelize(config.databases, config.username, config.password, {
    host : config.host,
    dialect : 'mysql',
    port : config.port,
    pool : {
        max : 5,
        min : 0,
        idle : 30000
    }
});

//设置表blog_category模型映射
var Category = sequelize.define('blog_category', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    category_name : Sequelize.STRING(255),
}, {
    timestamps : false,
    freezeTableName : true,
});

//设置表blog_article模型映射
var Article = sequelize.define('blog_article', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    title : Sequelize.STRING(255),
    content : Sequelize.TEXT,
    created_at : Sequelize.BIGINT,
    category : {
        type : Sequelize.INTEGER,
    },
    introduction : Sequelize.TEXT
}, {
    timestamps : false,
    freezeTableName : true,
});

//设置表blog_information模型映射
var Information = sequelize.define('blog_information', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    title : Sequelize.STRING(255),
    describe : Sequelize.STRING(255),
    user : Sequelize.STRING(255),
    password : Sequelize.STRING(255)
}, {
    timestamps : false,
    freezeTableName : true,
});

module.exports = { Article, Category, Information };
