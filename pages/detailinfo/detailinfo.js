// pages/detailinfo/detailinfo.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
import Toast from '@vant/weapp/toast/toast';
var app =getApp();
Page({
    
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:defaultAvatarUrl,
    name: '',
    gender:'请选择性别',
    gendercl: ['男', '女'],
    city:'请选择城市',
    citycl:['福州','厦门'],
    birthday:'请选择日期',
    grade:'请选择年级',
    gradecl:['2018级','2017级','2016级','2015级',],
    major:'请选择专业',
    majorcl:['计算机','大数据','软件工程'],
    class:'请选择班级',
    classcl:['1班','2班','3班','4班','5班','6班'],
    term:'请选择阶段',
    termcl:['本科','硕士','博士','博士后'],
    phone:'',
    email:'',
    firm:'',
    work:'',
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      birthday: e.detail.value
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      gender:this.data.gendercl[e.detail.value]
    })
  },
  bindPickerChange1: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      city:this.data.citycl[e.detail.value]
    })
  },
  bindPickerChange2: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      grade:this.data.gradecl[e.detail.value]
    })
  },
  bindPickerChange3: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      major:this.data.majorcl[e.detail.value]
    })
  },
  bindPickerChange4: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      class:this.data.classcl[e.detail.value]
    })
  },
  bindPickerChange5: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      term:this.data.termcl[e.detail.value]
    })
  },
  submit:function(e) {
    
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
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