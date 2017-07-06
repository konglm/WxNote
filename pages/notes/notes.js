// pages/notes/notes.js
var util = require('../../utils/util.js')
function countdown(that) {
  var time = setTimeout(function () {
    that.setData({
      nowTime: util.formatTime(new Date())
    });
    countdown(that);
  }
    , 1000)
} 
Page({
  data: {
    items: [
      { name: '1', value: '正常', checked: 'true' },
      { name: '2', value: '迟到' },
      { name: '3', value: '早退' },
      { name: '4', value: '请假' },
      { name: '5', value: '旷课' },
    ],
    userName: ''
  },
  onLoad: function (data) {
    countdown(this);
    console.log("传递值：",data);
    this.setData({userName: data.userName});
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  noteOk: function(){
    // wx.showToast({
    //   title: '提交成功',
    //   icon: 'success',
    //   duration: 2000
    // })
    wx.showModal({
      content: '是否确认提交？',
      showCancel: true,
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../msg/msg_success',
          })
        }
      }
    });
    
  },
  goLogin: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  }
})