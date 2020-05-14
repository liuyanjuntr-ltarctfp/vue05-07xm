<template>
  <div class="bg">
    <div class="box">
      <h1>注册账号</h1>
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" placeholder="请输入正确的邮箱"></el-input>
        </el-form-item>
        <div style="margin-top: 15px;">
          <el-form-item label="验证码" prop="yzm">
            <el-input placeholder="请输入验证码" v-model="ruleForm.yzm">
              <template slot="append"><el-button @click="getyzm">获取验证码</el-button> </template>
            </el-input>
          </el-form-item>
        </div>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            placeholder="请再次确认密码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="zc" @click="submitForm('ruleForm' )">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>


export default {
     data() {
       var validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请正确填写邮箱'));
        } else {
          if (value !== '') { 
            var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!reg.test(value)){
              callback(new Error('请输入有效的邮箱'));
            }
          }
          callback();
        }
      };
         var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      


      return {
         numberValidateForm: {
          number: '',
        creationTime:"creationTime"
        },
        

         dynamicValidateForm: {
          domains: [{
            value: ''
          }],
         
        },
        ruleForm: {
          email:'',
          yzm:'',
          username:'',
          password:'',
        },
        // rules: {
        //   number:[
        //       { required: true, message: '请输入正确的验证码', trigger: 'blur' }
        //   ],
        //   name: [
        //     { required: true, message: '请输入正确的用户名', trigger: 'blur' },
        //     { min: 3, max: 5, message: '长度在 3个到5个字符', trigger: 'blur' }
            
        //   ],
        //   pass: [
        //     { validator: validatePass, trigger: 'blur' },
        //     { min: 3, max: 5, message: '长度在 16个字符，只能输入字母和数字', trigger: 'blur' }
            
        //   ],
        //   checkPass: [
        //     { validator: validatePass2, trigger: 'blur' },
        //     { min: 3, max: 5, message: '长度在 16个字符，只能输入字母和数字', trigger: 'blur' }
        //   ],  
        //     email: [
        //  { required: true, message: '邮箱不能为空' },
        //   { pattern:/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g, message: "请输入正确的邮箱", trigger: "blur"}
        // ],
        }
      // };
    },
    created(){
      //  this.getyam();
    },
    methods: {
      getyzm(){
        this.$axios.post('/kz/verification/code',{user_email:this.ruleForm.email}).then(res =>{
          console.log(res);
          // console.log(user_email);
        })
        //  this.$axios.post('/wb/sendEmail',{email:this.ruleForm.email}).then(res =>{
        //   console.log(res);
        // })
       },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          // this.$axios.post('/wb/register',{
          //   email:this.ruleForm.email,
          //   code:this.ruleForm.yzm,
          //   username:this.ruleForm.username,
          //   password:this.ruleForm.password,
          //   }).then(res =>{
          //   console.log(res);
          //   if(res.data.code===200){
          //     // this.$router.push('/deng')
          //   }
          // })
            this.axios.post('/kz/register',{
             user_name: this.ruleForm.name,
              user_email:this.ruleForm.email,
              // "user_avatar": this.ruleForm.avatar,
              user_password: this.ruleForm.password,
              // "user_role": this.ruleForm.role,
              verificationCode: this.ruleForm.yzm

            }).then(res => {
              console.log(res);
              if(res.data.code===200){
          this.$router.push('/denglu') 
          }
            })




          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style>
.bg {
  width: 100%;
  height: 600px;
  background-size: 100% 100%;
  background-image: url(../../assets/chongzhi.jpg);
  overflow: hidden;
}
.box {
  width: 500px;
  height: 500px;
  background: #ccc;
  margin: 40px auto;
  opacity: 0.9;
}
.box h1 {
  font-size: 30px;
  color: black;
  font-weight: 100;
  text-align: center;
  line-height: 80px;
}
.demo-ruleForm {
  margin: 20px auto;
  width: 400px;
}
.qy {
  width: 400px;
  margin: auto;
}
.username {
  width: 300px;
  margin: auto;
}
.zc {
  width: 300px;
  margin: auto;
}
</style>