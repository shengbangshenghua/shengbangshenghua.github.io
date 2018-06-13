/*
 *   京东快报部分
 */

//延迟3秒后，一直3秒执行一次
setInterval(function () {
    x();
}, 3000);

function x() {
    $(".news .center .info").css({"transform": "translateY(-16px)", "transition": "1s"});
    //延迟1秒后执行1次
    setTimeout(function () {
        e();
        h();
    }, 1000);
}

//归零
function e() {
    $(".news .center .info").css({"transform": "translateY(0)", "transition": "0s"});
}

//把第一个移动到末尾
function h() {
    $(".news .center .info .text").eq(0).appendTo($(".news .center .info"));
}


//首页京东秒杀部分的效果（倒计时）

var zxx = {
    $: function (id) {
        return document.getElementById(id);
    },
    //例如，Date.UTC(2030, 6, 27, 16, 34)，表示的就是2030年7月27日161时34分0秒（月份需要加1），然后将这个参数替换“参数1”就可以了。
    futureDate: Date.UTC(2050, 4, 31, 8, 0, 0),
    obj: function () {
        return {
            sec: zxx.$("sec"),
            mini: zxx.$("mini"),
            hour: zxx.$("hour"),
            day: zxx.$("day"),
            month: zxx.$("month"),
            year: zxx.$("year")
        }
    }
};
fnTimeCountDown(zxx.futureDate, zxx.obj());


//为你推荐 - 开始
if (document.querySelector("#floor") != null) {
    new Vue({
        el: "#floor",
        data: {
            floors: [
                {
                    name: "名字",
                    link: "http://www.baidu.com/",
                    link1: "http://www.qq.com/",
                    img: "img/floor/1.jpg",
                    price: "100",
                    price1: "80",
                    ico: "ziying"
                },
                {
                    name: "名字",
                    link: "http://www.baidu.com/",
                    link1: "http://www.qq.com/",
                    img: "img/floor/1.jpg",
                    price: "100",
                    price1: "80",
                    ico: "quanqiugou"
                },
                {
                    name: "名字",
                    link: "http://www.baidu.com/",
                    link1: "http://www.qq.com/",
                    img: "img/floor/1.jpg",
                    price: "100",
                    price1: "80",
                    ico: "ziying"
                },
                {
                    name: "名字",
                    link: "http://www.baidu.com/",
                    link1: "http://www.qq.com/",
                    img: "img/floor/1.jpg",
                    price: "100",
                    price1: "80",
                    ico: "ziying"
                },
                {
                    name: "产品",
                    link: "http://www.baidu.com/",
                    link1: "http://www.qq.com/",
                    img: "img/floor/2.jpg",
                    price: "200",
                    price1: "180",
                    ico: "quanqiugou"
                },
                {
                    name: "非自营产品",
                    link: "http://www.baidu.com/",
                    link1: "http://www.qq.com/",
                    img: "img/floor/1.jpg",
                    price: "200",
                    price1: "180",
                    ico: "ziying"
                },
                {
                    name: "久熵 小香风阔腿裤套装女2018夏季新款女装裤子 韩版气质淑女时尚高腰显瘦九分休闲裤夏两件套 黑色 L",
                    link: "https://item.m.jd.com/product/11472766022.html",
                    link1: "https://home.m.jd.com/myjd/similar/list.action?skuId=11472766022",
                    img: "img/floor/5b0b0a56Na2c65bbf.jpg!q70.jpg",
                    price: "188",
                    price1: "180",
                    ico: "ziying"
                },
                {
                    name: "非自营产品",
                    link: "http://www.baidu.com/",
                    link1: "http://www.qq.com/",
                    img: "img/floor/1.jpg",
                    price: "200",
                    price1: "180",
                    ico: ""
                }
            ]
        }
    })
}

if (document.querySelector("#mainsort") != null) {
    new Vue({
        el: "#mainsort",
        data: {
            lists: [
                {name: "小米", img: "img/sort/5a1692eeN105a64b4.png", link: ""},
                {name: "华为", img: "img/sort/5a1692e2Nbea6e136.jpg", link: ""},
                {name: "荣耀", img: "img/sort/5a1692e2N6df7c609.jpg", link: ""},
                {name: "iPhone", img: "img/sort/5a1692ebN8ae73077.jpg", link: ""},
                {name: "vivo", img: "img/sort/5a169244Nff0179e0.png", link: ""},
                {name: "OPPO", img: "img/sort/5a169254N4bbbd9fb.png", link: ""}
            ],
            lists1: [
                {name: "电风扇", img: "img/sort/5b056472N771896da.png", link: ""},
                {name: "华为", img: "img/sort/5a1692e2Nbea6e136.jpg", link: ""},
                {name: "荣耀", img: "img/sort/5a1692e2N6df7c609.jpg", link: ""},
                {name: "iPhone", img: "img/sort/5a1692ebN8ae73077.jpg", link: ""},
                {name: "vivo", img: "img/sort/5a169244Nff0179e0.png", link: ""},
                {name: "OPPO", img: "img/sort/5a169254N4bbbd9fb.png", link: ""}
            ],
            lists2: [
                {name: "电水壶", img: "img/sort/5a17f1d2N8078d5e6.jpg", link: ""},
                {name: "华为", img: "img/sort/5a1692e2Nbea6e136.jpg", link: ""},
                {name: "荣耀", img: "img/sort/5a1692e2N6df7c609.jpg", link: ""},
                {name: "iPhone", img: "img/sort/5a1692ebN8ae73077.jpg", link: ""},
                {name: "vivo", img: "img/sort/5a169244Nff0179e0.png", link: ""},
                {name: "OPPO", img: "img/sort/5a169254N4bbbd9fb.png", link: ""}
            ]
        }
    })
}


//由于top变量是一个保留关键字，所以声明的变量，不能为top，改成了fanhuidingbu（javascrip 保留词）
//var fanhuidingbu = document.querySelector("#top");
//console.log(fanhuidingbu);
/*
 fanhuidingbu.addEventListener("click",function(){
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
 });
 */
/*
 fanhuidingbu.addEventListener("click",function(){
 //一直执行吗
 var t = setInterval(function(){

 document.body.scrollTop = document.body.scrollTop -20;
 document.documentElement.scrollTop = document.documentElement.scrollTop -20;
 console.log(document.body.scrollTop);

 //如果返回到顶部了，就把计时器清除掉
 if(document.body.scrollTop === 0){
 clearInterval(t);
 }

 },10)
 });
 */


//js滚动条事件
window.onscroll = function () {


    //.searech 顶部搜索条滚动到一定距离变背景颜色的功能
    var search = document.querySelector(".search");
    if (search != null) {
        if (document.body.scrollTop > 115) {
            search.style.background = "red";
        } else {
            search.style.background = "transparent";
        }
    }

    var totop = document.getElementById("top");
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 370) {
        totop.style.display = "inline-block";
    } else {
        totop.style.display = "none";
    }
}

//js返回顶部非常麻烦
//有的同学用jquery


$("#top").click(function () {
    $("html,body").animate({scrollTop: 0}, 500);
})


var search = document.querySelector(".search");
//判断当前页面是否有这个元素，如果有才执行，如果没有则不执行
if (search != null) {
    console.log("这个页面有.search");
} else {
    console.log("这个页面没有.search");
}


//分类页选项卡的代码

var sortNav = document.querySelectorAll(".sort-nav > li");
console.log(sortNav);

var sortList = document.querySelectorAll(".sort-list > div");
console.log(sortList);


//js里面获取索引的方法
for (var i = 0; i < sortNav.length; i++) {
    sortNav[i].index = i;
    sortNav[i].onclick = function () {
        console.log(this.index);

        //先全部移除class
        for (var i = 0; i < sortNav.length; i++) {
            sortNav[i].classList.remove("active");
            sortList[i].classList.remove("active");
        }
        //然后给当前的追加class
        sortNav[this.index].classList.add("active");
        sortList[this.index].classList.add("active");

    }
}



var close = document.querySelector("#close");
var ad = document.querySelector(".ad");

if(sessionStorage.ad == "false"){
    ad.style.display = "none";
}else{
    ad.style.display = "block";
}

close.onclick = function () {
    ad.style.display = "none";
    sessionStorage.ad = "false";
};

