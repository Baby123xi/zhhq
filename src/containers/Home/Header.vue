<template>
  <header class="header">
        <div class="header-box">
              <input type="text" v-model="selectKey" />
              <span class="header-text">社区网格化管理</span>
        </div>
 
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      selectKey:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.header{
    position:relative;
    margin:rem(15px) 0;
    height:rem(80px);
    display:flex;
    .header-box{
    height:rem(60px);
    position:absolute;
    left:50%;
    top:50%;
    font-size:12px;
    background:rgba(0,0,0,.6);
    border-radius:rem(60px/2) ;
    transform: translate(-50%,-50%);
    z-index:999;
     input{
        background:none;
        border:none;
     }
     .header-text{
        position:absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
         border-radius:5px;
         color:#e2e2e2;
        }
    }
}
</style>