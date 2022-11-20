// pages/list/list.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userid: null,
    schoolmatesList:[
      {
        index: 0,
        name:'杨过',
        avatarURL:'../../icon/homepage.png',
        info :'2010级| 计算机 |03班 | 杭州 |xxx有限公司|  开发'
      },
      {
        index: 1,
        name:'小龙女',
        avatarURL:'../../icon/homepage.png',
        info :'2012级| 计算机 |03班 | 杭州 |xxx有限公司|  销售'
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    if(app.globalData.userid)
    {
      this.setData({
        userid:app.globalData.userid
      })
    }
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