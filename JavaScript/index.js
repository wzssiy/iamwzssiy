//栏目大全鼠标经过 显示 隐藏函数1
changeHide1 = function (move1, showBox) {
    for (let i = 0; i < move1.length; i++) {
        move1[i].addEventListener('mouseover', function () {
            showBox[i].style.display = 'block';
            // hideA[i].style.color = '#0084ff';
            switch (i) {
                case 0:
                    aCln[2].classList.add('showCln');
                    imgIcon[2].style.background = 'url(./images/imgc' + (3) + '.png) no-repeat';
                    break;
                case 1:
                    aCln[5].classList.add('showCln');
                    imgIcon[5].style.background = 'url(./images/imgc' + (4) + '.png) no-repeat';
                    break;
                case 2:
                    aCln[6].classList.add('showCln');
                    imgIcon[6].style.background = 'url(./images/imgc' + (7) + '.png) no-repeat';
                    break;
                case 3:
                    aCln[7].classList.add('showCln');
                    imgIcon[7].style.background = 'url(./images/imgc' + (8) + '.png) no-repeat';
                    break;
                case 4:
                    aCln[8].classList.add('showCln');
                    imgIcon[8].style.background = 'url(./images/imgc' + (9) + '.png) no-repeat';
                    break;
                case 5:
                    aCln[9].classList.add('showCln');
                    imgIcon[9].style.background = 'url(./images/imgc' + (10) + '.png) no-repeat';
                    break;
            }
        })
        move1[i].addEventListener('mouseout', function () {
            showBox[i].style.display = 'none';
            // hideA[i].style.color = '#222';
            switch (i) {
                case 0:
                    aCln[2].classList.remove('showCln');
                    imgIcon[2].style.background = 'url(./images/img' + (3) + '.png) no-repeat';
                    break;
                case 1:
                    aCln[5].classList.remove('showCln');
                    imgIcon[5].style.background = 'url(./images/img' + (4) + '.png) no-repeat';
                    break;
                case 2:
                    aCln[6].classList.remove('showCln');
                    imgIcon[6].style.background = 'url(./images/img' + (7) + '.png) no-repeat';
                    break;
                case 3:
                    aCln[7].classList.remove('showCln');
                    imgIcon[7].style.background = 'url(./images/img' + (8) + '.png) no-repeat';
                    break;
                case 4:
                    aCln[8].classList.remove('showCln');
                    imgIcon[8].style.background = 'url(./images/img' + (9) + '.png) no-repeat';
                    break;
                case 5:
                    aCln[9].classList.remove('showCln');
                    imgIcon[9].style.background = 'url(./images/img' + (10) + '.png) no-repeat';
                    break;
            }
        })
    }
}

//移除 first类名
moveBlue = function (targets, key) {
    for (let j = 0; j < targets.length; j++) {
        targets[j].classList.remove('first');
        targets[j].style.color = '#000';
        targets[j].style.backgroundImage = 'url(./images/Icon0' + (j + 2) + '.png)';
    }
    targets[key].classList.add('first');
}

//判断当前是否有 'first'类名
judge = function (target, index) {
    if (target.classList.contains('first')) {
        target.style.backgroundImage = 'url(./images/Icon0' + (index + 2) + '_hover.png)';
        target.style.color = '#0084FF';
    }
}

// 两个切换函数
allChange = function (main, one, two, method, callback) {
    main.addEventListener(method, function () {
        one.style.display = 'none';
        two.style.display = 'block';
        if (callback) {
            callback();
        }
    })
}

// 下拉图标旋转
function rorate1(obj, target, key) {
    obj.style.animation = "rorate1 .3s forwards";
    obj.style.background = 'url(./images/' + target + '.png) no-repeat';
    obj.parentNode.style.color = key;
}
function rorate2(obj, target, key) {
    obj.style.animation = "rorate2 .3s forwards";
    obj.style.background = 'url(./images/' + target + '.png) no-repeat';
    obj.parentNode.style.color = key;
}

// display 设置
function changeNav(obj, target) {
    for (let i = 0; i < obj.length; i++) {
        obj[i].style.display = target;
    }
}

// 判断鼠标移入方向
function mouseDirection(wrap, ev, callback) {
    var dirs = ["top", "right", "bottom", "left"];
    var w = wrap.offsetWidth;
    var h = wrap.offsetHeight;
    var toTop = wrap.getBoundingClientRect().top + document.documentElement.scrollTop;
    var x = (ev.pageX - wrap.getBoundingClientRect().left - (w / 2)) * (w > h ? (h / w) : 1); //获取当前鼠标的x轴位置 
    var y = (ev.pageY - toTop - (h / 2)) * (h > w ? (w / h) : 1);
    var direction = Math.round((((Math.atan2(y, x) * 180 / Math.PI) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左” 
    if (callback) {
        callback(dirs[direction]);
    }
}

// 点击图标滚动页面
function scrollIcon(target) {
    window.scrollTo({
        top: target,
        left: 0,
        behavior: 'smooth'
    })
}

//阻止冒泡
function stopFunc(e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true
}

// 判断隐藏导航栏哪个下拉菜单
function whichIndex(target, target1) {
    hideLists[target1].style.display = 'block';
    switch (target) {
        case 0:
            hideLists[0].style.height = '230px';
            break;
        case 1:
            hideLists[1].style.height = '260px';
            break;
        case 2:
            hideLists[2].style.height = '170px';
            break;
        case 3:
            hideLists[3].style.height = '445px';
            break;
        default:
            break;
    }
}
// 导航栏切换开始
var politic = document.querySelectorAll('.politics');
var defaults = document.querySelector('.default');
var rthides = document.querySelectorAll('.rthide');
var select = document.querySelectorAll('.list_left .select');
for (let i = 0; i < politic.length; i++) {
    // 大标题导航栏
    politic[i].addEventListener('mouseover', function () {
        defaults.style.display = 'none';
        rthides[i].style.display = 'block';
        rorate1(select[i], 'selectRed', '#c81623');
    })
    politic[i].addEventListener('mouseout', function (e) {
        mouseDirection(politic[i], e, function (dir) {
            switch (dir) {
                case 'top':
                case 'left':
                case 'right':
                    changeNav(rthides, 'none');
                    defaults.style.display = 'block';
                    rorate2(select[i], 'select', '#fff');
                    break;
                case 'bottom':
                    defaults.style.display = 'none';
                    rthides[i].style.display = 'block';
                    rorate1(select[i], 'selectRed', '#c81623');
                    break;
            }
        });
    })

    // 小标题导航栏
    allChange(rthides[i], defaults, rthides[i], 'mouseover');
    rthides[i].addEventListener('mouseover', function () {
        rorate1(select[i], 'selectRed', '#c81623');
    })
    rthides[i].addEventListener('mouseout', function () {
        changeNav(rthides, 'none');
        defaults.style.display = 'block';
        rorate2(select[i], 'select', '#fff');
    })
}

// 搜索框开始
var body = document.querySelector('body');
var search = document.querySelector('.search');
var searchnav = document.querySelector('.searchnav');
var leftSch = document.querySelector('.leftSch');
var schText = document.querySelector('.leftSch>span') //已选 选项
var leftSel = document.querySelector('.leftSel'); //点击下拉出现 网页视频选配盒子
var selA = document.querySelector('.leftSel>p:first-child'); //账号input
var selB = document.querySelector('.leftSel>p:last-child');  //密码input

// 点击空白处隐藏盒子
document.onclick = function () {
    // 搜索框下拉
    searchnav.style.width = '0';
    searchnav.style.transition = "all .7s";
    // 登录框下拉菜单
    login.style.height = '0';
    login.style.transition = "all .7s";
    //热搜榜
    changeNav(inputHide, 'none');
}

search.addEventListener('click', function (e) {
    stopFunc(e);
    searchnav.style.width = '440px';
    searchnav.style.transition = "all .7s";
})
searchnav.addEventListener('click', function (e) {
    stopFunc(e);
})

// 判断搜索框选项文字
function jundgeText() {
    if (schText.innerHTML == '网页') {
        selA.style.color = '#0084ff';
        selB.style.color = '#666';
    }
    else {
        selB.style.color = '#0084ff';
        selA.style.color = '#666';
    }
}
leftSch.addEventListener('click', function () {
    leftSel.style.display = 'block';
    jundgeText();
})

selA.addEventListener('click', function () {
    schText.innerHTML = selA.innerHTML;
    jundgeText()
})
selB.addEventListener('click', function () {
    schText.innerHTML = selB.innerHTML;
    jundgeText()
})

// 登录框开始
var login = document.querySelector('.login');
var mine = document.querySelector('.mine');
var inputs = document.querySelectorAll('.lgnBox>input');
var inputTxt = document.querySelector('.txtBox>input') //账号input
var inputTxtA = document.querySelector('.pwdBox>input:first-child'); //密码文本input
var inputPwd = document.querySelector('.pwdBox>input:last-child'); //密码input
mine.addEventListener('click', function (e) {
    stopFunc(e);
    login.style.height = '280px';
    login.style.transition = "all .7s";
})

login.addEventListener('click', function (e) {
    stopFunc(e);
})

// '密码'文本框 和 密码框切换
allChange(inputTxtA, inputTxtA, inputPwd, 'focus', function () {
    inputPwd.focus();
})

inputTxt.addEventListener('focus', function () {
    if (this.value == '账号')
        this.value = '';
    else
        this.value == '账号';
})
inputTxt.onblur = function () {
    this.value = '账号';
}

// 分类框开始
var more = document.querySelector('.more');
var classify = document.querySelector('.classify');
var classify_nav = document.querySelector('.classify_nav');
var close = document.querySelector('.close');
function closeOpen(obj, target, callback) {
    obj.addEventListener('click', function () {
        classify.style.height = target;
        classify.style.transition = "all .7s";
        if (callback)
            callback();
    })
}
closeOpen(more, '100%', function () {
    body.parentNode.style.overflowY = "hidden";
    classify_nav.style.overflowY = 'auto';
})
closeOpen(close, '0', function () {
    body.parentNode.style.overflowY = "auto";
})

// 搜索框点击 热搜榜出现
var inputSch = document.querySelectorAll('.search>input');
var inputHide = document.querySelectorAll('.search .inputHide');
for (let i = 0; i < inputHide.length; i++) {
    inputSch[i].onclick = function (e) {
        stopFunc(e);
        // 点击input 热搜榜出现
        changeNav(inputHide, 'block');

        inputHide.onclick = function (e) {
            stopFunc(e);
        }
    }
}

// 轮播图 正在热播滚动开始
var btn_pre = document.querySelector('.btn-pre');       //轮播图左按钮
var btn_aft = document.querySelector('.btn-aft');       //轮播图右按钮
var swiperList = document.querySelector('.imgsBack ul');//轮播图热播ul
var swiperItem = document.querySelectorAll('.imgsBack ul>li');
var afterKey = document.querySelector('.afterKey'); //设置after属性
var numSwiper = 0; //正在热播点击次数
btn_pre.addEventListener('click', function () {
    switch (numSwiper) {
        case 2:
            numSwiper -= 1;
            swiperList.style.left = '-470px';
            btn_aft.style.display = 'block';
            afterKey.classList.add('afterKey');
            break;
        case 1:
            numSwiper -= 1;
            this.style.display = 'none';
            swiperList.style.left = '0';
            afterKey.classList.add('afterKey');
            break;
        default:
            break;
    }
})
btn_aft.addEventListener('click', function () {
    btn_pre.style.display = 'block';
    switch (numSwiper) {
        case 0:
            numSwiper += 1;
            swiperList.style.left = '-1175px';
            break;
        case 1:
            numSwiper += 1;
            this.style.display = 'none';
            swiperList.style.left = '-1645px';
            afterKey.classList.remove('afterKey');
            break;
        default:
            break;
    }

})
// 轮播图 正在热播滚动结束

// 手机二维码移动
var phone = document.querySelector('.phone');
var code1 = document.querySelector('.phoneCode .code')
allChange(phone, phone, code1, 'mouseover');
allChange(code1, phone, code1, 'mouseover');
allChange(code1, code1, phone, 'mouseout');

// 听音二维码
var blueCode = document.querySelector('.blueCode');
var aImg = document.querySelector('.blueCode>a');
var code2 = document.querySelector('.blueCode .code');
allChange(blueCode, aImg, code2, 'mouseover');
allChange(blueCode, code2, aImg, 'mouseout');


// 片库经过
var tv = document.querySelector('.tv');
var upTvs = document.querySelectorAll('.upTv');
var hideTvs = document.querySelectorAll('.hideTv');
var listAs = document.querySelectorAll('.rightTv>a');
var tvLists = document.querySelectorAll('.tvList');
for (let i = 0; i < upTvs.length; i++) {
    allChange(upTvs[i], upTvs[i], hideTvs[i], 'mouseover');
    allChange(hideTvs[i], upTvs[i], hideTvs[i], 'mouseover');
    allChange(hideTvs[i], hideTvs[i], upTvs[i], 'mouseout');
}

// 先滑到左 再执行回调函数返回右
function stop(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        if (obj.offsetLeft <= target) {
            // 停止动画 其实质是停止定时器
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        } else
            obj.style.left = obj.offsetLeft - 20 + 'px';
    }, 5);
}
for (let i = 0; i < listAs.length; i++) {
    listAs[i].addEventListener('mouseover', function () {
        let index = 0;
        // 鼠标经过 标题盒子显示
        for (let j = 0; j < listAs.length; j++) {
            if (listAs[j].className == 'default')
                index = j;
            listAs[j].className = '';
        }
        listAs[i].classList.add('default');

        stop(tvLists[index], -1728, function () {
            tvLists[index].style.display = 'none';
            tvLists[index].style.left = '1740px';
        })
        tvLists[i].style.display = 'block';
        stop(tvLists[i], 0);
    })

}

//栏目大全导航切换
var ulLists = document.querySelectorAll('.list-two .mainClm>ul');
var liList = document.querySelectorAll('.up-nav>li');
for (let i = 0; i < liList.length; i++) {
    liList[i].addEventListener("click", function () {
        for (let j = 0; j < liList.length; j++) {
            liList[j].className = '';
            ulLists[j].style.display = 'none';
        }
        liList[i].className = 'current';
        ulLists[i].style.display = 'block';
    })
}

//栏目大全图标循环
var imgIcon = document.querySelectorAll('.img-icon');
var aCln = document.querySelectorAll('.leftCln>a');

// 媒体查询
const mQuery = window.matchMedia('(max-width: 1349px)');
mQuery.addListener(column);
function column() {
    // 检查媒体查询是否为真
    if (mQuery.matches) {
        for (let i = 0; i < imgIcon.length; i++)
            imgIcon[i].style.width = '0px';
    }
    else {
        for (let i = 0; i < imgIcon.length; i++) {
            imgIcon[i].style.width = '24px';
            imgIcon[i].style.background = 'url(./images/img' + (i + 1) + '.png) no-repeat';
        }

    }
}
column();

// 鼠标经过 变换图标颜色
for (let i = 0; i < aCln.length; i++) {
    aCln[i].addEventListener('mouseover', function () {
        imgIcon[i].style.background = 'url(./images/imgc' + (i + 1) + '.png) no-repeat';
        // aCln[i].classList.add('show');
    })
    aCln[i].addEventListener('mouseout', function () {
        imgIcon[i].style.background = 'url(./images/img' + (i + 1) + '.png) no-repeat';
        // aCln[i].classList.remove('show');
    })
}
//栏目大全隐藏板块显示
var hideA = document.querySelectorAll('.hideCln');
var showHides = document.querySelectorAll('.showHide');
changeHide1(hideA, showHides);
changeHide1(showHides, showHides);

// 隐藏导航
var hideNav = document.querySelector('.hideNav');
var hideLists = document.querySelectorAll('.hideList');
var aLists = document.querySelectorAll('.liList');
var selectHide = document.querySelectorAll('.left-nav .select')
for (let i = 0; i < aLists.length; i++) {
    let index = i;
    aLists[i].addEventListener('mouseover', function () {
        hideLists[i].style.transition = "all .7s";
        rorate1(selectHide[i], 'selectBlue', '#0084ff', '#222');
        whichIndex(index, i);
    })
    aLists[i].addEventListener('mouseout', function (e) {
        mouseDirection(aLists[i], e, function (dir) {
            switch (dir) {
                case 'top':
                case 'left':
                case 'right':
                    hideLists[i].style.transition = "all .7s";
                    hideLists[i].style.height = '0px';
                    hideLists[i].style.display = 'none';
                    rorate2(selectHide[i], 'selectBlack', '#222');
                    break;
                case 'bottom':
                    rorate1(selectHide[i], 'selectBlue', '#0084ff');
                    whichIndex(index, i);
                    break;
            }
        });

    })
    // 鼠标经过下拉菜单
    hideLists[i].addEventListener('mouseover', function () {
        let index = i;
        rorate1(selectHide[i], 'selectBlue', '#0084ff');
        whichIndex(index, i);
        hideLists[i].style.transition = "all .7s ease";
    })
    hideLists[i].addEventListener('mouseout', function () {
        hideLists[i].style.transition = "all .7s ease";
        hideLists[i].style.height = '0px';
        hideLists[i].style.display = 'none';
        rorate2(selectHide[i], 'selectBlack', '#222');
    })
}


var selectBox = document.querySelectorAll('.selectBox');
var selectB = document.querySelectorAll('.selectBox .select');

for (let i = 0; i < selectBox.length; i++) {
    selectBox[i].addEventListener('mouseover', function () {
        selectB[i].style.transform = 'rotateZ(' + 180 + 'deg)';
    })
    selectBox[i].addEventListener('mouseout', function () {
        selectB[i].style.transform = 'rotateZ(' + 0 + 'deg)';
    })
}

// 听音图片经过二维码
var imgs_1 = document.querySelectorAll('.img-1');
var imgs_2 = document.querySelectorAll('.img-2');
for (let i = 0; i < imgs_2.length; i++) {
    allChange(imgs_1[i], imgs_1[i], imgs_2[i], 'mouseover');
    allChange(imgs_2[i], imgs_2[i], imgs_1[i], 'mouseout');
}

//直播滚动模块
var liveScrollList = document.querySelector('.live-nav ul');
var liveScrollItem = document.querySelectorAll('.live-nav ul>li');
var livePre = document.querySelector('.live-pre');   //左按钮
var liveNext = document.querySelector('.live-next');    //右按钮

var num = 0;            //点击次数
livePre.addEventListener('click', function () {
    if (num > 0) {
        num -= 1;
        liveScrollList.style.left = -7 * num * liveScrollItem[0].offsetWidth + 'px';
    }
    if (num == 0) {
        this.style.cursor = 'default';
        this.style.background = '#e5e5e5 url(./images/btn-pre1.png) no-repeat center center';
    }
})
livePre.addEventListener('mouseenter', function () {
    if (num != 0) {
        this.style.cursor = 'pointer';
        this.style.background = '#0084FF url(./images/btn-pre1.png) no-repeat center center';
    }
    else {
        livePre.style.cursor = 'default';
        livePre.style.background = '#e5e5e5 url(./images/btn-pre1.png) no-repeat center center';
    }
})

livePre.addEventListener('mouseleave', function () {
    this.style.cursor = 'default';
    this.style.background = '#fff url(./images/btn-pre.png) no-repeat center center';
})

liveNext.addEventListener('click', function () {
    if (num < 2) {
        num += 1;
        liveScrollList.style.left = -7 * num * liveScrollItem[0].offsetWidth + 'px';
    }
    if (num == 2) {
        this.style.cursor = 'default';
        this.style.background = '#e5e5e5 url(./images/btn-next1.png) no-repeat center center';
    }
})
liveNext.addEventListener('mouseenter', function () {
    if (num != 2) {
        this.style.cursor = 'pointer';
        this.style.background = '#0084ff url(./images/btn-next1.png) no-repeat center center';
    } else {
        this.style.cursor = 'default';
        this.style.background = ' #e5e5e5 url(./images/btn-next1.png) no-repeat center center';
    }
})
liveNext.addEventListener('mouseleave', function () {
    this.style.cursor = 'pointer';
    this.style.background = '#fff url(./images/btn-next.png) no-repeat center center';
})

// 图片滑动

var imgBox = document.querySelectorAll('.imgTv>ul li');
var imgTv = document.querySelectorAll('.imgTv>ul li>img');
var plus = document.querySelectorAll('.plus'); //伸缩盒子
// js媒体查询适应开始
var matches = [
    window.matchMedia('(max-width:1349px)'),
    window.matchMedia('(max-width:1683px)'),
    window.matchMedia('(max-width:1899px)')
]
function mediaMatches() {
    for (let i = 0; i < imgBox.length; i++) {
        if (matches[0].matches) {
            console.log(33);
            imgBox[i].style.width = '178px';
            imgTv[i].style.width = '178px';
            plus[i].style.width = '570px';
            plus[i].style.left = '196px';

            imgBox[i].addEventListener('mouseover', function () {
                imgBox[i].style.width = '766px';
                if (i >= 2) {
                    for (let j = 2; j <= i; j++) {
                        imgBox[j - 1].style.width = '0px';
                        imgBox[j - 1].style.padding = '0 0';
                    }
                }
            })
            imgBox[i].onmouseout = () => {
                imgBox[i].style.width = '178px';
                if (i >= 2) {
                    for (let j = 2; j <= i; j++) {
                        imgBox[j - 1].style.width = '178px';
                        imgBox[j - 1].style.padding = '0 9px';
                    }
                }
            }
        } else if (matches[1].matches) {
            imgBox[i].style.width = '185px';
            imgTv[i].style.width = '185px';
            plus[i].style.width = '591px';
            plus[i].style.left = '203px';
            console.log(22);
            imgBox[i].addEventListener('mouseover', function () {
                imgBox[i].style.width = '794px';
                if (i >= 3) {
                    for (let j = 3; j <= i; j++) {
                        imgBox[j - 1].style.width = '0px';
                        imgBox[j - 1].style.padding = '0 0';
                    }
                }
            })
            imgBox[i].onmouseout = () => {
                imgBox[i].style.width = '185px';
                if (i >= 3) {
                    for (let j = 3; j <= i; j++) {
                        imgBox[j - 1].style.width = '185px';
                        imgBox[j - 1].style.padding = '0 9px';
                    }
                }
            }
        } else if (matches[2].matches) {
            imgBox[i].addEventListener('mouseover', function () {
                imgBox[i].style.width = '846px';
                if (i >= 5) {
                    for (let j = 5; j <= i; j++) {
                        imgBox[j - 1].style.width = '0px';
                        imgBox[j - 1].style.padding = '0 0';
                    }
                }
            })
            imgBox[i].onmouseout = () => {
                imgBox[i].style.width = '198px';
                if (i >= 5) {
                    for (let j = 5; j <= i; j++) {
                        imgBox[j - 1].style.width = '198px';
                        imgBox[j - 1].style.padding = '0 9px';
                    }
                }
            }
        } else {
            imgBox[i].addEventListener('mouseover', function () {
                imgBox[i].style.width = '846px';
                if (i >= 5) {
                    for (let j = 5; j <= i; j++) {
                        imgBox[j - 1].style.width = '0px';
                        imgBox[j - 1].style.padding = '0 0';
                    }
                }
            })
            imgBox[i].onmouseout = () => {
                imgBox[i].style.width = '198px';
                if (i >= 5) {
                    for (let j = 5; j <= i; j++) {
                        imgBox[j - 1].style.width = '198px';
                        imgBox[j - 1].style.padding = '0 9px';
                    }
                }
            }
        }
    }
}

mediaMatches(); //页面首次加载
for (var i = 0; i < matches.length; i++)
    matches[i].addListener(mediaMatches);
// js媒体查询适应结束


//侧边栏图标循环
var asideNav = document.querySelector('.asideNav');             //获取侧边栏
var asideLists = document.querySelectorAll('.top-nav>ul>div');    //获取icon盒子

for (let i = 0; i < asideLists.length; i++) {
    asideLists[i].style.backgroundImage = 'url(./images/Icon0' + (i + 2) + '.png)';

    asideLists[i].addEventListener('mouseover', function () {
        asideLists[i].style.backgroundImage = 'url(./images/Icon0' + (i + 2) + '_hover.png)';
        asideLists[i].style.color = '#0084FF';
    })
    asideLists[i].addEventListener('mouseout', function () {
        if (!(asideLists[i].classList.contains('first'))) { //如果为当前icon显示板块，鼠标经过颜色仍不变
            asideLists[i].style.backgroundImage = 'url(./images/Icon0' + (i + 2) + '.png)';
            asideLists[i].style.color = '#000';
        }
        else {
            asideLists[i].style.backgroundImage = 'url(./images/Icon0' + (i + 2) + '_hover.png)';
            asideLists[i].style.color = '#0084FF';
        }
    })
    if (asideLists[i].classList.contains('first'))
        judge(asideLists[i], i);

    //图标点击 滚动到固定板块
    asideLists[i].addEventListener('click', function () {
        switch (i) {
            case 0:
                scrollIcon(730);
                break;
            case 1:
                scrollIcon(1250);
                break;
            case 2:
                scrollIcon(1980);
                break;
            case 3:
                scrollIcon(2560);
                break;
            case 4:
                scrollIcon(3040);
                break;
            case 5:
                scrollIcon(6000);
                break;
            case 7:
                scrollIcon(0);
                break;
            default:
                break;
        }
    })
}

// 直播刷新
var refreshBox = document.querySelector('.rightLive');
var refresh = document.querySelector('.rightLive>i');
count = 0;
refreshBox.addEventListener('click', function () {
    count++
    refresh.style.transform = 'rotate(' + 360 * count + 'deg)';
})

// 页面滚动
document.addEventListener('scroll', function () {
    if (window.pageYOffset >= 680) {
        asideNav.style.display = 'block';
        if (window.pageYOffset >= 720 && window.pageYOffset < 1140) {
            moveBlue(asideLists, 0);
            judge(asideLists[0], 0);
            hideNav.style.display = 'block';
        }
        else if (window.pageYOffset >= 1140 && window.pageYOffset < 1960) {
            moveBlue(asideLists, 1);
            judge(asideLists[1], 1);
        }
        else if (window.pageYOffset >= 1960 && window.pageYOffset < 2560) {
            moveBlue(asideLists, 2);
            judge(asideLists[2], 2);
        }
        else if (window.pageYOffset >= 2560 && window.pageYOffset < 3040) {
            moveBlue(asideLists, 3);
            judge(asideLists[3], 3);
        }
        else if (window.pageYOffset >= 3040) {
            moveBlue(asideLists, 4);
            judge(asideLists[4], 4);
        }
    }
    else {
        asideNav.style.display = 'none';
        hideNav.style.display = 'none';
    }

})


// 懒加载
window.onload = checkImgs;
window.onscroll = throttle(checkImgs);
function isInSight(el) {
    const bound = el.getBoundingClientRect();
    const clientHeight = window.innerHeight;
    return bound.top <= clientHeight + 100;
}
let countImg = 0;
function checkImgs() {
    const imgs = document.querySelectorAll('.photo');
    for (let i = countImg; i < imgs.length; i++) {
        if (isInSight(imgs[i])) {
            loadImg(imgs[i]);
            index = i;
        }
    }
}

function loadImg(el) {
    if (!el.src) {
        const source = el.dataset.src;
        el.src = source;
    }
}

function throttle(fn, mustRun = 500) {
    const timer = null;
    let previous = null;
    return function () {
        const now = new Date();
        const context = this;
        const args = arguments;
        if (!previous) {
            previous = now;
        }
        const remaining = now - previous;
        if (mustRun && remaining >= mustRun) {
            fn.apply(context, args);
            previous = now;
        }
    }
}

