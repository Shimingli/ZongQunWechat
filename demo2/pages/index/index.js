//index.js
//获取应用实例
const app = getApp()
console.log("shiming app=="+app.globalData.name)
console.log("shiming app==" + app.globalData.loacolNum)
Page({
  //页面的初始数据
  data: {
    motto: 'Hello World',
    dataMsg:"文学体裁的一种，侧重于事件发展",
    userInfo: {},
    hasUserInfo: false,
    //   //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //	生命周期回调—监听页面加载
  onLoad: function () {
    console.log("shiming  app.globalData.userInfo="  + app.globalData.userInfo)
    console.log("shiming  this.data.canIUse=" + this.data.canIUse)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log("shiming   app.userInfoReadyCallbacke=" + res.userInfo.avatarUrl)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log("shiming"+e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
