// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    campus:["旗山","铜盘","集美","怡山","晋江","泉港"],
    cloudURL:"cloud://cloud1-3gjatjl2f1e06dd4.636c-cloud1-3gjatjl2f1e06dd4-1315043544/map图片/",
    type:"旗山",
    location:[{top:"130rpx",left:"445rpx"},{top:"190rpx",left:"200rpx"}],
    index:0
  },
  mapchange(e){
    var ct=this.data.campus[e.detail.value];
    this.setData({
      type:ct
    })
  },
  showinfo(e){
    console.log(e.currentTarget.dataset.id);

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