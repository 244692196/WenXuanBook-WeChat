// pages/testArea/testArea.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testAreaList: [
      '衡水试卷',
      '北师大试卷',
      '黄冈试卷',
      '冲刺试卷'
    ]
  },
  //跳转页面方法
  ngContent(e){
    let item = e.currentTarget.dataset['item'];
    wx.navigateTo({
      url: `/pages/Content/Content?type=${item}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type) {
      wx.setNavigationBarTitle({
        title: options.type //页面标题为路由参数
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})