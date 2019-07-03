Component({

  options: {

  },

  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    diyItems: Object
  },

  onPullDownRefresh: function () {
    console.log("shiming  index onPullDownRefresh")
    wx.stopPullDownRefresh
  },
})