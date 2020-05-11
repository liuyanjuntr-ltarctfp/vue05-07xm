<template>
        <div class="bzt">
                <el-steps :active="1" align-center style="margin-top: 25px;">
                <el-step title="填写账号"></el-step>
                <el-step title="身份验证"></el-step>
                <el-step title="设置新密码"></el-step>
                <el-step title="完成"></el-step>
            </el-steps>
        </div>
</template>
<style>
    *{
        padding: 0;
        margin: 0;
    }
    .bzt{
        width: 100%;
        height: 100px;
        margin-top: 20px;
        background-color: #F5F5F5;
        overflow: hidden;
    }
</style>
<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>