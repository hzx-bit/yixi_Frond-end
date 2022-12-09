// pages/Vphoto/Vphoto.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    originUrl:"",
    ratio: 102 / 152,
    bgimg:'https://ts1.cn.mm.bing.net/th/id/R-C.dc08fe825b8bd2bf2871f5fffab08380?rik=rubO22eJyjaX1g&riu=http%3a%2f%2fp8.qhimg.com%2ft0184a2d603ef1708df.jpg&ehk=OmbXhn8hlAY6yILKMQwRPeBKqbJagfdu2q96zy23rc4%3d&risl=&pid=ImgRaw&r=0',
    bglist:['https://ts1.cn.mm.bing.net/th/id/R-C.dc08fe825b8bd2bf2871f5fffab08380?rik=rubO22eJyjaX1g&riu=http%3a%2f%2fp8.qhimg.com%2ft0184a2d603ef1708df.jpg&ehk=OmbXhn8hlAY6yILKMQwRPeBKqbJagfdu2q96zy23rc4%3d&risl=&pid=ImgRaw&r=0',
            'https://img-blog.csdnimg.cn/cbce3f3f25e145a29e768a057225e442.jpeg',
            'https://tenfei01.cfp.cn/creative/vcg/nowater800/new/VCG211361188550.jpg?x-oss-process=image/format,webp',
            'https://img-blog.csdnimg.cn/6d7569aa0f194fdcb37ddf9e2f465b33.jpeg'],
    rolelist:['https://img-blog.csdnimg.cn/ac0cb6a5aeb647078120004abb87147a.png',
              'https://img-blog.csdnimg.cn/fd7543c6d45f4378afff483bf287aa66.png',
              'https://img-blog.csdnimg.cn/8218faa729f247c2af28a043d223c6c3.png',
              'https://img-blog.csdnimg.cn/2f89de62fe38465aba9a4963f924172a.png',
              'https://tse4-mm.cn.bing.net/th/id/OIP-C.7d6RE4NN3NKkadybuAWNWwHaJf?w=142&h=182&c=7&r=0&o=5&dpr=1.8&pid=1.7',
              'https://tse2-mm.cn.bing.net/th/id/OIP-C.AROcE3NDOAvGSAjkB-4PZgHaJ7?w=117&h=173&c=7&r=0&o=5&dpr=1.8&pid=1.7',
              'https://tse1-mm.cn.bing.net/th/id/OIP-C.rLu0TrPBSWFstKgqnQtApgAAAA?w=139&h=185&c=7&r=0&o=5&dpr=1.8&pid=1.7',
              'https://ts1.cn.mm.bing.net/th?id=OIP-C.LxhP7nLTLiAU8xEZpMYnJAHaHa&w=176&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2'],
  },
  chooseImg:function(){
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success(res) {
        that.setData({
          originUrl: res.tempFilePaths[0],
        })
      }
    })
  },
  chooseBG:function(e){
    var index = e.currentTarget.id;
    index = index.slice(2);
    this.setData({
      bgimg:this.data.bglist[index]
    })
  },
  chooseRole:function(e){
    var index = e.currentTarget.id;
    index = index.slice(4);
    this.setData({
      originUrl:this.data.rolelist[index]
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