<template>
<div class="">
  <NavBar title="发布公告"/>
  <Zpublish/>
</div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
import Zpublish  from '../../components/Zpublish/Zpublish'
export default {
  name: '',
  data () {
    return {
      
    }
  },
  components: {
      NavBar,
      Zpublish
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base";
// @import "../../../static/font/iconfont.css";
// .nav-bar{
//     box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
//   background:#288bf0;
// ;
//   color:#fff;
//   height:$navHeight;
//   display:flex;
//   justify-content:space-between;
//   align-items:center;
//   padding:0 rem(15px);
//   position:relative;
//   box-shadow: 0  0  2px #fff;
//   .iconfont{
//     font-size:rem(50px);
//   }
//   .nav-bar-title{
//     position:absolute;
//     left:50%;
//     top:50%;
//     font-size:18px;
//     transform: translate(-50%,-50%);
//   }
// }
</style>
