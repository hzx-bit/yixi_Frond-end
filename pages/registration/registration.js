// pages/registration/registration.js
let userName = "";
let userPhone = "";
let userQQ = "";
let userWeChat = "";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    id:0
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that=this;
    var info= JSON.parse(options.info);
    that.setData({
      id:info
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

  },



  formSubmit: function (e) {
    console.log('submit：', e.detail.value)

    userName = e.detail.value.userName;
    userPhone = e.detail.value.userPhone;
    userWeChat = e.detail.value.userWeChat;
    userQQ = e.detail.value.userQQ;

    /**
     * 判断用户是否提交为空列表
     */
    if (userName == ""  || userPhone == ""  || userWeChat == "") {
      wx.showToast({
        title: '请输入完整信息！',
        icon: 'none',
        duration: 2000
      });
    } else {
      //连后端后再加
      // this.signUpUserInfo();

      wx.showToast({
        title: '正在提交',
        icon: 'loading',
        duration: 1000,
        success: res => {
          wx.showModal({
            title: '报名成功',
            content: '期待你的加入！',
            showCancel: false,
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.navigateBack({
                  delta: 1,
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        },
        fail: err => {
          console.log('保存失败', err);
        },
      })
    }
  },

  signUpUserInfo: function () {
    // 连接数据库环境
    const db = wx.cloud.database();

    db.collection('classedDB').add({
      data: {
        userName : userName,
        userPhone : userPhone,
        userWeChat : userWeChat,
        userQQ : userQQ,
      },
      // 成功返回
      success: res => {
        console.log('添加成功', res._id);
      },
      fail: err => {
        console.log('添加失败', err);
      },
      complete: res => {
        console.log('添加完成', res)
      }
    })
  }
})