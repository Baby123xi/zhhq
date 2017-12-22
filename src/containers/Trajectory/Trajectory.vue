<template>
  <div class="Trajectory">
  <NavBar     title="走访轨迹"  />
       <main class="main">
       
             <div id="container"></div>
             <div id="panel"></div>
       </main>
  </div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
export default {
  name: '',
  data () {
    return {
      
    }
  },
  mounted(){
    this.getMapT();
  },
  methods:{

      getMapT(){
           var map = new AMap.Map("container", {
                resizeEnable: true,
                center: [116.397428, 39.90923],//地图中心点
                zoom: 13 //地图显示的缩放级别
            });
            //步行导航
            var walking = new AMap.Walking({
                map: map
              
            }); 
            //根据起终点坐标规划步行路线
            walking.search([116.399028, 39.845042], [116.436281, 39.880719]);
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
.Trajectory{
    height:100%;
    width:100%;
}
.main{
    position:fixed;
    top:$navHeight;
    height:100%;
    width:100%;
    #container{
         height:100%;
    width:100%;
    }
}
</style>
