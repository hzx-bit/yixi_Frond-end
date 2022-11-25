// pages/detailinfo/detailinfo.js
import Toast from '@vant/weapp/toast/toast';
var app =getApp();
Page({
    
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:'../../icon/avatar.png',
    name: '',
    gender:'请选择性别',
    gendercl: ['男', '女'],
    city:'请选择城市',
    citycl:['福州','厦门'],
    birthday:'请选择出生日期',
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
    usrid:''
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





  submitInfo:function() {
    wx.cloud.init()
    const db=wx.cloud.database()

//新增usr记录
async function addUsr(usrId,Name,Birthday,Gender,City,Grade,Major,Class,Term,Phone,Email,Firm,Wrok,AvatarUrl) {
  var time = usrId;
  if(usrId == "") time = Date.now().toString()
  db.collection("usr").add({
    data:{
      usrId:time,
      name:Name,
      birthday:Birthday,
      gender:Gender,
      city:City,
      grade:Grade,
      major:Major,
      class:Class,
      term:Term,
      phone:Phone,
      email:Email,
      firm:Firm,
      wrok:Wrok,
      avatarUrl:AvatarUrl
    }
  })
  return time
}

//判断在student表中是否存在
async function test(Name, Birthday) {
  var Data = await db.collection("student").where({
     name: Name, birthday: Birthday 
    }).get();
  if(Data.data.length==0) Data.data = true;
  else Data.data = false;  
  return Data.data;
}

//更新student数据
async function UpDateStudent(Name,Birthday,UserId,Url,Info){
  db.collection('student').where({name:Name,birthday:Birthday}).update({
    data:{
      usrId:UserId,
      avatarUrl:Url,
      info:Info
    }
  })//有错误
  console.log(Name,Birthday,UserId,Url,Info)
}

//删除指定usr记录
async function deleteUsr(usrId){
    db.collection("usr").where({usrId:usrId}).remove()
    .then(res=>{
      console.log("deleteUsr success");
    })
}

/*
总的说一下吧，就是先接受用户提交的13个值，然后先判断ID是不是空，
为空判断名字生日在student表存不存在，不存在拒绝这次提交，（不返回值）
存在先写入user表获取ID值，把非空其他字符拼起来获取info，ID，info，头像src写入student表，（返回id）
如果提交ID不为空通过ID查找到usr表对应的值，先删，再添加(返回id)
*/
async function func(usrId,Name,Birthday,Gender,City,Grade,Major,Class,Term,Phone,Email,Firm,Wrok,AvatarUrl){
    let flag_1 = true ;
    let id;
    if (usrId == "") flag_1 = false;
    //usrId为空
    if (!flag_1) {
      let flag_2 = true;
      test(Name,Birthday);
      //在student表中存在
      if(flag_2){
          id = await addUsr(usrId,Name,Birthday,Gender,City,Grade,Major,Class,Term,Phone,Email,Firm,Wrok,AvatarUrl);
          console.log("id已存在,修改为",id);
          //拼写info
          let info = "";
          if(Gender != "") info = info + Gender + "|";
          if(City != "") info = info + City + "|";
          if(Grade != "") info = info + Grade + "|";
          if(Major != "") info = info + Major + "|";
          if(Class != "") info = info + Class + "|";
          if(Term != "") info = info + Term + "|";
          if(Phone != "") info = info + Phone + "|";
          if(Email != "") info = info + Email + "|";
          if(Firm != "") info = info + Firm + "|";
          if(Wrok != "") info = info + Wrok + "|";

          console.log(info)
          //ID，info，头像src写入student表
          UpDateStudent(Name,Birthday,id,AvatarUrl,info);

          //返回usrId
          console.log("return id",id);
          return id;
      }
      //student表中不存在
      else return 
    }
    //usrId不为空
    else{
      deleteUsr(usrId);
      id=await addUsr(usrId,Name,Birthday,Gender,City,Grade,Major,Class,Term,Phone,Email,Firm,Wrok,AvatarUrl);
      let info = "";
          if(Gender != "") info = info + Gender + "|";
          if(City != "") info = info + City + "|";
          if(Grade != "") info = info + Grade + "|";
          if(Major != "") info = info + Major + "|";
          if(Class != "") info = info + Class + "|";
          if(Term != "") info = info + Term + "|";
          if(Phone != "") info = info + Phone + "|";
          if(Email != "") info = info + Email + "|";
          if(Firm != "") info = info + Firm + "|";
          if(Wrok != "") info = info + Wrok + "|";

          console.log(info)
          //ID，info，头像src写入student表
          UpDateStudent(Name,Birthday,id,AvatarUrl,info);
      console.log("return id",id)
      return id;
    }
}
var retid = func(this.data.usrid,this.data.name,this.data.birthday,this.data.gender,this.data.city,this.data.grade,this.data.major,this.data.class,this.data.term,this.data.phone,this.data.email,this.data.firm,this.data.work,this.data.avatarUrl);
  app.globalData.usrid = retid;
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  },
  inputName(e){
    console.log(e.detail);
    this.setData({
      name:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      usrid:app.globalData.usrid
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

  }
})