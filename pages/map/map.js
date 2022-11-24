// pages/map/map.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cloudURL:'cloud://cloud1-3gjatjl2f1e06dd4.636c-cloud1-3gjatjl2f1e06dd4-1315043544/map图片/',
    campus:["旗山校区","铜盘校区","集美校区","怡山校区","晋江校区","泉港校区"],
    type:"旗山校区",
    title:null,
    location:[],
    paragragh:[],
    imgURL:""
  },
  getSpots(){
    var that = this;
    wx.cloud.callFunction({
      name: 'getSpots',
      data:{
        title:this.data.type
      },
      success(res){
            if(res.result.data.length)
            {
              that.setData({
                location:res.result.data[0].data
              })
            }
            else{
              that.setData({
                location:[]
              })
            }
      },
      
    })
  },
  getIntroduction(){
    var that = this;
    wx.cloud.callFunction({
      name: 'getIntroduction',
      data:{
        title:this.data.title
      },
      success(res){
        console.log(res.result.data[0].image)
        that.setData({
          paragraph:res.result.data[0].data,
          imgURL:res.result.data[0].image
        })
      }
    })
  },
  mapchange(e){
    var ct=this.data.campus[e.detail.value];
    this.setData({
      type:ct,
      title:null
    });
    this.getSpots();
  },
  showinfo(e){
    if(!this.data.title||this.data.title!=e.currentTarget.dataset.title)
    {
      this.setData({
        title:e.currentTarget.dataset.title
      });
      this.getIntroduction();
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
    this.getSpots();
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