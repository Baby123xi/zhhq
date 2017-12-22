<template>
  <div class="grid-list">
      <router-link  :to="{name:v.routeName}"  class="item" v-for="(v,index) in  list" :key="index">
       
         <img :src="v.icon"/>
         <span>{{v.name}}</span>
      </router-link >     
     
  </div>
</template>

<script>
export default {
  name: 'GridList',
  data () {
    return {
       list:[
           {name:"通知公告",icon:require('../../assets/images/icon_home1_03.png'),routeName:'Notice'},
           
            {name:"网格事件上报",icon:require('../../assets/images/icon_home5_03.png'),routeName:'IncidentManagementPush'},
            {name:"网格任务管理",icon:require('../../assets/images/icon_home3_03.png'),routeName:'ZgridTask'},
             {name:"走访轨迹",icon:require('../../assets/images/icon_home2_03.png'),routeName:'Trajectory'},
            {name:"日程安排",icon:require('../../assets/images/icon_home5_03.png'),routeName:'Zdate'},
            {name:"工作日志",icon:require('../../assets/images/icon_home9_02.png'),routeName:'ZtextMsg'},
        
       ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.grid-list{
       width: 100%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    text-align:center;
   
   
    background: #fff;
    overflow:hidden;
    .item{
      position:relative;
      padding:rem(15px) rem(10px);
     
      flex-basis:33.333%;
      display:flex;
      flex-wrap:wrap;
      flex-direction:column;
     justify-content: center;
     align-items:center;
     box-sizing: border-box;
     &:before{
        position: absolute;
    content: "";
    width: 1px;
    height: 100%;
    right: 0;
    top: 0;
    background: #f2f2f2;
    z-index: 99;
     }
     &:after{
         position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    width: 100%;
    height: 1px;
    background: #f2f2f2;
    z-index: 99;
     }
      img{
          width:rem(110px);
          height:rem(110px);
      }
      span{
          margin:6px 0;
          color:#444;
      }
    }
}
</style>