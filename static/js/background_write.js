
var writeBlog = new Vue({
    el: '#write_blog',
    data: {
        articleTitle:'',
        new_category:'',
        category: '',
        introduction: '',
        items: [],
    },
    methods: {
        submit: function () {
            var jqXHR = $.ajax({
                url: '/background/newArticle/',
                type: 'POST',
                data: {
                    articleTitle : writeBlog.articleTitle,
                    category : writeBlog.category,
                    new_category : writeBlog.new_category,
                    introduction : writeBlog.introduction,
                    content : getContent()
                },
                success: function (result) {
                    writeBlog.articleTitle = '';
                    writeBlog.category = '';
                    writeBlog.new_category = '';
                    writeBlog.introduction = '';
                    alert(result);
                },
                error: function (e) {
                    console.log(e);
                },
            });
        },
    },
    created: function () {
        var jqXHR2 = $.ajax({
            url: '/querycategory/',
            method: 'GET',
            success: function (result) {
                for (var i = 0; i < result.length; i++) {
                    Vue.set(writeBlog.items, i, result[i]);
                }
            },
            error: function (e) {
                console.log(e);
            },
        });
    }
});
