<template>
<div>
<router-link :to="{path: 'ZnoticeDetail', query: {ids: v.ids}}"  class="" v-for="(v,index) in noticeList" :key="index">
  <div class="notice-item">
      <div class="item-top">
          <h2>{{ v.fabuman }}</h2>
          <span>{{ v.datetime }}</span>
      </div>
    <div class="item-bottom">
          <p>{{ v.title }}</p>
          
          <span :class="{'blue': v.shifou === '已读'}">{{ v.shifou }}</span>
    </div>
  </div>
</router-link>
</div>
</template>

<script>
import { add0,getDate } from '../../api/timeFormat'
export default {
  name: 'NoticeItem',
  props: ['noticeList'],
  created() {
    // this.getNoticeList()
    
  },
  data () {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.notice-item{
    background: #fff;
    padding: 5px 10px;
    
    .item-top{
       
         font-size: 14px;
         display: flex;
         color: #000;

        h2{
            font-size: 14px;
        }
        span{
            margin-left:5px;
        }
    }
     .item-bottom{
      
           display: flex;
           justify-content: space-between;
           p{
               color:#989898;
           }
           span{
               color:#f00;
               &.blue {
                   color: blue;
               }
           }
           border-bottom:1px solid #e6e5e5;
    }
}
</style>