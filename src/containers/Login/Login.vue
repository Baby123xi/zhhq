<template>
    <div class="login">
         <NavBar  leftIcon="icon-fanhui"  fixed="true" title="登录" @leftActive="back()"/>
          <main class="main">
              <form class="login-form">
                 <input type="text" placeholder="请输入用户名" class="input-text" v-model="username"> 
                  <input type="password" placeholder="请输入密码" class="input-text" v-model="password">
                  <p style="text-align:right"><span>我忘记了密码？</span><router-link  to="/register" style="color:#288bf0">找回</router-link ></p>

                 <input type="button" value="登录" class="input-button"  @click="login">
              </form>
          </main>
    </div>
</template>

<script>
import NavBar from '../../components/NavBar/NavBar.vue'
export default {
  name: 'login',
  created: {

  },
  data () {
    return {
      password:"zyy",
      username:"rcst",
      userpic: "../../assets/images/userimage"
    }
  },

  methods:{
    loginOrder() {
      
    },


      login(){
          if(!this.username||this.username==""){
         return    alert("用户名不能为空");
          }
         if(!this.password||this.password==""){
           return    alert("密码不能为空");
          }
          

          let url=BASEURL+"/sysLogin.action?appLogin=&userLogin="+this.username+"&userLoginPwd="+this.password;
            this.$http.get(url)
            .then((data)=>{
                if(data.data.id){
                   console.log(JSON.stringify(data.data)); 
                  localStorage.setItem('user',JSON.stringify(data.data));
                  alert("登录成功");
                this.$router.push({path:'/'});
                   }else{
                     alert(data.data.msg);
                }
            })
      },
       back(){

      this.$router.go(-1);
     
   }
  },
  components:{
      NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.login{
  height:100%;
  background:#fff;
 
}
.main{
  position:fixed;
  top:$navHeight;
   width:100%;
}
// .login .main {
//   padding-top: $navHeight;
// }
.login-form{


  width:90%;
  margin:0 auto;
  input{
    margin: rem(50px) 0;
    display: block;
    height: rem(120px);
    width:100%;

    border:none;
    &.input-text{
      padding-left: 15px;
      box-sizing: border-box;
      background: #eceaea;
    }
    &.input-button{
      margin-top: rem(80px);
        height: rem(110px);
      background:#378fe8;
      color: #fff;
      font-size: 16px;
    }
  }

}
</style>
