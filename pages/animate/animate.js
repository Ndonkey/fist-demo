// pages/animate/animate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    anmitaData: {}
    //初始化动画元素
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //创建一个动画实例
    let animation = wx.createAnimation({
      //动画的持续时间  duration
      //动画效果timingFunction
      //延迟时间 dalay
      //动画的中心点 transformOrigin
      duration: 1000,
      timingFunction: 'linear',
      dalay: 200
    });
    //需要把动画挂载到实例上面
    this.animation = animation;
    animation.rotate(360).scale(0.5).step();
    animation.rotate(0).scale(1).step();
    //step表示这一步的动画已经定义完，必须要加
    //把animation赋值给我们的动画对象anmiteData
    setTimeout(() => {
      this.setData({
        anmitaData: animation.export()
      })
    }, 100)
    //导出动画队列。export方法每次调用后会清除掉之前的动画操作
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
