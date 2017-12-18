<template>
  <li class="ImItem">
     
         <div class="im-list-c">
                          <h3>罗坊镇2017年第二批村庄规划编制项目（一标段）</h3>
                          <div class="img-list-bottom">
                             <p><span>反映人：周子</span><span>地点：江西-新余市</span></p>
                             <p><span>反映时间：2017-7-11</span></p>
                          </div>
           </div>
           <img class="im-list-img"  src="http://jx.people.com.cn/NMediaFile/2013/0130/LOCAL201301300926000216693760662.JPG"/>
        
 
  </li>
</template>

<script>
export default {
  name: 'ImItem',
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
