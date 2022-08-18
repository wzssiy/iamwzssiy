//颜色为白
whiteAll = function (target) {
    for (let i = 0; i < reItem.length; i++) {
        reItem[i].style.color = '#fff';
    }
    reItem[target - 1].style.color = '#0084FF';
}
// 精彩推荐标题与ul颜色变白
whiteRe = function () {
    for (let i = 0; i < reItem.length; i++) {
        reItem[i].style.color = '#fff';
    }
    recommend.style.color = '#fff';
    recommend.style.background = 'url(./images/rec.png) no-repeat left center';

}
// 匹配属性值
checkKey = function (obj) {
    switch (obj) {
        case 1:
            slide[1].style.backgroundColor = '#919095';
            whiteAll(1);
            break;
        case 2:
            slide[2].style.backgroundColor = '#112145';
            whiteAll(2);
            break;
        case 3:
            slide[3].style.backgroundColor = '#b8a78b';
            whiteAll(3);
            break;
        case 4:
            slide[4].style.backgroundColor = '#a57c5e';
            whiteAll(4);
            break;
        case 5:
            slide[5].style.backgroundColor = '#aba8b1';
            whiteAll(5);
            break;
        case 6:
            slide[6].style.backgroundColor = '#8a8862';
            whiteAll(6);
    }
}

// 热播与推荐接口
var swiper = document.querySelector('.swiper');
var hotPlay = document.querySelector('.hotPlay');
var recommend = document.querySelector('.recommend');
var reList = document.querySelector('.aside>ul');           //侧边栏精彩推荐盒子
var reItem = document.querySelectorAll('.aside>ul>a');      //侧边栏精彩推荐文字
var imgsBack = document.querySelector('.imgsBack ul');      //正在热播ul
var playing = document.querySelectorAll('.imgsBack li>a')   //正在热播ul链接 文字
var playingImg = document.querySelectorAll('.imgsBack li>a>img') //正在热播ul图片
var contain = document.querySelectorAll('.slide .contain'); //精彩推荐图片链接
var containImg = document.querySelectorAll('.slide .contain>img');  //精彩推荐图片
var slide = document.querySelectorAll('.slide');

var xhrSwiper = new XMLHttpRequest();
xhrSwiper.open('GET', 'http://106.52.74.37:8000/getSwiper', true);
xhrSwiper.send();
xhrSwiper.onreadystatechange = function () {
    if (this.readyState == '4' && this.status == '200') {
        liveData = JSON.parse(this.response).data.liveData.livePlay;
        console.log(liveData);
        //热播数据
        for (let i = 0, j = 0, k = 0; i < liveData.length, j < playing.length - 1, k < playingImg.length; i++, j += 2, k++) {
            playing[j].href = liveData[i].link;
            playing[j + 1].href = liveData[i].link;
            playing[j + 1].innerText = liveData[i].name;
            playingImg[k].src = liveData[i].imgSrc;
        }

        recommendData = JSON.parse(this.response).data.recommendData.recomendContent;
        console.log(recommendData);
        for (let i = 0; i < recommendData.length; i++) {
            reItem[i].innerText = recommendData[i].title;
            reItem[i].href = recommendData[i].link;
            containImg[i].src = recommendData[i].imgSrc;
            contain[i].href = recommendData[i].link;
            slide[i + 1].addEventListener('click', function () {
                window.open(recommendData[i].link)
            })
        }
    }
}

let timer3 = 0          //轮播图
let num1 = 0;           //记录第几个排版
let changed = true
function changeOne(type) {
    hotPlay.style.color = '#0084FF';
    hotPlay.style.background = 'url(./images/hotHover.png) no-repeat left center';
    document.querySelector('.curSlide').classList.remove('curSlide');
    if (type === true)
        num1++;
    else if (type === false) {
        num1--;
    }
    else {
        num1 = type;
    }
    //判断num1的边界值
    if (num1 >= slide.length) {
        //正在热播
        num1 = 0;
        hotPlay.style.color = '#0084FF';
        hotPlay.style.background = 'url(./images/hotHover.png) no-repeat left center';
        whiteRe();
    }
    if (num1 < 0) num1 = slide.length - 1;

    // 精彩推荐开始播放
    if (num1 >= 1) {
        hotPlay.style.color = '#fff';
        hotPlay.style.background = 'url(./images/hotPlay.png) no-repeat left center';
        recommend.style.color = '#0084FF';
        recommend.style.background = 'url(./images/jingxuanHover.png) no-repeat left center';
    }

    slide[num1].classList.add('curSlide');
    checkKey(num1);

    hotPlay.addEventListener('mouseover', function () {
        //显示  正在热播 画面
        for (j = 0; j < slide.length; j++) {
            slide[j].classList.remove('curSlide');
        }
        whiteRe();      //精彩推荐颜色变白
        slide[0].classList.add('curSlide');
        hotPlay.style.color = '#0084FF';
        hotPlay.style.background = 'url(./images/hotHover.png) no-repeat left center';
    })

    for (let i = 0; i < reItem.length; i++) {
        reItem[i].addEventListener('mouseover', function () {

            for (j = 0; j < slide.length; j++)
                slide[j].classList.remove('curSlide');
            slide[i + 1].classList.add('curSlide');
            recommend.style.color = '#0084FF';
            recommend.style.background = 'url(./images/jingxuanHover.png) no-repeat left center';
            let index = i + 1;
            checkKey(index);
        })
        reItem[i].addEventListener('mouseout', function () {
            // if (slide[0].className = 'slide curSlide') {
            //     whiteRe();
            // }
            // else {
            //     recommend.style.color = '#0084FF';
            //     recommend.style.background = 'url(./images/jingxuanHover.png) no-repeat left center';
            // }
            recommend.style.color = '#0084FF';
            recommend.style.background = 'url(./images/jingxuanHover.png) no-repeat left center';
        })
    }
}

//定时器
autoPlay()
function autoPlay() {
    timer3 = setInterval(() => {
        changeOne(true);
    }, 2000);
}

// 轮播图移入移出
overOut()
function overOut() {
    swiper.addEventListener('mouseover', function () {
        clearInterval(timer3);
    })
    swiper.addEventListener('mouseout', function () {
        autoPlay();
    })
}

changeTab()
function changeTab() {
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            clearInterval(timer3);
        }
        else if (document.visibilityState === 'visible') {
            autoPlay();
        }
    })
}

// 热搜榜接口
var inputHide = document.querySelectorAll('.inputHide');
var hideBox = document.querySelectorAll('.inputHide ul');
// var inputList = document.querySelectorAll('.inputHide ul a');

var xhrSearch = new XMLHttpRequest();
xhrSearch.open('GET', 'http://106.52.74.37:8000/getHotSearch', true);
xhrSearch.send();
xhrSearch.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (xhrSearch.status >= 200 && xhrSearch.status <= 300) {
            xhrSearch = JSON.parse(this.response).data.hotSearchData;
            console.log(xhrSearch);
        }
        // 创建i标签  (有两个搜索框，要依个创造并赋值接口数据)
        for (let j = 0; j < inputHide.length; j++) {
            var inputList = inputHide[j].querySelectorAll('ul a');
            for (let k = 0; k < inputList.length; k++) {
                inputList[k].innerHTML = '<i></i>' + xhrSearch[k].title;
            }
            //热搜榜图标循环
            var inputImg = inputHide[j].querySelectorAll('ul a>i');
            for (let m = 0; m < inputImg.length; m++) {
                inputImg[m].style.backgroundImage = 'url(./images/top-' + (m + 1) + '.jpg)';
            }
        }



    }
}

//直播接口
var liveLink = document.querySelectorAll('.live-nav>ul>li>a');
var liveImg = document.querySelectorAll('.live-nav>ul>li>a>img');
var imgText = document.querySelectorAll('.live-nav>ul>li>a>span');
var time = document.querySelectorAll('.liveTime');
var liveName = document.querySelectorAll('.liveName');
var xhrLive = new XMLHttpRequest();
xhrLive.open('GET', 'http://106.52.74.37:8000/getLiveGuide', true);
xhrLive.send();
xhrLive.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (xhrLive.status >= 200 && xhrLive.status <= 300) {
            xhrLive = JSON.parse(xhrLive.response).data;
            console.log(xhrLive);
            for (let i = 0; i < liveImg.length; i++) {
                let j = 3;
                while (j--) {
                    liveLink[3 * i].href = xhrLive[i].img.link;
                    liveLink[3 * i + 1].href = xhrLive[i].img.link;
                    liveLink[3 * i + 2].href = xhrLive[i].img.link;
                }
            }
            for (i = 0; i < liveImg.length; i++) {
                liveImg[i].src = xhrLive[i].img.src;
                imgText[i].innerText = xhrLive[i].topic;
                liveName[i].innerText = xhrLive[i].itemName;
                time[i].innerText = xhrLive[i].time.startTime + '-' + xhrLive[i].time.endTime;
            }
        }
    }
}

// 今日热门接口
var hotList = document.querySelectorAll('.hotList a');
var images = document.querySelectorAll('.hotList a>img');
var titleHot = document.querySelector('.text>span');
const xhrHot = new XMLHttpRequest;
xhrHot.open('GET', 'http://106.52.74.37:8000/getHotTopic', true);
xhrHot.send();
xhrHot.onreadystatechange = function () {
    if (xhrHot.readyState == 4) {
        if (xhrHot.status >= 200 && xhrHot.status < 300) {
            hotData = JSON.parse(xhrHot.response).data.hotTopicData;
            console.log(hotData);
            titleHot.innerText = hotData[0].brief;
            for (let i = 0; i < hotData.length; i++) {
                images[i].src = hotData[i].img.src;
                hotList[2 * i].href = hotData[i].title.link;
                hotList[2 * i + 1].href = hotData[i].title.link;
                hotList[2 * i + 1].innerText = hotData[i].title.text;
            }
        }
    }
}

//看点接口
var titleNew = document.querySelectorAll('.news a');        //看点标签
var upImg = document.querySelectorAll('.up-img img');       //看点图片
var textNew = document.querySelectorAll('.new-left a');     //看点文字
const xhrNew = new XMLHttpRequest();
xhrNew.open('GET', 'http://106.52.74.37:8000/getHighLight', true);
xhrNew.send();
xhrNew.onreadystatechange = function () {
    if (xhrNew.readyState == 4) {
        if (xhrNew.status >= 200 && xhrNew.status < 300) {
            newData = JSON.parse(xhrNew.response).data;
            console.log(newData);

            for (let i = 0; i < newData.navigation.length; i++) {
                titleNew[i].innerText = newData.navigation[i].text;
                titleNew[i].href = newData.navigation[i].link;
            }

            for (let i = 0; i < newData.highlightData.length; i++) {
                upImg[i].src = newData.highlightData[i].img.src;
                textNew[3 * i].href = newData.highlightData[i].img.link;
                textNew[3 * i + 1].href = newData.highlightData[i].title.link;
                textNew[3 * i + 1].innerText = newData.highlightData[i].title.text;
                textNew[3 * i + 2].href = newData.highlightData[i].keyword.link;
                textNew[3 * i + 2].innerText = newData.highlightData[i].keyword.text;
            }
        }
    }
}

// 频道分类
var downCnl = document.querySelectorAll('.downCnl');
var cnlLis = document.querySelectorAll('.upCnl>li');
var upLine = document.querySelectorAll('.upCnl>li>span');
for (let i = 0; i < cnlLis.length; i++) {
    cnlLis[i].addEventListener('click', function () {
        for (let j = 0; j < downCnl.length; j++) {
            downCnl[j].classList.remove('curCnl');
            cnlLis[j].classList.remove('default');
        }
        downCnl[i].classList.add('curCnl');
        cnlLis[i].classList.add('default');
    })
}

var topic = document.querySelectorAll('.upCnl>li>p');              // 频道对应主题
var cnlLink = document.querySelectorAll('.cnlTv');               // 频道对应链接
var cnlImg = document.querySelectorAll('.cnlTv>img');            // 频道对应图片
var cnlList = document.querySelectorAll('.downCnl>.rightCln');        //频道对应下方列表
var xhrCnl = new XMLHttpRequest();
xhrCnl.open('GET', 'http://106.52.74.37:8000/getProgram', true);
xhrCnl.send();
xhrCnl.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (xhrCnl.status >= 200 && xhrCnl.status < 300) {
            cnlData = JSON.parse(xhrCnl.response).data.programData;
            console.log(cnlData);

            for (let i = 0; i < cnlData.length; i++) {
                // 频道对应主题
                topic[2 * i].innerText = cnlData[i].name;
                topic[2 * i + 1].innerText = cnlData[i].topic;

                // 频道对应链接
                cnlImg[i].setAttribute('data-src', cnlData[i].img.src);
                cnlLink[i].href = cnlData[i].img.link;
                cnlImg[i].src = cnlData[i].img.src;
                //频道对应下方列表
                let string = '';
                for (let j = 0; j < cnlData[i].programList.length; j++) {
                    string += '<li><a></a></li>';
                }       // 根据接口中带有的数据 创建ul里的布局
                cnlList[i].innerHTML = string;
                cnlList[i].classList.add('cur');
                const cnlItem = document.querySelectorAll('.cur>li>a');

                for (let j = 0; j < cnlItem.length; j++) {
                    cnlItem[j].innerText = cnlData[i].programList[j].text;
                    cnlItem[j].href = cnlData[i].programList[j].href;
                }

                cnlList[i].classList.remove('cur');
            }
        }
    }
}



