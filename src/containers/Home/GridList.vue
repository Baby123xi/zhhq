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
           {name:"公告通知",icon:require('../../assets/images/icon_1.png'),routeName:'Notice'},
            {name:"待办事项",icon:require('../../assets/images/icon_2.png'),routeName:'WaitEvent'},
            {name:"网格事件上报",icon:require('../../assets/images/icon_3.png'),routeName:'IncidentManagement'},
            {name:"网格任务管理",icon:require('../../assets/images/icon_4.png'),routeName:'Notice'},
            {name:"日程安排",icon:require('../../assets/images/icon_5.png'),routeName:'Notice'},
            {name:"工作日志",icon:require('../../assets/images/icon_6.png'),routeName:'Notice'}
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
   
    height: 100%;
    background: #fff;
    .item{
      position:relative;
      padding:rem(25px) rem(10px);
     
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