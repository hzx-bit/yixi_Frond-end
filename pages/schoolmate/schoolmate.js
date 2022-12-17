// pages/list/list.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userid:'',
    schoolmatesList:[],
    flag:true,
    name:''
  },
  fakeCallBack(){},
  findStudent(){
    console.log(this.data.name)
    var that= this;
    wx.cloud.callFunction({
      name: 'findStudentByName',
      data:{
        name:this.data.name
      },
      success(res){
        if(res.result.data.length){
          that.setData({
            schoolmatesList:res.result.data,
            flag:true
          })
        }
        else{
          wx.showToast({
            title: '查无此人!',
            icon:'error',
            duration:1000
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      usrid:app.globalData.usrid,
    })
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
    
    if(app.globalData.usrid)
    {
      this.setData({
        userid:app.globalData.usrid
      })
      if(this.data.flag)
      {
        var that = this;
        for(var i =0 ;i<6;i++){
          wx.cloud.callFunction({
            name: 'findStudentByUsrId',
            data:{
              usrId:i.toString()
            },
            success(res){
              that.setData({
                schoolmatesList:that.data.schoolmatesList.concat(res.result.data[0])
              })
            }
          })
        }
        this.setData({
          flag:false
        })
      }
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
    this.setData({
      schoolmatesList:[],
      name:''
    })
    var that = this;
    for(var i =0 ;i<6;i++){
      wx.cloud.callFunction({
        name: 'findStudentByUsrId',
        data:{
          usrId:i.toString()
        },
        success(res){
          that.setData({
            schoolmatesList:that.data.schoolmatesList.concat(res.result.data[0])
          })
        }
      })
    }
    this.setData({
      flag:false
    })
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
