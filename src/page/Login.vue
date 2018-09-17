<template>
  <div>
    <el-container>
      <el-col :span="5">
        <el-form :rules="rules" ref="formData" label-width="80px" :model="formData">
          <el-form-item prop="userId" label="手机号">
            <el-input v-model="formData.userId"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input type="password" v-model="formData.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('formData')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-container>
  </div>
</template>

<script>
  import {login} from "../api/getData";

  export default {
    name: "Login",
    data() {
      return {
        formData: {
          userId: '',
          password: ''
        },
        rules: {
          userId: [
            {required: true, message: "请输入手机号", trigger: "blur"},
            {min: 11, max: 11, message: "手机号格式不正确", trigger: "blur"}
          ],
          password: [
            {required: true, message: "请输入密码", trigger: "blur"},
            {min: 6, max: 16, message: "密码长度在6-16之间", trigger: "blur"}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let {userId, password} = this.formData
            login({userId, password})
              .then(res => {
                if(res.success==true){
                  this.$message({message: '登录成功', type: 'success'})
                }
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .el-col {
    margin: 0 auto;
  }
</style>
