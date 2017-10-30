<template>
  <div class="home">
       <NavBar title="智慧社区" :isBack="false"/>
       <div class="banner">
         <Carousel  paginationActiveColor="#fff"  :paginationPadding=3  :paginationSize=6  paginationColor="#dbdbdb" :perPage=1>
        
            <slide>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496648326676&di=eb823b3bf317b9300368e52313448779&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F29381f30e924b899549c524b6f061d950a7bf625.jpg"/>
            </slide>
        
            <slide>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496648326676&di=eb823b3bf317b9300368e52313448779&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F29381f30e924b899549c524b6f061d950a7bf625.jpg"/>
            </slide>
         </Carousel>
        </div>
       <GridList/>
          
       
     
  </div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
import GridList  from './GridList'
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
      Slide
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/base.scss";
.home{
  background:#fff;


  .VueCarousel{
$h: rem(450px);
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
