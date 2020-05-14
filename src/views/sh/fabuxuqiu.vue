<template>
<div >
 
        
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

   
        <div class="box1">
            <div class="fab">发布需求</div>
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
                   <a href="#">发布需求</a>
                   </div>
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
                   <a href="#">发布需求</a></div>
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
                   <a href="#">发布需求</a></div>
              </div>   </div>  
               </div>

<div class="choose">如何选择合适的服务方案?</div>



         <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="yy"
        label="应用"
        width="180">
      </el-table-column>
      <el-table-column
        prop="xq"
        label="需求梳理"
        width="180">
      </el-table-column>
      <el-table-column
        prop="xm"
        label="整包项目">
      </el-table-column>
       <el-table-column
        prop="yd"
        label="云端工作">
      </el-table-column>
       <el-table-column
        prop="gy"
        label="短期雇佣">
      </el-table-column>
    </el-table>
  </template>


<div class="know">我想要进一步了解服务方案</div>
<div class="know1">如有任何问题，欢迎咨询客服热线：0571-28120931 转1</div> 

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



 </div>

    </div>
    
    
    
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
               tableData: [{
            yy: '服务定义',
            xq: '协助客户将产品想法转为专业的产品文档，明确产品功能。客栈将基于此进行报价。',
            xm: '软件研发项目整体外包，覆盖功能设计、开发到测试全流程，交付完整的产品。弄',
            yd:'按月聘用远程开发员工，支持灵活定制用工时间。',
            gy:'自行筛选、预约平台的程序员，按工时计价。'

          }, {
            yy: '适用场景',
            xq: '希望整体外包，但不具备产品策划能力，只有初步想法，具体功能需求不明确。。',
            xm: '研发定制化的软件产品，希望按时高质量地完成。产品需求已明确，但缺乏技术力量，需要委托开发。',
            yd:'希望快速、低成本地招聘到有经验的优秀人才；非核心技术岗位，工作量并不饱和。',
            gy:'小规模的开发或优化需求，通常一周以内；对技术有所了解，可以和开发者进行研发沟通。'

          }, {
            yy: '服务流程',
            xq: '客户经理了解需求→对接项目经理、产品经理协助梳理→交付产品文档、提供报价。',
            xm: '需求梳理→原型设计→UI设计→开发联调→测试验收→维护迭代弄',
            yd:'客户经理了解需求→对接开发者面试→确认录用、核定工资→开始工作、每天提交日报',
            gy:'筛选、预约开发者→开发者接单、沟通需求→托管费用→开发→确认完成、付款'

          }, {
            yy: '专属服务',
            xq: '专属的客户经理、项目经理、产品经理，提供1周的梳理服务。',
            xm: '专属的客户经理、项目经理全程跟进开发弄',
            yd:'专属的客户经理全程协助管理',
            gy:'无'

          },{
            yy: '收费标准',
            xq: '￥1980，如需开票另收税费6%',
            xm: '平台服务费14%，如需开票另收税费6%弄',
            yd:'平台服务费6%，如需开票另收税费6%',
            gy:'平台服务费7%，不提供开票服务'

          }]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
      
    }
}
</script>
<style >
     .box1{
        width:1200px;
        height:600px;
        /* border:1px solid red; */
        background: white;
        margin: 40px auto;
        /* position: relative; */
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
       color:black;
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
    color:black;
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
 .box1 .fab{
      width:200px;
      height:40px;
      /* border:1px solid red; */
      margin:  auto;
      text-align: center;
      line-height: 40px;
      font-weight: 600;
      color:black;
      font-size: 20px;
  }
   .box{
      width:1200px;
      height:500px;
      margin:40px auto;
      /* border:1px solid red; */
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
       /* background: #ccc; */
       /* line-height: 200px; */
       color:black;
       font-size: 14px;
       position: relative;
       /* cursor: pointer; */
   }
     .box .left .bottom1 .bottom1-1{
         width:300px;
       height:40px;
       /* border: 1px solid red; */
       position: absolute;
       top:80px;
        text-align: center;
        
     }
      .box .left .bottom1 .bottom1-2{
         width:300px;
       height:80px;
       /* border: 1px solid red; */
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
       /* background: #ccc; */
       /* line-height: 200px; */
       color:black;
       font-size: 14px;
       position: relative;
       /* cursor: pointer; */
   }
     .box .auto .bottom2 .bottom2-1{
         width:300px;
       height:40px;
       /* border: 1px solid red; */
       position: absolute;
       top:80px;
        text-align: center;
        
     }
      .box .auto .bottom2 .bottom2-2{
         width:300px;
       height:80px;
       /* border: 1px solid red; */
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
      .choose{
       width:300px;
       height:40px;
       margin:40px auto;
       /* border:1px solid red; */
       text-align: center;
      line-height: 40px;
      font-weight: 600;
      color:black;
      font-size: 20px;
     }
     .know{
       width:300px;
       height:40px;
       margin:40px auto;
       /* border:1px solid red; */
       text-align: center;
      line-height: 40px;
      font-weight: 600;
      color:black;
      font-size: 20px;
     }
     .know1{
       width:500px;
       height:40px;
       margin:-40px auto;
       /* border:1px solid red; */
       text-align: center;
      line-height: 40px;
      font-weight: 400;
      color:#333;
      font-size: 16px;
     } 
      .dibu{
    
  width: 100%;
  /* overflow: hidden; */
  height: 180px;
  margin:100px auto;
  /* border: 1px solid red; */
  background: #ccc;
  /* opacity: 0.5; */

  }
   .dibu .logo1{
    
  width: 120px;
  height: 120px;
 /* border:1px solid black; */
 background: green;
  margin-top:5px;
  margin-left:135px;
  float: left;
  /* margin-left:0px; */
  }
   .dibu .box-1{
    
  width: 900px;
  height: 160px;
 /* border:1px solid black; */
  margin-top:5px;
  margin-left:40px;
  float: left;
  overflow: hidden;
  }
    .dibu .text-01{
    
  width: 200px;
  height: 30px;
  margin-left:15px;
 /* border:1px solid black; */
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
 /* border:1px solid black; */
  font-size: 16px;
  font-weight: 600;
  display: flex;
  /* line-height: -30px; */
    flex-direction: row-reverse;

  /* cursor: pointer; */
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
 /* border:1px solid black; */
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
 /* border:1px solid black; */
  font-size: 16px;
  font-weight: 600;
  display: flex;
  /* line-height: -30px; */
    flex-direction: row-reverse;

  /* cursor: pointer; */
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
     /* border:1px solid red; */
     float: left;
     margin:-20px auto;
     margin-left:270px;
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
    }
   
    
</style>