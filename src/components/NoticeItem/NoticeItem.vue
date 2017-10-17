<template>
  <div class="notice-item">
      <div class="item-top">
          <h2>和平街道</h2>
          <span>2016-9-5</span>
      </div>
    <div class="item-bottom">
          <p>关于和平街道9月20号会议</p>
          <span>未读</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoticeItem',
  data () {
    return {
      
    }
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
         padding: 10px 0;
         font-size: 14px;
         display: flex;

        h2{
            font-size: 14px;
        }
        span{
            margin-left:5px;
        }
    }
     .item-bottom{
         padding: 10px 0;
           display: flex;
           justify-content: space-between;
           p{
               color:#989898;
           }
           span{
               color:#f00;
           }
           border-bottom:1px solid #e6e5e5;
    }
}
</style>