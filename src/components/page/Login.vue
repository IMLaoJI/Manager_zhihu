<template>

  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="账号" class="uname"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked"  class="remember" @change="handleChecked">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="submitForm('ruleForm')" :loading="logining">登录</el-button>
                <div class="bot">
                    <p style="font-size:12px;line-height:30px; float:left;" id="msg1">{{msg}}</p>  
                <i class="el-icon-search" style="float:right;margin-top:15px;"><a style="font-size:12px;line-height:30px; " @click="open3">找回密码</a></i>
                </div>
     
    </el-form-item>
  </el-form>

   
</template>

<script>
 import { requestLogin,mockrequestLogin } from '../../api/api';
  import NProgress from 'nprogress';
    export default {
        data: function(){
            return {
                logining: false,
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
                msg:"请认真输入。",
                length:0,
                checked: false

            }
        },


        mounted(){
    //     console.log("可以吗222");
    //             console.log(localStorage.getItem('user'));
    //             if(localStorage.getItem('user')!=null){
    //                 console.log("uoimhdashdhsadhsahdsahdhs");
    //                     document.getElementById("uname").value="dsadsa";
    
    //   }
      },

        methods: {
        

   submitForm(formName) {
        var _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //_this.$router.replace('/table');
            this.logining = true;
            NProgress.start();
            var loginParams = { username: this.ruleForm.username, password: this.ruleForm.password };
            console.log(loginParams);
            mockrequestLogin(loginParams).then(data => {
              console.log("ceshi");
              console.log(data);
              this.logining = false;
              NProgress.done();
              console.log(data);
             
              
              if (data.data.code !== 200) {
                this.$notify({
                  title: '密码错误',
                  message: "请重新输入",
                  type: 'error'
                });
              } else {
                this.$notify({
                            title: '登录成功',
                            message: `管理员${this.ruleForm.username}登录成功`,
                            type: 'success',
                            duration:2000
                            });
                            localStorage.setItem('ms_username',this.ruleForm.username);
                             var user = localStorage.getItem('ms_username');
                             console.log(user);
                            this.$router.push('/readme');
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      
         

      handleChecked(event ){
          
            if(this.checked == true){
                console.log("可以吗");
                  var loginParams = { username: this.ruleForm.username, password: this.ruleForm.password };
                    localStorage.setItem('user', JSON.stringify(loginParams)); 
                    console.log(localStorage.getItem('user')); 
            }
      },
            
             CheckAdmin() {
                  const self = this;
                var username = self.ruleForm.username;
                var password = self.ruleForm.password;
                console.log(username);
                console.log(password);
                //   console.log("dsdsads");
                self.$http.post('/api/admin/CheckAdmin', {
                    username: username,
                    password: password
                },{}).then((response) => {
                  
                    if(response.data==1){
                         self.$notify({
                            title: '登录成功',
                            message: `管理员${username}登录成功`,
                            type: 'success',
                            duration:2000
                            });
                            localStorage.setItem('ms_username',self.ruleForm.username);
                            self.$router.push('/readme');
                    }
                    else if(response.data==-2){
                        self.msg = "密码错误，请重新输入！";
                        var box1=  document.querySelector('#msg1');
                        box1.classList.add('active');        
                    }
                    else if (response.data==-1){
                          self.msg = "用户名不存在。请重新输入！";
                        var box1=  document.querySelector('#msg1');
                        box1.classList.add('active');   
                    }
                
                })
                },
                 open3() {
                      const self = this;
        self.$prompt('请输入找回密令', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消', 
         
           inputValidator:(value)=>{  
               
               if(value==1234){
                    return true
               }
               else{
                   return "密令错误"
               }
          }     
        }).then(({ value }) => {
         
          this.$message({
            type: 'success',
            message: '你的密码是: ' + '123456'
          });
        }).catch(() => {
          this.$message({

             
            type: 'info',
            message: '您没输入任何密令'
          });       
        });
      }
        }
    }
</script>

<style  scoped>

.login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
   
   
  }
   .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
     .remember {
      margin: 0px 0px 35px 0px;
    }
</style>