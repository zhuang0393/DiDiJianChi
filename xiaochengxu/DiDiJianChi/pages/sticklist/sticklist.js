var event = require('../../utils/event.js');

Page({
    toRun: function() {
        console.log('toRun');
        event.emit('DataChanged', 'to-Run-Btn-Press');
        wx.navigateBack();
    },
    toRemember: function() {
        event.emit('DataChanged', 'to-Remember-Btn-Press');
        wx.navigateBack();
    },
    toReading: function() {
        event.emit('DataChanged', 'to-Reading-Btn-Press');
        wx.navigateBack();
    }
});