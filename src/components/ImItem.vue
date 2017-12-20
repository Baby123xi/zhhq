<template>
<div>
  <li class="ImItem" v-for="(v, index) in taskManaList" :key=" v.id ">
     
         <div class="im-list-c">
                          <h3>{{ v.title }}</h3>
                          <div class="img-list-bottom">
                             <p><span>反映人：{{ v.manageMan }}</span><span>地点：{{ v.managePlace }}</span></p>
                             <p><span>反映时间：{{ v.manageTime }}</span></p>
                          </div>
           </div>
           <img class="im-list-img"  :src="v.imgSrc" />
        
 
  </li>
</div>
</template>

<script>
export default {
  name: 'ImItem',
  props: ["taskManaList"],
  data () {
    return {
      
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
         
             >h3{
          line-height:23px;     
          font-size:16px;

      }
      >.img-list-bottom{
         margin-top:5px;
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
