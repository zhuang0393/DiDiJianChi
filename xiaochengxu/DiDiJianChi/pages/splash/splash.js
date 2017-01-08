// pages/splash/splash.js
var requests = require( '../../requests/request.js' );

Page({
  data:{
    splash: {},
    screenHeight: 0,
    screenWidth: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var _this = this;
    wx.getSystemInfo( {
      success: function( res ) {
        _this.setData( {
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
      }
    });

  },
  onReady:function(){
    // 页面渲染完成
    var _this = this;
    var size = this.data.screenWidth + '*' + this.data.screenHeight;
    //requests.getSplashCover( size, ( data ) => {
    //  data.img=data.img.replace("pic1","pic4");
    //  data.img=data.img.replace("pic2","pic4");
    //  _this.setData( { splash: data });
    //}, () => {
    //  toHomePage.call(_this);
    //}, () => {
    //  toHomePage.call(_this);
    //});
    toHomePage.call(_this);
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})

/**
 * 跳转到首页
 */
function toHomePage() {
  setTimeout( function() {
    wx.redirectTo( {
      url: '../home/home'
    });
  }, 4000 );
}