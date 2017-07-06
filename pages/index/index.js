//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎登录',
    userInfo: {},
    userName: '',
    userPassword: '',
    id_token: '',//方便存在本地的locakStorage  
    response: '' //存取返回数据
  },
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  userPasswordInput: function (e) {
    this.setData({
      userPassword: e.detail.value
    })
    console.log(e.detail.value)
  },
  logIn: function () {
    setTimeout(() => { 
    if ((this.data.userName == 'jsy') && (this.data.userPassword == 'jsy')){
      wx.redirectTo({
        url: '../notes/notes?userName=金视野'
      })
    } else {
      // wx.showToast({
      //   title: '请输入正确的用户名和密码',
      //   icon: 'fail',
      //   duration: 2000
      // })
      this.setData(
        { popErrorMsg: "请输入正确的用户名和密码" }
      );
      this.ohShitfadeOut();
      return;  
      }
     }, 100)
  },
  ohShitfadeOut() {
    var fadeOutTimeout = setTimeout(() => {
      this.setData({ popErrorMsg: '' });
      clearTimeout(fadeOutTimeout);
    }, 3000);
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
