var indexHtml = new Vue({
    el: '#index_html',
    data: {
        items : [],
        page : false,
        paginations : [],
    },
    methods: {
        queryArticleList: function (pagination) {
            var jqXHR = $.ajax({
                url: '/articleInformations/',
                method: 'GET',
                data:{
                    page: pagination
                },
                success: function (result) {
                    indexHtml.items = [];
                    for (var i = 0; i < result.length - 1; i++) {
                        indexHtml.items.splice(i, 1, result[i]);
                    }
                },
                error: function (e) {
                    console.log(e);
                },
            });
        },
        article_html: function (id) {
            return '/article/?id=' + id;
        },

    },
    created: function () {
        var jqXHR = $.ajax({
            url: '/articleInformations/',
            method: 'GET',
            data:{
                page: 1
            },
            success: function (result) {
                for (var i = 0; i < result.length - 1; i++) {
                    indexHtml.items.push(result[i]);
                }
                var Nums = Math.ceil(result[result.length - 1].id_nums / 8);
                if (Nums == 0) {
                    return;
                } else {
                    for (var i = 1; i < (Nums + 1); i++) {
                        indexHtml.paginations.push(i);
                        indexHtml.page = true;
                    }
                }
            },
            error: function (e) {
                console.log(e);
            },
        });
    }
});
