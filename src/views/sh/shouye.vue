<template>
<div>
    <div class="bg">
        
            <div class="box-01">
                <div class="logo">LOGO</div>
                <div class="right">
                   <a href="sy">首页</a>
                <el-dropdown>
  <span class="el-dropdown-link">
    更多服务<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>技术圈</el-dropdown-item>
    <el-dropdown-item>兼职招聘</el-dropdown-item>
    <el-dropdown-item >解决方式</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
 <a href="#" class="a2">程序员</a>
  <a href="#" class="a3">云端工作</a>
   <el-input placeholder="请输入要查找的程序员" v-model="input" class="input-with-select">
    <template slot="append">  <el-button slot="append" icon="el-icon-search"></el-button></template>
  </el-input>
  <a href="#" class="a4">项目发布</a>
 <a href="zc" class="a5">注册</a>
  <a href="#" class="a6">登录</a>
  </div> 
</div>
          <div class="wenben">互联网软件开发外包服务平台</div>
           <div class="wenben2">优秀的开发者，更多专业的开发团队，提供全方位软件开发服务</div>
           <div class="fb">
        <a href="fb" >发布需求</a></div>
     </div> 
    
     <div class="heli-fangan">合理开发方案</div>
     <div class="box">
          <div class="left">
             <div class="top1">
                 需求梳理
              </div>
              <div class="bottom1">
                 <div class="bottom1-1">
                  产品需求规划，是软件项目成功的关键，<br/>
            帮助您把产品想法更好地落地。
                 </div>
<div class="bottom1-2">
                严选资深产品专家 更懂用户的需求<br/>
标准产品文档 节约40%开发成本,<br/>
免费提供开发工期、报价评估服务。
                 </div>
                 <div class="button-1">
                   <a href="#">了解详情</a></div>
              </div>   </div>   
              
              <div class="auto">
             <div class="top2">
                 整包项目
              </div>
              <div class="bottom2">
                 <div class="bottom2-1">
              一站式软件开发服务，智能匹配优质开发<br/>者，五星级的过程体验和交付质量。。
                 </div>
<div class="bottom2-2">
        专属项目经理全程跟进 轻松高效<br/>
标准化开发流程 可视化在线监管<br/>
按阶段付款 平台托管担保。
                 </div>
                 <div class="button-2">
                   <a href="#">了解详情</a></div>
              </div>   </div>  
              
                 <div class="right">
             <div class="top3">
                 云端工作
              </div>
              <div class="bottom3">
                 <div class="bottom3-1">
              按月聘用程序员，最快一天到岗，节省<br/>55%的人力成本。。
                 </div>
<div class="bottom3-2">
          优选5年+经验的资深开发者<br/>
可选全职兼职，支持定制每周工时<br/>
每天提交日报，进度可控。
                 </div>
                 <div class="button-3">
                   <a href="#">了解详情</a></div>
              </div>   </div>  
              </div>


              <div class="best">优秀程序员推荐</div>

              <div class="c-box">
                  <div class="row1" >
                   <div class="demo-basic--circle">
                     <div class="block"><el-avatar :size="100" :src="circleUrl"></el-avatar></div>
                     <div class="block" v-for="size in sizeList" :key="size">
                     <el-avatar :size="size" :src="circleUrl"></el-avatar>
                     </div>
                     <div class="name">
                      名字
                     </div>
                     <div class="time">
                      2020-05-13
                     </div>
                     <div class="pj">
                       邮箱

                     </div>
                   </div>

               </div>
               <div class="row2"  >
                   <div class="demo-basic--circle">
                     <div class="block"><el-avatar :size="100" :src="circleUrl"></el-avatar></div>
                     <div class="block" v-for="size in sizeList" :key="size">
                     <el-avatar :size="size" :src="circleUrl"></el-avatar>
                     </div>
                     <div class="name">
                      名字
                     </div>
                     <div class="time">
                      2020-05-13
                     </div>
                     <div class="pj">
                         邮箱
                     </div>
                   </div>

               </div>
                <div class="row3" >
                   <div class="demo-basic--circle">
                     <div class="block"><el-avatar :size="100" :src="circleUrl"></el-avatar></div>
                     <div class="block" v-for="size in sizeList" :key="size">
                     <el-avatar :size="size" :src="circleUrl"></el-avatar>
                     </div>
                     <div class="name">
                      名字
                     </div>
                     <div class="time1">
                      2020-05-13
                     </div>
                     <div class="pj">
                      邮箱
                     </div>
                   </div>

               </div>
                <div class="row4" >
                   <div class="demo-basic--circle">
                     <div class="block"><el-avatar :size="100" :src="circleUrl"></el-avatar></div>
                     <div class="block" v-for="size in sizeList" :key="size">
                     <el-avatar :size="size" :src="circleUrl"></el-avatar>
                     </div>
                     <div class="name">
                      名字
                     </div>
                     <div class="time">
                      2020-05-13
                     </div>
                     <div class="pj">
                      邮箱
                     </div>
                   </div>

               </div>

             </div>

<!--   
     <div class="back">
       <div class="fb1">
        <a href="fb" >发布需求</a></div>
        <div class="fb2">
        <a href="#" >申请签约</a></div>
     </div>
 <div class="dibu">
   <div class="logo1">LOGO1</div>
    <div class="box-1" >
      <div class="text-01">
        重点城市程序员兼职推荐
      </div>
      <div class="text-02">
         <a href="#" >北京程序员兼职</a>
         <a href="#" >上海程序员兼职</a>
         <a href="#" >深圳程序员兼职</a>
         <a href="#">杭州程序员兼职</a>
         <a href="#"  >广州程序员兼职</a>
         <a href="#">成都程序员兼职</a>
         <a href="#" >武汉程序员兼职</a>
      </div>
  

      <div class="text-03">
        重点岗位程序员兼职推荐
      </div>
      <div class="text-04">
         <a href="#" >Java兼职</a>
         <a href="#" >c++兼职</a>
         <a href="#" >PHP兼职</a>
         <a href="#" >c兼职</a>
         <a href="#"  >c#兼职</a>
         <a href="#" >Python兼职</a>
         <a href="#" >Ruby兼职</a>
         <a href="#" >Node.js兼职</a>
      </div>

</div>
<div class="bottom-line">
 <div class="text-05">
         <a href="#" >app下载</a>
         <a href="#" >帮助</a>
         <a href="#" >关于我们</a>
         <a href="#" >合作伙伴</a>
         <a href="#"  >意见反馈</a>
         <a href="#" >远程工作</a>
      </div>
</div>



 </div> -->
 
     
     
     
     
     
     
   </div> 
</template>
<script>
export default {
      data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input:'',
          input2: '',
            input3: '',
             circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
              sizeList: [],
              dataList:[],
           
      };
    },
    mounted(){
      this.cxyData()
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      cxyData(){
       this.axios.post('/kz/excellent').then(res =>{
        //  console.log(res);
        // this.dataList=res.data.showExcellentAvatar;
        console.log(res.data.data.showExcellentAvatar);
        // console.log(this.dataList);
        
       })
      }
    }
}
</script>
<style >
    .bg{
        width: 100%;
  height: 510px;
  background-size: 100% 100%;
  background-image: url(../../assets/kejifeng.jpg);
  overflow: hidden;
  opacity: 0.8; 
    }
   .box-01 {
       width:1000px;
       height:82px;
       border:1px solid black;
       margin: 10px auto;
       position: relative;
   }
   .logo{
       width:120px;
       height:82px;
       background: green;
       position: absolute;
       left: 30px;
   }
   .right{
       width:960px;
       height:82px;
       border:1px solid black;
       position: absolute;
       right:-130px;
       
   }
   a{
       text-decoration: none;
       color:white;
   }
   .a2{
       margin-left:30px;
   }
    .a3{
       margin-left:30px;
   }
     .a4{
       margin-left:40px;
   }
    .a5{
       margin-left:30px;
   }
   .a6{
       margin-left:30px;
   }
     .el-dropdown-link {
    cursor: pointer;
    color:white;
    margin-left:30px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .input-with-select{
      width:240px;
      left:30px;
      border-radius:30px 30px;
      margin-top:20px;
  }
  .wenben{
      width: 1000px;
      height:60px;
      /* border: 1px solid red; */
      margin:90px auto;
      color:white;
      text-align: center;
      line-height:55px;
      font-size: 40px;
      font-weight: bold;
  }
   .wenben2{
      width: 1000px;
      height:40px;
      /* border: 1px solid red; */
      margin:-30px auto;
      color:white;
      text-align: center;
      line-height:40px;
      font-size: 28px;
      font-weight: 400;
  }
    .fb{
        text-decoration: none;
      width: 240px;
      height:40px;
      margin:90px auto;
      margin-left:540px;
      text-align: center;
      background:#249AFC;
      line-height:-20px;
      font-size: 24px;
      font-weight: 400;
      border-radius: 30px 30px;
      cursor: pointer;
  }
  .fb:hover{
      background:#249AFC;
      opacity: 0.8; 
  }
  .heli-fangan{
      width: 240px;
      height:40px;
      margin:40px auto;
   
       line-height:-20px;
      font-size: 24px;
      text-align: center;
      font-weight: 400;
  }
  .box{
      width:1200px;
      height:500px;
      margin:40px auto;

      position: relative;
  }
  .box .left{
      width:300px;
      height:500px;
      border:1px solid #ccc;
      box-shadow: #ccc;
      position: absolute;
      left:0;
      top:10px;
      float: left;
      cursor: pointer;
  }
  .box .left:hover{
     box-shadow: #ccc 1px 1px;
  }
   .box .left .top1{
       width:300px;
       height:200px;
       background-image: url(../../assets/background.jpg);
       background-position: -444px -1360px;
       opacity: 0.7;
       text-align: center;
       line-height: 200px;
       color:white;
       font-size: 34px;
       font-weight: 400;
       cursor: pointer;
   }
    .box .left .top1:hover{
        background:#249AFC;
        color:white;
    }
     .box .left .bottom1{
       width:300px;
       height:400px;
       text-align: center;
  
       color:black;
       font-size: 14px;
       position: relative;
 
   }
     .box .left .bottom1 .bottom1-1{
         width:300px;
       height:40px;

       position: absolute;
       top:80px;
        text-align: center;
        
     }
      .box .left .bottom1 .bottom1-2{
         width:300px;
       height:80px;
    
       position: absolute;
       top:140px;
        text-align: center;
     }
      .box .left .bottom1 .button-1{
         width:100px;
       height:40px;
       border: 1px solid #ccc;
       position: absolute;
       top:240px;
       left:100px;
        text-align: center;
        line-height:40px;
            cursor: pointer;
     }
     .box .left .bottom1 .button-1 a{
       color:black;
   
     }
      .box .left .bottom1 .button-1:hover{
        background: #2298FA; 
      }
     .box .left .bottom1 .button-1 a:hover{
       color:white;
     }
      .box .auto{
      width:300px;
      height:500px;
      border:1px solid #ccc;
      box-shadow: #ccc;
      position: absolute;
      left:450px;
      top:10px;
      float: left;
      cursor: pointer;
      
  }
  .box .auto:hover{
     box-shadow: #ccc 1px 1px;
  }
   .box .auto .top2{
       width:300px;
       height:200px;
       background-image: url(../../assets/kejifeng.jpg);
       background-position: -444px -1360px;
       opacity: 0.7;
       text-align: center;
       line-height: 200px;
       color:white;
       font-size: 34px;
       font-weight: 400;
       cursor: pointer;
   }
    .box .auto .top2:hover{
        background:#249AFC;
        color:white;
    }
     .box .auto .bottom2{
       width:300px;
       height:400px;
       text-align: center;
 

       color:black;
       font-size: 14px;
       position: relative;
 
   }
     .box .auto .bottom2 .bottom2-1{
         width:300px;
       height:40px;
   
       position: absolute;
       top:80px;
        text-align: center;
        
     }
      .box .auto .bottom2 .bottom2-2{
         width:300px;
       height:80px;
     
       position: absolute;
       top:140px;
        text-align: center;
     }
      .box .auto .bottom2 .button-2{
         width:100px;
       height:40px;
       border: 1px solid #ccc;
       position: absolute;
       top:240px;
       left:100px;
        text-align: center;
        line-height:40px;
            cursor: pointer;
     }
     .box .auto .bottom2 .button-2 a{
       color:black;
   
     }
      .box .auto .bottom2 .button-2:hover{
        background: #2298FA; 
        color:white;
      }
     .box .auto .bottom2 .button-2 a:hover{
       color:white;
     }
      .box .right{
      width:300px;
      height:500px;
      border:1px solid #ccc;
      box-shadow: #ccc;
      position: absolute;
      right:0;
      top:10px;
      float: left;
      cursor: pointer;
  }
  .box .right:hover{
     box-shadow: #ccc 1px 1px;
  }
   .box .right .top3{
       width:300px;
       height:200px;
       background-image: url(../../assets/kj-01.jpg);
       background-position: -444px -1360px;
       opacity: 0.7;
       text-align: center;
       line-height: 200px;
       color:white;
       font-size: 34px;
       font-weight: 400;
       cursor: pointer;
   }
    .box .right .top3:hover{
        background:#249AFC;
        color:white;
    }
     .box .right .bottom3{
       width:300px;
       height:400px;
       text-align: center;
       /* background: #ccc; */
       /* line-height: 200px; */
       color:black;
       font-size: 14px;
       position: relative;
       /* cursor: pointer; */
   }
     .box .right .bottom3 .bottom3-1{
         width:300px;
       height:40px;
       /* border: 1px solid red; */
       position: absolute;
       top:80px;
        text-align: center;
        
     }
      .box .right .bottom3 .bottom3-2{
         width:300px;
       height:80px;
       /* border: 1px solid red; */
       position: absolute;
       top:140px;
        text-align: center;
     }
    .box .right .bottom3 .button-3{
      width:100px;
       height:40px;
       border: 1px solid #ccc;
       position: absolute;
       top:240px;
       left:100px;
        text-align: center;
        line-height:40px;
            cursor: pointer;
    }
      .box .right .bottom3 .button-3 a{
       color:black;
   
     }
      .box .right .bottom3 .button-3:hover{
        background: #2298FA; 
        color:white;
      }
     .box .right .bottom3 .button-3 a:hover{
       color:white;
     }
   .best{
      width: 240px;
      height:40px;
      margin:40px auto;
      /* border:1px solid red; */
       line-height:-20px;
      font-size: 24px;
      text-align: center;
      font-weight: 400;
  }
    .best-01{
      margin:-20px auto;
       line-height:-20px;
      font-size: 18px;
      text-align: center;
      font-weight: 200;
  }
   .best-02{
      width: 360px; 
       height:120px;
      margin:40px auto;
  }
  .c-box{
    width:1200px;
    height:320px;
    margin:20px auto;
    border:1px solid red;
    position: relative;
  }
.c-box .row1{
  width: 290px;
  height:320px;
  border:1px solid black;
  position: absolute;
  top: 0;
  left:0;
}
.c-box .row1 .demo-basic--circle{
  width:100px;
  height:100px;
  /* border:1px solid red; */
  margin:10px auto;
  text-align: center;
  line-height: 100px;
}
.c-box .row1 .name{
  width:80px;
  height:30px;
  border:1px solid red;
  margin:-30px auto;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color:#333;
}
.c-box .row1 .time{
  width:80px;
  height:30px;
  border:1px solid red;
  margin:30px auto;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color:#333;
}
.c-box .row1 .pj{
  width:80px;
  height:30px;
  border:1px solid red;
  margin:-15px auto;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color:#333;
}




.c-box .row2{
  width: 290px;
  height:320px;
  border:1px solid black;
  position: absolute;
  top: 0;
  left:300px;
}
.c-box .row2 .demo-basic--circle{
  width:100px;
  height:100px;
  border:1px solid red;
  margin:10px auto;
  text-align: center;
  line-height: 100px;
}
.c-box .row2 .name{
  width:80px;
  height:30px;
  border:1px solid red;
  margin:-30px auto;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color:#333;
}
.c-box .row2 .time{
  width:80px;
  height:30px;
  border:1px solid red;
  margin:30px auto;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color:#333;
}
.c-box .row2 .pj{
  width:80px;
  height:30px;;
  border:1px solid red;
  margin: -15px auto;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color:#333;
}


.c-box .row3{
  width: 290px;
  height:320px;
  border:1px solid black;
  position: absolute;
  top: 0;
  left:600px;
}
 .c-box .row3 .demo-basic--circle{
  width:100px;
  height:100px;
  border:1px solid red;
  margin:10px auto;
  text-align: center;
  line-height: 100px;
}

.c-box .row3 .name{
  width:80px;
  height:30px;
  border:1px solid red;
  margin:-30px auto;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color:#333;
}
 .c-box .row3 .time1{
  width:80px;
  height:30px;
  border:1px solid red;
  margin:30px auto;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color:#333;
} 
.c-box .row3 .pj{
 width:80px;
  height:30px;;
  border:1px solid red;
  margin:-15px auto;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color:#333;
} 

.c-box .row4{
  width: 290px;
  height:320px;
  border:1px solid black;
  position: absolute;
  top: 0;
  right:0;
}  
.c-box .row4 .demo-basic--circle{
  width:100px;
  height:100px;
  border:1px solid red;
  margin:10px auto;
  text-align: center;
  line-height: 100px;
}
.c-box .row4 .name{
  width:80px;
  height:30px;
  border:1px solid red;
  margin:-30px auto;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color:#333;
}
.c-box .row4 .time{
  width:80px;
  height:30px;
  border:1px solid red;
  margin:30px auto;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color:#333;
}
.c-box .row4 .pj{
  width:80px;
  height:30px;;
  border:1px solid red;
  margin:-15px auto;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color:#333;
}


 


/* .back {
  width: 100%;
  height: 400px;
  background-size: 100% 100%;
  background-image: url(../../assets/kj-07.jpg);
  margin:130px auto;
  overflow: hidden;
}
  .back .fb1{
        text-decoration: none;
      width: 240px;
      height:40px;
      margin:100px auto;
      margin-left:540px;
      text-align: center;
      background:#249AFC;
      line-height:-20px;
      font-size: 24px;
      font-weight: 400;
      border-radius: 30px 30px;
      cursor: pointer;
  }
 .back .fb1:hover{
      background:#249AFC;
      opacity: 0.8; 
  }
   .back .fb2{
        text-decoration: none;
      width: 240px;
      height:40px;
      margin:100px auto;
      margin-left:540px;
      text-align: center;
      background:#249AFC;
      line-height:-20px;
      font-size: 24px;
      font-weight: 400;
      border-radius: 30px 30px;
      cursor: pointer;
  }
 .back .fb2:hover{
      background:#249AFC;
      opacity: 0.8; 
  }
  .dibu{
    
  width: 100%;
  height: 880px;
  margin:-100px auto;

  background: #ccc;


  }
   .dibu .logo1{
    
  width: 120px;
  height: 120px;

 background: green;
  margin-top:5px;
  margin-left:170px;
  float: left;
  
  }
   .dibu .box-1{
    
  width: 900px;
  height: 160px;

  margin-top:5px;
  margin-left:40px;
  float: left;
  overflow: hidden;
  }
    .dibu .text-01{
    
  width: 200px;
  height: 30px;
  margin-left:15px;
  font-size: 16px;
  color:#444;
  font-weight: 800;
  cursor: pointer;
  margin-top:5px;
  }
  .dibu .text-01:hover{
    color:#1E93F5;
  }
     .dibu .text-02{
    margin-top:-5px;
  width: 800px;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
    flex-direction: row-reverse;


  }
  .dibu .text-02 a{
    margin:5px auto ;
    color:#666;
    font-size:12px;
    text-decoration: none;
    
  }
    .dibu .text-02 a:hover{
      color:#1E93F5;
    }
    

      .dibu .text-03{
    margin-top:5px;
  width: 200px;
  height: 30px;
  margin-left:15px;
  font-size: 16px;
  color:#444;
  font-weight: 800;
  cursor: pointer;
  }
  .dibu .text-03:hover{
    color:#1E93F5;
  }
     .dibu .text-04{
    margin-top:-10px;
  width: 800px;
  height: 30px;
  margin-left:-10px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
    flex-direction: row-reverse;


  }
  .dibu .text-04 a{
    margin:10px auto ;
    color:#666;
    font-size:12px;
    text-decoration: none;
    
  }
    .dibu .text-04 a:hover{
      color:#1E93F5;
    }
    .dibu .bottom-line{
     width:600px;
     height:20px;
     float: left;
     margin:-20px auto;
     margin-left:300px;
    }
      .dibu .bottom-line a{
    margin:10px auto;
    color:#444;
    font-size:14px;
    margin-left:40px;
    text-decoration: none;
    
    
  }
    .dibu .bottom-line a:hover{
      color:#1E93F5;
    } */
   
    
</style>