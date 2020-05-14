<template>
    <div class="bjtp">
       <div class="box">
         <h1>登  录</h1>
         <div class="hr"></div>
         <div class="shuru">
            <el-input placeholder="您的手机号/用户名/邮箱" v-model="input1" clearable>
              <template slot="prepend">请输入</template>
              </el-input>
         </div>
         <div class="shuru">
           <el-input placeholder="您的密码" v-model="input2" show-password maxlength="6">
              <template slot="prepend">请输入</template>
              </el-input>
              <label style="float: left; margin-top: 10px; font-size: 12px; margin-left: 10px;">没有账号？
                <a href="#" style=" text-decoration: none; color: #258FE6">去注册</a>
              </label>
              <label style="float: right; margin-top: 10px; font-size: 12px">
                <a href="#" style=" text-decoration: none; color: #258FE6">忘记密码？</a>
              </label>
              <el-button type="primary" class="dl" @click="dengLu()">登  录</el-button>
              <el-checkbox v-model="checked" style="color: black">点击登录表示你已阅读并且同意该协议</el-checkbox>
         </div>
       </div>
    </div>
</template>
<style>
    *{
      padding: 0;
      margin: 0;
    }
    .bjtp{
      width: 100%;
      height: 600px;
      background-size: 100% 100%;
      overflow: hidden;
      background-image: url(../../assets/zhuce.jpg);
    }
    .box{
      width: 400px;
      height: 450px;
      /* background-color: #F4F5F9; */
      background-color: white;
      margin: 40px auto;
      opacity: 0.85;
    }
    .box h1{
      width: 130px;
      height: 80px;
      margin: auto;
      /* background-color: red; */
      font-family: "kaiti";
      font-size: 32px;
      font-weight: normal;
      text-align: center;
      color: #1d2a3a;
      line-height: 80px;
    }
    .hr{
      width: 360px;
      height: 1px;
      background: #eee;
      /* background: white; */
      margin-bottom: 12px;
      margin: auto;
    }
    .shuru{
      width: 300px;
      margin: 40px auto;
    }
    .el-select .el-input {
    width: 130px;
    }
    .input-with-select .el-input-group__prepend {
      background-color: #fff;
    }
    .dl{
      font-size: 20px;
      width: 300px;
      margin: auto;
      margin: 40px 0px 10px 0px;
    }
</style>
<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      checked: false,
      id: " "
    }
  },
  methods:{
     dengLu(){
         var formdata=new FormData()
         this.$axios.post('/api/login',{
            email: this.input1,
            password: this.input2,
         }).then(res=>{
             console.log(res)
             var codes=res.data.code
             if(codes===200){
                this.$message({
                message: '登录成功',
                type: 'success'
                });
             }else{
                 alert('账号或密码输入错误')
             }
         })
     },

  },

}
</script>