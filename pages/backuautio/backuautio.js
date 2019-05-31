// pages/backuautio/backuautio.js
let app = getApp();
// 获取全局变量

Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicflag: app.globalData.globalMusicFlag
  },
  initmusic(BackgroundAudioManager){
    BackgroundAudioManager.title = "我的秘密";
    // 不支持本地的
    BackgroundAudioManager.src = 'http://183.131.48.151/amobile.music.tc.qq.com/C400002DDrk12IuwUW.m4a?guid=6377095480&vkey=F1259866AE6E2F7D4E212B5561C14E04FDFE3D7CF41521E3C8D1A5D5D3A79D8CBF66FF96CD32DF607219200D29E9EF8E0ECF77B3847BAD8F&uin=3710&fromtag=66';
    BackgroundAudioManager.epname = '我的秘密'
    BackgroundAudioManager.singer = '邓紫棋'
    // 初始化音乐的时候因为是自动播放   所以先把文字设置成暂停
    this.setData({
      playtext: "暂停"
    });
  },
  playmusic(){
    // 播放音乐
    let BackgroundAudioManager = wx.getBackgroundAudioManager()
    // 创建了一个背景音乐的实例
    if(this.data.musicflag){
      //音乐播放的时候
      this.initmusic(BackgroundAudioManager);
      // 全局变量也要跟着改变
      app.globalData.globalMusicFlag = false
      this.setData({
        musicflag : app.globalData.globalMusicFlag
      })
    }else{
      //音乐暂停的时候
      BackgroundAudioManager.pause()
      app.globalData.globalMusicFlag = true
      this.setData({
        musicflag : app.globalData.globalMusicFlag
      })
    }
    // 自己写的播放和系统的播放事件同步
    BackgroundAudioManager.onPlay(() => {
      app.globalData.globalMusicFlag = false
      this.setData({
        musicflag : app.globalData.globalMusicFlag
      })
    })
    // 监听北京音乐暂停事件
    BackgroundAudioManager.onPause(() => {
      app.globalData.globalMusicFlag = true
      this.setData({
        musicflag : app.globalData.globalMusicFlag
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app);
    console.log(app.globalData.globalMusicFlag);
    console.log(this.data.musicflag);
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
    // 每次显示页面的时候需要重新把全局的音乐赋值给当前页面的musicflag
    this.setData({
      musicflag : app.globalData.globalMusicFlag
    })
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