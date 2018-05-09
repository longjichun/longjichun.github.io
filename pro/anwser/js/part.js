var BASEURL = 'http://test.app.onlyred.net/'
var getInitUrl = 'rednetMoment-http/rednetApi.opx?param='

var ifCanStart = false;
var param = {
    "header": {"userId":"38","version":"6.0"},
    "method": "answerInfo",
    "myParams":[19],
    "service": "cn.rednet.moment.services.AnswerApi",
    "uuid": "196CC2B6D81F4DAE9DCB1164F878334D"
}
function init() {

}
function ifInAnwserPeriod() {

}

(function(){
    // 开始首页
    var startTime = new Date('2018-05-06 18:01:00').getTime()
    var str = ['<i>','','</i>','时','<i>','','</i>','分','<i>','','</i>','秒'];
    setTimeout(function rerender(){
        var currentTime = new Date().getTime();
        var sub = startTime - currentTime;
        if(sub>0) {
            var d = new Date(sub)
            str[1] = d.getUTCHours() + 24*parseInt(sub/(24*60*60*1000));
            str[5] = d.getMinutes()
            str[9] = d.getSeconds()
            $("#startAnser").html(str.join("")).addClass("to-anwser")
            setTimeout(rerender,1000)
        } else {
            $("#startAnser").removeClass("to-anwser").html("开始答题")
        }
    },1000)
}());


/*路由*/
(function router() {

    // $("#fillMyInfo").click(function(){
    //     $("section").hide();
    //     $("#sec1").show()
    // })

    $("#startAnser").on("click",function(){
        var cookie = 'true'
        $("section").hide()
        if(cookie) {
            $("#sec3").show()
        } else {
            $("#sec1").show()
        }
        
    })
    // $(".btn-next").click(function(){
    //     $("section").hide()
    //     $("#sec4").show()
    // })
    $(".btn-reanwser").click(function(){
        $("section").hide()
        $("#sec3").show()
        totalTime()
    })
}());
/*路由*/


/* 工具函数 */
function fillNum(n) {
    if(n<10) {
        return '0'+n;
    } else {
        return n;
    }
}
function formatTime(n) {
    var h = parseInt(n/3600)
        m = parseInt(n/60)
        s = n%60;
    return fillNum(h) +':'+ fillNum(m)+ ':' + fillNum(s)
}
function strTojson(str) {
    if(typeof str == 'string') {
        return JSON.parse(str)
    } else {
        return str;
    }
}
/* 工具函数 */

(function personalInfo(){
    /* 表单信息*/
    var arr = [ 
                {"child":["请选择所在的区域"]},
                {"child":["芙蓉区","天心区","岳麓区","开福区","雨花区","长沙县","望城区","宁乡市","浏阳市","长沙县网上群众工作部"],"royal":"长沙"},
                {"child":["荷塘区","芦淞区","石峰区","天元区","株洲县","攸县","茶陵县","炎陵县","醴陵市","云龙区"],"royal":"株洲"},
                {"child":["雨湖区","岳塘区","湘潭县","湘乡市","韶山市","昭山示范区"],"royal":"湘潭"},
                {"child":["雁峰区","珠晖区","蒸湘区","南岳区","石鼓区","衡阳县","衡南县","衡山县","衡东县","祁东县","耒阳市","常宁市"],"royal":"衡阳"},
                {"child":["双清区","大祥区","北塔区","邵东县","新邵县","邵阳县","隆回县","洞口县","绥宁县","新宁县","城步县","武冈市"],"royal":"邵阳"},
                {"child":["岳阳楼区","云溪区","君山区","岳阳县","华容县","湘阴县","平江县","汨罗市","临湘市"],"royal":"岳阳"},
                {"child":["资阳区","赫山区","南县","桃江县","安化县","沅江市"],"royal":"益阳"},
                {"child":["娄星区","双峰县","新化县","冷水江市","涟源市"],"royal":"娄底"},
                {"child":["武陵区","鼎城区","安乡县","汉寿县","澧县","临澧县","桃源县","石门县","津市"],"royal":"常德"},
                {"child":["北湖区","苏仙区","桂阳县","宜章县","永兴县","嘉禾县","临武县","汝城县","桂东县","安仁县","资兴市"],"royal":"郴州"},
                {"child":["零陵区","冷水滩区","祁阳县","东安县","双牌县","道县","江永县","宁远县","蓝山县","新田县","江华县","金洞管理区","回龙圩管理区"],"royal":"永州"},
                {"child":["鹤城区","中方县","沅陵县","辰溪县","溆浦县","会同县","麻阳县","新晃县","芷江县","靖州县","通道县","洪江市","洪江区"],"royal":"怀化"},
                {"child":["吉首市","泸溪县","保靖县","古丈县","永顺县","龙山县","凤凰县","花垣县"],"royal":"湘西"},
                {"child":["永定区","武陵源区","慈利县","桑植县"],"royal":"张家界"}
        ];
    var optCache = ['<option value="0">请选择您所在的区县</option>'];
    $("#royal").on("change",function(v,n){
        var ind = $(this).val();
        if(ind != '0') {
            $('#royal').css({"color":"#444"})
            $('#zone').css({"color":"#444"})
        } else {
            $('#royal').css({"color":"#ccc"})
            $('#zone').css({"color":"#ccc"})
        }
        var str = ''
        if(optCache[ind]) {
            str = optCache[ind]
        } else {
            var childs = arr[ind].child;
            for(var i=0;i<childs.length;i++){
                var temp = ['<option>','','</option>']
                temp[1] = childs[i]
                str = str + temp.join("");
            }
            optCache[ind] = str;   
        }
        
        $("#zone").html(str);
    });

    $(".closeInfo").click(function(){
        $("section").hide()
        $("#sec1").show()
    })

    $("#fillMyInfo").on("click",function(){
        var name = $.trim( $(".forminfo input").eq(0).val() )
        var royal = $.trim( arr[ $("#royal").val() ].royal );
        var zone = $.trim( $("#zone").val() )
        var org = $.trim( $(".forminfo input").eq(1).val() )
        var pho = $.trim( $(".forminfo input").eq(2).val() )
        if(name.length<2) {
            alert('请填写真实姓名');
            return;
        }

        if(zone == '0') {
            alert("请选择您所在的区县");
            return;

        }

        if(org.length<2) {
            alert("请填写正确的单位名称")
            return;

        }

        if(!pho.match(/^1\d{10}$/)) {
            alert("请填写正确的手机号")
            return;
        }
        var param = {};
        goRegister(param)
    })
    
    function goRegister(param){
        $.ajax({
            url: regAPI,
            type: "get",
            async: false,
            dataType: "jsonp",
            jsonp: 'jsoncallback',
            jsonpCallback:"success_jsonpCallback",
            success: function(data){
                setTimeout(function() {
                  $("#mask").hide();
                }, 300);
                regbtn_flag=true;
                var data = data.body;
                if (data){
                  switch (data.status) {
                      case "-1": //非法提交
                          alert("系统内部错误");
                          break;
                      case "0": // 注册失败
                          alert("注册失败")
                          break;
                      case "1": // 注册成功
                          registerSucc()
                          break;
                      default:
                          break;
                  }
                }else{
                  alert("系统内部错误");
                }
        }});
    }
    function registerSucc(){
        console.log("register succ");
        $("section").hide();
        $("#sec1").show()
    }
}());



/* 答题部分 */
$("#startAnser").on("click",function(){
    runAnwser()
});

var usedTime = 0;
var runningTime = null;

function totalTime() {
    usedTime = 0;
    clearTimeout(runningTime)
    $(".header-time span").eq(0).html('00:00:00')
    setTimeout(function repeat() {
        var str = formatTime(usedTime++)
        $(".header-time span").eq(0).html(str)
        if(true) {
            runningTime = setTimeout(repeat,1000)
        }
    },1000)
}
function runAnwser() {
    totalTime()
    queryQuestion()
}

var currentQuesInd = 0;
var questions = [];
var questLen = 0;
var nextClicked = true;
function queryQuestion() {
    var url = 'rednetMoment-http/rednetApi.opx?param='
    var param = {
        "header":{"userId":"38","version":"6.0"},
        "method":"initAnswerInfoList",
        "myParams":[17],
        "service":"cn.rednet.moment.services.AnswerApi",
        "uuid":"196CC2B6D81F4DAE9DCB1164F878334D"
    };
    $.ajax({
        url: BASEURL+url+JSON.stringify(param),
        type: "get",
        dataType:"jsonp",
        jsonp: 'jsoncallback',
        jsonpCallback:"success_jsonpCallback",
        success: function(res){
            var body = strTojson(res.body);
            questions = body.answerList;
            questLen = body.answerCount;
            $("#sec3 .total").text( fillNum(questLen) );
            $("#sec3 .current").text( fillNum(currentQuesInd+1) );
            renderQues();
        }
    })
}

function renderQues(){
    // 渲染题目
    var item = questions[currentQuesInd]
    $(".question span").eq(0).html( item.btTitle )
    var tempStr = '<li class=""><i class="spritIcon"></i><span>{{}}</span><b class="spritIcon"></b></li>'
    var choiceStr = ''
    item.answerItems.forEach(function(item){
        choiceStr = choiceStr + tempStr.replace(/\{\{\}\}/,item.btItem)
    });
    $(".choice ul").html(choiceStr);
    nextClicked = false;
    $("#sec3 .current").text( fillNum(currentQuesInd+1) );
    anwserEventBind()
}

function anwserEventBind(arr) {
    var usedTime = 0;
    $(".choice ul li").off("click").on("click",function(e){
        if($(this).hasClass("choosed")) {
            // 已选择的情况下，又点击，表示取消选择
            $(this).removeClass("choosed")
        } else {
            if(true) {
                // 单选在已选择的情况下，选择其它的答案，需要取消当前的
                $(".choosed").removeClass("choosed")
            }
            $(this).addClass('choosed')
        }
        ifNext()
    })


    function ifNext() {
        // 是否显示按钮  下一题
        if( $(".choice").find(".choosed").length ) {
            $(".btn-next").show()
        } else {
            $(".btn-next").hide()
        }
    }

    $(".btn-next").click(function(){
        // 点击下一题
        if(nextClicked) return;
        nextClicked = true;
        examAnwser();
        setTimeout(function(){
            if(questLen == ++currentQuesInd) {
                // 已经全部答完
                $("section").hide()
                $("#sec4").show()
            } else {
                renderQues();
            }

        },1000)
        
    })
}

function examAnwser() {

}

/* 答题部分 */

(function(){
    // 个人成绩
    var name = '';
    var count = '';
    var rank = '';
    var rate = '';

}())


/*
分享
*/
(function(){
    shareLink()
    function shareLink() {
        $(".share img, .share span").click(function() {
            var index = $(this).parent().index(), name = null;
            switch (index) {
                case 0://新浪微博
                    name = "SinaWeiboShare";
                    break;
                case 1://微信好友
                    name = "WeixinFriendShare";
                    break;
                case 2://微信朋友圈
                    name = "WeixinJSShare";
                    break;
                case 3://QQ好友
                    name = "QQShare";
                    break;
                default:
                    name = "WeixinJSShare";
                    break;
            }
            if (name) {
                if (ostype == "android") {
                    if(shareFlag)
                        jsBridge.postNotification(name, '{"activity_id": "17", "title": "学习防空防灾知识,掌握防护生存技能", "link": "//moment.rednet.cn/activity/RFActivity/share.html?userid=' + userid + '&achvId=' + achvId +'&ostype=' + ostype + '", "desc": "郴州市人民防空办公室、郴州市教育局举办的中小学人防知识教育教师教案评比和学生网络竞答活动。", "img_url": "//moment.rednet.cn/common/img/RF-logo.png", "phoneNum": "", "is_update": "0"}');
                    else{
                        jsBridge.postNotification(name, '{"activity_id": "17", "title": "学习防空防灾知识,掌握防护生存技能", "link": "//moment.rednet.cn/activity/RFActivity/share.html?userid=' + userid  +'&ostype=' + ostype + '", "desc": "郴州市人民防空办公室、郴州市教育局举办的中小学人防知识教育教师教案评比和学生网络竞答活动。", "img_url": "//moment.rednet.cn/common/img/RF-logo.png", "phoneNum": "", "is_update": "0"}');
                    }

                } else if (ostype == "ios") {
                    if(shareFlag)
                        jsBridge.postNotification(name, {activity_id: '17', title: '学习防空防灾知识,掌握防护生存技能', link: '//moment.rednet.cn/activity/RFActivity/share.html?userid=' + userid + '&achvId=' + achvId +'&ostype=' + ostype, desc: '郴州市人民防空办公室、郴州市教育局举办的中小学人防知识教育教师教案评比和学生网络竞答活动。', img_url: '//moment.rednet.cn/common/img/RF-logo.png', phoneNum: '', is_update: '0'});
                    else{
                        jsBridge.postNotification(name, {activity_id: '17', title: '学习防空防灾知识,掌握防护生存技能', link: '//moment.rednet.cn/activity/RFActivity/share.html?userid=' + userid  +'&ostype=' + ostype, desc: '郴州市人民防空办公室、郴州市教育局举办的中小学人防知识教育教师教案评比和学生网络竞答活动。', img_url: '//moment.rednet.cn/common/img/RF-logo.png', phoneNum: '', is_update: '0'});
                    }

                }
                $(".share").hide();
            }
        });
        $(".share>div>div").click(function() {
            $(".share").hide();
        });
    }
    
}());
