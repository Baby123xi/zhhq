<template>
  <div class="HotsNews">
       <div class="hot-top">
           <h2>待办事件</h2>
       </div>
       <ul class="iMagement-list">
          
                <li>
                    <div class="im-list-c">
                          <h3>罗坊镇2017年第二批村庄规划编制项目（一标段）</h3>
                          <div class="img-list-bottom">
                             <p><span>反映人：周子</span><span>地点：江西-新余市</span></p>
                             <p><span>反映时间：2017-7-11</span></p>
                          </div>
                    </div>
                    <img class="im-list-img"  src="http://jx.people.com.cn/NMediaFile/2013/0130/LOCAL201301300926000216693760662.JPG"/>
                </li>
         
        </ul>

  </div>
</template>

<script>
export default {
  name: 'HotsNews',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.HotsNews{
   
}
.hot-top{
     margin:rem(15px) 0;
     padding:rem(30px) rem(20px);
     background:#fff;
     display:flex;
     align-items:center;

    h2{
       margin:0;
       padding-left:5px;
       border-left:3px solid #dd524d;
    }
}
.iMagement-list{
    background:#fff;
    padding:0 10px;
    >li{
      padding:8px 0;
      border-bottom:1px solid  #f1f1f1;
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
      >.im-list-c{
         
             >h3{
          font-size:18px;

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
          height:rem(100px);
          width:rem(100px);
      }
     
    }
}
</style>