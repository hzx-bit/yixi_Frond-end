// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    campus:["旗山校区","铜盘校区","集美校区","怡山校区","晋江校区","泉港校区"],
    cloudURL:"cloud://cloud1-3gjatjl2f1e06dd4.636c-cloud1-3gjatjl2f1e06dd4-1315043544/map图片/",
    type:"怡山校区",
    location:[{top:"110rpx",left:"140rpx",title:"至诚楼"},{top:"160rpx",left:"120rpx",title:"福建省中心检验所"},{top:"190rpx",left:"380rpx",title:"计算机工程系院楼"}],
    title:null
  },
  mapchange(e){
    var ct=this.data.campus[e.detail.value];
    this.setData({
      type:ct,
      title:null
    })
  },
  showinfo(e){
    if(!this.data.title||this.data.title!=e.currentTarget.dataset.title)
    {
      this.setData({
        title:e.currentTarget.dataset.title
      });
      console.log(this.data.title)
    }
    else{
      this.setData({
        title:null
      })
    }
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