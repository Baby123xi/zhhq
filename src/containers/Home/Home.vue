<template>
  <div class="home">
       <NavBar title="智慧社区" :isBack="false"/>
       <main class="main">
       <div class="banner">
         <Carousel  paginationActiveColor="#fff"  :paginationPadding=3  :paginationSize=6  paginationColor="#dbdbdb" :perPage=1>
        
            <slide>
              <img src="../../assets/images/1.jpg"/>
            </slide>
        
          
         </Carousel>
        </div>
        <GridList/>
        <HotsNews/> 
       </main>
     
  </div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
import GridList  from './GridList'
import HotsNews  from './HotsNews'
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components:{
      
      NavBar,
      GridList,
      Carousel,
      Slide,
      HotsNews
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/base.scss";
.home{
.main{
   padding-top:$navHeight;
   height:100%;
}
   min-height:100%;
  overflow:auto;
  .VueCarousel{
$h: rem(430px);
 height:$h;

  width: 100%;


  .VueCarousel-slide{
    position: relative;
      width: 100%;
      height:$h;

    img{
         width: 100%;
         height:100%;
         vertical-align: middle;

   }


  }
 
}

  
 
}



</style>
