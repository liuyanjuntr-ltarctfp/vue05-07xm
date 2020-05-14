<template>
    <div>
        
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
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>