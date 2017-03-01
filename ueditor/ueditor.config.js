(function () {


    var URL = window.UEDITOR_HOME_URL || getUEBasePath();


    window.UEDITOR_CONFIG = {

        //为编辑器实例添加一个路径，这个不能被注释
        UEDITOR_HOME_URL: URL

        // 服务器统一请求接口路径
        , serverUrl: URL+'ue'

        //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的从新定义

        , toolbars: [["fullscreen","source","undo","redo","insertunorderedlist","insertorderedlist","link","unlink","help","attachment","simpleupload","insertimage","emotion","pagebreak","date","bold","italic","fontborder","strikethrough","underline","forecolor","justifyleft","justifycenter","justifyright","justifyjustify","paragraph","rowspacingbottom","rowspacingtop","lineheight"]]
        //当鼠标放在工具栏上时显示的tooltip提示,留空支持自动多语言配置，否则以配置值为准
        //,labelMap:{
        //    'anchor':'', 'undo':''
        //}

        //语言配置项,默认是zh-cn。有需要的话也可以使用如下这样的方式来自动多语言切换，当然，前提条件是lang文件夹下存在对应的语言文件：
        //lang值也可以通过自动获取 (navigator.language||navigator.browserLanguage ||navigator.userLanguage).toLowerCase()
        //,lang:"zh-cn"
        //,langPath:URL +"lang/"

        //主题配置项,默认是default。有需要的话也可以使用如下这样的方式来自动多主题切换，当然，前提条件是themes文件夹下存在对应的主题文件：
        //现有如下皮肤:default
        //,theme:'default'
        //,themePath:URL +"themes/"

        //,zIndex : 900     //编辑器层级的基数,默认是900

        //针对getAllHtml方法，会在对应的head标签中增加该编码设置。
        //,charset:"utf-8"

        //若实例化编辑器的页面手动修改的domain，此处需要设置为true
        //,customDomain:false

        //常用配置项目
        //,isShow : true    //默认显示编辑器

        //,textarea:'editorValue' // 提交表单时，服务器获取编辑器提交内容的所用的参数，多实例时可以给容器name属性，会将name给定的值最为每个实例的键值，不用每次实例化的时候都设置这个值

        //,initialContent:'欢迎使用ueditor!'    //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子

        //,autoClearinitialContent:true //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了

        //,focus:false //初始化时，是否让编辑器获得焦点true或false

        //如果自定义，最好给p标签如下的行高，要不输入中文时，会有跳动感
        //,initialStyle:'p{line-height:1em}'//编辑器层级的基数,可以用来改变字体等

        //,iframeCssUrl: URL + '/themes/iframe.css' //给编辑器内部引入一个css文件

        //,initialFrameWidth:1000  //初始化编辑器宽度,默认1000
        //,initialFrameHeight:320  //初始化编辑器高度,默认320

        //,readonly : false //编辑器初始化结束后,编辑区域是否是只读的，默认是false

        //,autoClearEmptyNode : true //getContent时，是否删除空的inlineElement节点（包括嵌套的情况）

        //,fullscreen : false //是否开启初始化时即全屏，默认关闭

        //,imagePopup:true      //图片操作的浮层开关，默认打开

        //,emotionLocalization:false //是否开启表情本地化，默认关闭。若要开启请确保emotion文件夹下包含官网提供的images表情文件夹

        //粘贴只保留标签，去除标签所有属性
        //,retainOnlyLabelPasted: false

        //,pasteplain:false  //是否默认为纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴
        //纯文本粘贴模式下的过滤规则
        //'filterTxtRules' : function(){
        //    function transP(node){
        //        node.tagName = 'p';
        //        node.setStyle();
        //    }
        //    return {
        //        //直接删除及其字节点内容
        //        '-' : 'script style object iframe embed input select',
        //        'p': {$:{}},
        //        'br':{$:{}},
        //        'div':{'$':{}},
        //        'li':{'$':{}},
        //        'caption':transP,
        //        'th':transP,
        //        'tr':transP,
        //        'h1':transP,'h2':transP,'h3':transP,'h4':transP,'h5':transP,'h6':transP,
        //        'td':function(node){
        //            //没有内容的td直接删掉
        //            var txt = !!node.innerText();
        //            if(txt){
        //                node.parentNode.insertAfter(UE.uNode.createText(' &nbsp; &nbsp;'),node);
        //            }
        //            node.parentNode.removeChild(node,node.innerText())
        //        }
        //    }
        //}()

        //,allHtmlEnabled:false //提交到后台的数据是否包含整个html字符串

        //insertorderedlist
        //有序列表的下拉配置,值留空时支持多语言自动识别，若配置值，则以此值为准
        //,'insertorderedlist':{
        //      //自定的样式
        //        'num':'1,2,3...',
        //        'num1':'1),2),3)...',
        //        'num2':'(1),(2),(3)...',
        //        'cn':'一,二,三....',
        //        'cn1':'一),二),三)....',
        //        'cn2':'(一),(二),(三)....',
        //     //系统自带
        //     'decimal' : '' ,         //'1,2,3...'
        //     'lower-alpha' : '' ,    // 'a,b,c...'
        //     'lower-roman' : '' ,    //'i,ii,iii...'
        //     'upper-alpha' : '' , lang   //'A,B,C'
        //     'upper-roman' : ''      //'I,II,III...'
        //}

        //insertunorderedlist
        //无序列表的下拉配置，值留空时支持多语言自动识别，若配置值，则以此值为准
        //,insertunorderedlist : { //自定的样式
        //    'dash' :'— 破折号', //-破折号
        //    'dot':' 。 小圆圈', //系统自带
        //    'circle' : '',  // '○ 小圆圈'
        //    'disc' : '',    // '● 小圆点'
        //    'square' : ''   //'■ 小方块'
        //}
        //,listDefaultPaddingLeft : '30'//默认的左边缩进的基数倍
        //,listiconpath : 'http://bs.baidu.com/listicon/'//自定义标号的路径
        //,maxListLevel : 3 //限制可以tab的级数, 设置-1为不限制

        //,autoTransWordToList:false  //禁止word中粘贴进来的列表自动变成列表标签

        //paragraph
        //段落格式 值留空时支持多语言自动识别，若配置，则以配置值为准
        //,'paragraph':{'p':'', 'h1':'', 'h2':'', 'h3':'', 'h4':'', 'h5':'', 'h6':''}

        //rowspacingtop
        //段间距 值和显示的名字相同
        //,'rowspacingtop':['5', '10', '15', '20', '25']

        //rowspacingBottom
        //段间距 值和显示的名字相同
        //,'rowspacingbottom':['5', '10', '15', '20', '25']

        //lineheight
        //行内间距 值和显示的名字相同
        //,'lineheight':['1', '1.5','1.75','2', '3', '4', '5']

        //快捷菜单
        //,shortcutMenu:["fontfamily", "fontsize", "bold", "italic", "underline", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist"]

        //tab
        //点击tab键时移动的距离,tabSize倍数，tabNode什么字符做为单位
        //,tabSize:4
        //,tabNode:'&nbsp;'

        //undo
        //可以最多回退的次数,默认20
        //,maxUndoCount:20
        //当输入的字符数超过该值时，保存一次现场
        //,maxInputCount:1

        //scaleEnabled
        //是否可以拉伸长高,默认true(当开启时，自动长高失效)
        //,scaleEnabled:false
        //,minFrameWidth:800    //编辑器拖动时最小宽度,默认800
        //,minFrameHeight:220  //编辑器拖动时最小高度,默认220

        //pageBreakTag
        //分页标识符,默认是_ueditor_page_break_tag_
        //,pageBreakTag:'_ueditor_page_break_tag_'

        //sourceEditor
        //源码的查看方式,codemirror 是代码高亮，textarea是文本框,默认是codemirror
        //注意默认codemirror只能在ie8+和非ie中使用
        //,sourceEditor:"codemirror"
        //如果sourceEditor是codemirror，还用配置一下两个参数
        //codeMirrorJsUrl js加载的路径，默认是 URL + "third-party/codemirror/codemirror.js"
        //,codeMirrorJsUrl:URL + "third-party/codemirror/codemirror.js"
        //codeMirrorCssUrl css加载的路径，默认是 URL + "third-party/codemirror/codemirror.css"
        //,codeMirrorCssUrl:URL + "third-party/codemirror/codemirror.css"
        //编辑器初始化完成后是否进入源码模式，默认为否。
        //,sourceEditorFirst:false

        //iframeUrlMap
        //dialog内容的路径 ～会被替换成URL,垓属性一旦打开，将覆盖所有的dialog的默认路径
        //,iframeUrlMap:{
        //    'anchor':'~/dialogs/anchor/anchor.html',
        //}

    };

    function getUEBasePath(docUrl, confUrl) {

        return getBasePath(docUrl || self.document.URL || self.location.href, confUrl || getConfigFilePath());

    }

    function getConfigFilePath() {

        var configPath = document.getElementsByTagName('script');

        return configPath[ configPath.length - 1 ].src;

    }

    function getBasePath(docUrl, confUrl) {

        var basePath = confUrl;


        if (/^(\/|\\\\)/.test(confUrl)) {

            basePath = /^.+?\w(\/|\\\\)/.exec(docUrl)[0] + confUrl.replace(/^(\/|\\\\)/, '');

        } else if (!/^[a-z]+:/i.test(confUrl)) {

            docUrl = docUrl.split("#")[0].split("?")[0].replace(/[^\\\/]+$/, '');

            basePath = docUrl + "" + confUrl;

        }

        return optimizationPath(basePath);

    }

    function optimizationPath(path) {

        var protocol = /^[a-z]+:\/\//.exec(path)[ 0 ],
            tmp = null,
            res = [];

        path = path.replace(protocol, "").split("?")[0].split("#")[0];

        path = path.replace(/\\/g, '/').split(/\//);

        path[ path.length - 1 ] = "";

        while (path.length) {

            if (( tmp = path.shift() ) === "..") {
                res.pop();
            } else if (tmp !== ".") {
                res.push(tmp);
            }

        }

        return protocol + res.join("/");

    }
   function upFiles() {
        var myFiles = _editor.getDialog("attachment");
        myFiles.open();
    }
    window.UE = {
        getUEBasePath: getUEBasePath
    };

})();
