// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //新闻轮播图
    newsSwiper:[],
    //活动轮播图
    activtySwiper:[],
    //d导航栏
    tabs: ["新闻","活动"],
    current:0
  },

  /**
   * 
   * 更改导航栏选中
   */
  tabSelect:function(e){
    var current = e.currentTarget.dataset.id
    this.setData({
      current:current
    })
  },

  /**
   * 获取新闻轮播图
   */
  getNewsSwiperList(){
    let that = this;
    wx.request({
      url: 'url',
      success(res){
        if(res.data.code===0){
          that.setData({
            newsSwiper:res.data.newsSwiperList
          })
        }
      }
    })
  },

  /**
   * 获取活动轮播图
   */
  getActivitySwiperList(){
    let that = this;
    wx.request({
      url: 'url',
      success(res){
        if(res.data.code===0){
          that.setData({
            activitySwiper:res.data.activitySwiperList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.getNewsSwiperList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})