// pages/home/home.js
var app = getApp()
Page({
  data:{
    condition_showadd: true,
  },
  onLoad:function(options){
    console.log(app.globalData.appSetting);
    // 页面初始化 options为页面跳转所带来的参数
    if(app.globalData.appSetting.goal == 'default'){
        this.setData({condition_showadd: true})
    }else{
        this.setData({condition_showadd: false})
    }
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
  toAddGoal:function(){
    // add a goal
    console.log('toAddGoal');
    wx.navigateTo({
        url: '../setgoal/setgoal'
    });
  },
  toGoalDetail:function(){
    // add a goal
    console.log('toAddGoal');
    wx.navigateTo({
        url: '../goaldetail/goaldetail'
    });
  },
})