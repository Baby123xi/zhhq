<template>

<router-link :to="{path: 'ZnoticeDetail', query: {ids: itemData.ids}}"   class="notice-item">
 
      <div class="item-fl">
           <div class="item-top">
                <h2>{{ itemData.fabuman }}</h2>
                <span>{{itemData.datetime }}</span>
           </div>
           <p class="title">{{ itemData.title }}</p>
      </div>

         
          
          <span :class="{'blue':itemData.shifou === '已读'}">{{ itemData.shifou }}</span>
 

</router-link>

</template>

<script>
import { add0,getDate } from '../../api/timeFormat'
export default {
  name: 'NoticeItem',
  props:{
      itemData:{
          type:Object,
          require:true
      }
  }

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.notice-item{
  
    padding: 10px 10px;
    border-bottom:1px solid #e6e5e5;
   
    display:flex;
    flex-direction:row;
    align-items:center;
  
    .item-fl{
        flex:1;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
         font-size: 14px;
         display: flex;
         color: #000;
        .item-top{
            display:flex;
            flex-direction:row;   
             justify-content:space-between;
        } 
        h2{
            font-size: 16px;
        }
        .title{
            margin-top:8px;
           color:#666;
        }
    }
    .blue {
        margin-left:10px;
       color: blue;
        }
         
          
   
}
</style>