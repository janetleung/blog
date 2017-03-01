Blog
==========

用Node编写，基于koa2、nunjucks、Sequelize、mysql、ueditor的博客及博客后台管理系统。

### 安装依赖

```bash
npm install
```

### 进行本地mysql数据库建表

```bash
数据库表有：blog_article, blog_category, blog_information。
字段可查看Sequelize.js的模型配置。
```
### 进行mysql数据库配置

```javascript
module.exports = {
    databases : ,
    username : ,
    password : ,
    host : 'localhost',
    port : 3306
};

```

### 运行node服务器

```bash
node start.js
```


### 运行程序
http://127.0.0.1:3001
