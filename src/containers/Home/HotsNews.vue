<template>
  <div class="HotsNews">
       <div class="hot-top">
           <h2>待办事件</h2>
           <router-link :to="{path: 'ZgridTask'}" class="more">更多</router-link>
       </div>
       <ul class="iMagement-list">
            <ImItem/>
       </ul>

  </div>
</template>

<script>
import ImItem  from '../../components/ImItem'
export default {
  name: 'HotsNews',
  data () {
    return {
      
    }
  },
  components:{
      ImItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.HotsNews{
   padding-bottom:60px;
  .hot-top{
     margin:rem(15px) 0;
     padding:rem(30px) rem(30px);
     background:#fff;
     display:flex;
     justify-content:space-between;
     align-items:center;
    .more{
        font-size:16px;
        color:#666;
    }
    h2{
        font-size:18px;
        font-weight:bold;
       margin:0;
       padding-left:5px;
       border-left:3px solid #dd524d;
    }
}
    .iMagement-list{
    background:#fff;
    padding:0 rem(30px);

  }  
}


 

</style>