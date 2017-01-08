// pages/setgoal/setgoal.js
var app = getApp()
Page({
  data:{
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindGoalInput:function(e){
    app.globalData.appSetting.goal = e.detail.value
  },
  bindTimeInput:function(e){
    app.globalData.appSetting.time = e.detail.value
  },
  bindBetInput:function(e){
    app.globalData.appSetting.bet = e.detail.value
  },

  bindSubmitTap:function(){
    app.updateupdateAppSetting(app.globalData.appSetting);
    wx.navigateTo({
        url: '../goaldetail/goaldetail'
    });
  }
})