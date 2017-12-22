<template>
<div>
  <router-link :to="{path: 'ZgridTaskD', query: {ids:v.ids}}"   class="ImItem" v-for="(v, index) in taskManaList" :key=" v.id " tag="li">
    <div class="im-list-c">
      <h3>{{ v.title }}</h3>
      <div class="img-list-bottom">
          <p><span>反映人：{{ v.manageMan }}</span><span>地点：{{ v.managePlace }}</span></p>
          <p>
            <span>反映时间：{{ v.manageTime }}</span>
            <span  :style="{color:setStatusColor(v.manageType)}">{{setStatus(v.manageType)}}</span>
          </p>
      </div>
    </div>
    <img class="im-list-img"  :src="v.imgSrc" />
  </router-link>
</div>
</template>

<script>
export default {
  name: 'ImItem',
  props: ["taskManaList"],
  data () {
    return {
      
    }
  },
  methods:{
    setStatusColor(type){
      switch(type){
        case 'y':
        return '#dd524d';
        case 'w':
        return '#eab04c';
        case 'c':
        return '#77be84'; 
      }
    },
    setStatus(type){
       switch(type){
        case 'y':
        return '已处理';
        case 'w':
        return '未处理';
        case 'c':
        return '处理中'; 
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
 .ImItem{
      padding:8px 0;
      border-bottom:1px solid  #f1f1f1;
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
      >.im-list-c{
         flex:1;
         >h3{
          line-height:23px;     
          font-size:16px;

      }
      >.img-list-bottom{
         margin-top:5px;
         flex-direction:row;
         >p{
            margin-top:5px;
            >span{
                font-size:14px;
                &:nth-of-type(2){
                  margin-left:10px;
                }
                color:#929294;
            }  
          }
       }
       
      }
      >.im-list-img{
          margin-left:rem(10px);
          height:rem(130px);
          width:rem(130px);
      }
     
    }

</style>
