var myurl  = location.href;
$.ajax({
    type: 'get',
    url: "http://web.test.hgjvip.cn/selene/activity/weixin/sign?address="+encodeURIComponent(myurl),
    dataType: "json",
    success: function (data){
//  	console.log(data)
//      alert(data.entity.sign.appId);
        wx.config({
            debug: false,
            appId: data.entity.sign.appId,
            timestamp: data.entity.sign.timeStamp,
            nonceStr: data.entity.sign.nonceStr,
            signature: data.entity.sign.signature,
            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
        })
        initShar();
    }
});

function initShar() {
    wx.onMenuShareTimeline({
        title: '三星智慕 多维双驱洗衣机',
        link: 'http://zmds.net/zhlove/default.html',
        imgUrl: 'http://zmds.net/zhlove/picture/sharimg.jpg',
        success: shar
    });
    wx.onMenuShareAppMessage({
        title: '三星智慕 多维双驱洗衣机',
        desc: '快享人生',
        link: 'http://zmds.net/zhlove/default.html',
        imgUrl: 'http://zmds.net/zhlove/picture/sharimg.jpg',
        success: shar
    });
}
wx.ready(initShar);
var shar = function(){
//     console.log("分享了")
}


















