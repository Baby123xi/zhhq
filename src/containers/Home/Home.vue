<template>
  <div class="home">
       <NavBar title="智慧社区" :isBack="false"/>
      <!-- <div class="home-top"> -->
           
           <div class="banner">
              <img  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508484409&di=b51e151d44eb0e77a77497c0cb1346ae&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.educity.cn%2Fimg_11%2F267%2F2014011011%2F101309110354.jpg"/>
           </div>
         <!-- <div class="hd"></div> -->
      <!-- </div> -->
      <GridList/>
  </div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
import GridList  from './GridList'
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components:{
      
      NavBar,
      GridList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.home{
  background:#fff;
  // .home-top{
  // position:relative;
  // height:rem(400px);
  // overflow:hidden;
  .banner{
    
    height: rem(200px*2);
    width:100%;
    img{
      height: 100%;
        width:100%;
    }
  //  } 
   .hd{
     position:absolute;
     z-index:999;
     bottom:rem(-90px/1.8);
     height:rem(90px);
     width:100%;
     border-radius:100%;
     background:#fff;
   }
}
}


</style>
