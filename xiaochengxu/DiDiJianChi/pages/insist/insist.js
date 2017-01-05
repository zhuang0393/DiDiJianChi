var event = require('../../utils/event.js');
var app = getApp()
Page({
    data: {
        motto: 'Hello World',
        userInfo: {}
    },

    onLaunch: function () {
        console.log('onLaunch ...');
    },

    onShow: function(){
        console.log('onShow ...');
    },

    onLoad: function() {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo){
            //更新数据
            that.setData({
                userInfo:userInfo
            })
        })

        event.on('DataChanged', this, function(data) {
                console.log('select:' + data);
        })
    },

    onUnload: function() {
        event.remove('DataChanged', this);
    },

    toAddNewStickItem: function(){
        console.log('toAddNewStickItem');
        wx.navigateTo({
            url: '../sticklist/sticklist'
        })
    },
});