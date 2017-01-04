//获取应用实例
Page({
    data: {
        new: 'top-hoverd-btn',
        good: '',
        child: '',
        mom: '',
        girl: '',
        shoe: '',
        home: '',
        beauti: '',
        food: '',
        hidden: false
    },

    /**
     * button点击事件监听
     */
    clickButton: function(e) {
        //打印所有关于点击对象的信息
        console.log(e);
    },
    onLaunch: function () {
        console.log('bb Launching ...');
    },
    onShow: function(){
         var that = this;
         setTimeout(function(){
            that.setData({
                hidden: true
            });
         }, 1500);
    },
    updateBtnStatus: function(k){
        this.setData({
            new: this.getHoverd('new', k),
            good: this.getHoverd('good', k),
            child: this.getHoverd('child', k),
            mom: this.getHoverd('mom', k),
            girl: this.getHoverd('girl', k),
            shoe: this.getHoverd('shoe', k),
            home: this.getHoverd('home', k),
            beauti: this.getHoverd('beauti', k),
            food: this.getHoverd('food', k)
        });
    },
    getHoverd: function(src, dest){
        return (src === dest ?  'top-hoverd-btn' : '');
    }
});