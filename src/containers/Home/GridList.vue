<template>
  <ul class="grid-list">
      <li class="item" v-for="(v,index) in  list">
         <img :src="v.icon"/>
         <span>{{v.name}}</span>
      </li>     
     
  </ul>
</template>

<script>
export default {
  name: 'GridList',
  data () {
    return {
       list:[
           {name:"公告通知",icon:require('../../assets/images/icon_1.png')},
            {name:"待办事项",icon:require('../../assets/images/icon_2.png')},
            {name:"网格事件上报",icon:require('../../assets/images/icon_3.png')},
            {name:"网格任务管理",icon:require('../../assets/images/icon_4.png')},
            {name:"日程安排",icon:require('../../assets/images/icon_5.png')},
            {name:"工作日志",icon:require('../../assets/images/icon_6.png')}
       ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.grid-list{
    padding:0  rem(55px);
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    text-align:center;
    border-radius:50%;
    .item{
      margin:rem(10px) 0;
      flex-basis:33.333%;
      display:flex;
      flex-wrap:wrap;
      flex-direction:column;
     justify-content: center;
     align-items:center;
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