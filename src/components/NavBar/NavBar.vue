<template>
  <header class="nav-bar">
        <span class="iconfont icon-fanhui2 back" @click="back()"></span>
        <h1 class="nav-bar-title">{{title}}</h1>
       
 </header>
</template>

<script>
export default {
  name: 'NavBar',
  props:{
    title:{
      type:String,
      require:true
    }
  },
  data () {
    return {
      
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.nav-bar{
  background:#378fe8;
  color:#fff;
  height:rem(100px);
  display:flex;
  justify-content:row;
  align-items:center;
  padding:0 rem(15px);
  position:relative;
  box-shadow: 0  0  2px #fff;
  .back{
    font-size:rem(50px);
  }
  .nav-bar-title{
    position:absolute;
    left:50%;
    top:50%;
    font-size:18px;
    transform: translate(-50%,-50%);
  }
}
</style>