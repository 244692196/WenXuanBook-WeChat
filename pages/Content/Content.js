// pages/Content/Content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrList: [] //要渲染的数据
    // primaryList:[   //小学数据的数组
    //   {
    //     imgUrl:'../../img/Content/英语-《实战中考考试》.png',
    //     name:'《实战中考考试 系统复习卷》英语',
    //     nameT:'小学'
    //   },
    //   {
    //     imgUrl:'../../img/Content/语文-《实战中考考试》.png',
    //     name:'《实战中考考试 系统复习卷》语文',
    //     nameT:'小学'
    //   }
    // ],
  },
  //功能方法
  toDetail(){
    wx.navigateTo({
      url: '/pages/testDetails/testDetails',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //以下都是模拟后台数据
    //模拟小学数据
    let primaryList = [{
        imgUrl: '../../img/Content/英语-《实战中考考试》.png',
        name: '《实战中考考试 系统复习卷》小学英语',
        nameT: '小学'
      },
      {
        imgUrl: '../../img/Content/语文-《实战中考考试》.png',
        name: '《实战中考考试 系统复习卷》小学语文',
        nameT: '小学'
      }
    ]
    //模拟初中数据
    let juniorList = [{
        imgUrl: '../../img/Content/英语-《实战中考考试》.png',
        name: '《实战中考考试 系统复习卷》英语',
        nameT: '中考冲刺名校模拟卷'
      },
      {
        imgUrl: '../../img/Content/语文-《实战中考考试》.png',
        name: '《实战中考考试 系统复习卷》语文',
        nameT: '中考冲刺名校模拟卷'
      },
      {
        imgUrl: '../../img/Content/生物.png',
        name: '《学业水平考试卷》生物 全国通用',
        nameT: '会考/中考'
      },
      {
        imgUrl: '../../img/Content/英语-《实战中考考试》.png',
        name: '《实战中考考试 系统复习卷》英语',
        nameT: '中考冲刺名校模拟卷'
      }
    ]

    //options接受参数
    //以下是判断跳转到该页面传过来的参数是什么
    console.log(options);
    if (options.type){
      wx.setNavigationBarTitle({
        title: options.type //页面标题为路由参数
      })
    }
    if (options.type == "衡水试卷") { //如果传过来的是小学，就显示小学的后台数据
      this.setData({
        arrList: primaryList
      })
    } else if (options.type == "北师大试卷") {
      this.setData({
        arrList: juniorList
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