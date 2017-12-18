<template>
  <div class="iMagement">
         <NavBar   rightIcon='icon-shangbao' @rightActionF="toPush()"   title="事件管理"  />
        <main class="main" style="background:#f0eff4">
           <ul class="gruop-button">
                <li>待处理<span>10</span></li>
                <li>处理中<span>20</span></li>
                <li>已处理<span>30</span></li>
            </ul>
            <ul class="iMagement-list">
                <!-- <li v-for="v in 20">
                    <div class="im-list-c">
                          <h3>标题标题标题标题标题</h3>
                          <div class="img-list-bottom">
                             <p><span>反映人：张三</span><span>地点：杭州</span></p>
                             <p><span>反映时间：2017-05-19</span></p>
                          </div>
                    </div>
                    <img class="im-list-img"  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1878159448,3960376758&fm=27&gp=0.jpg"/>
                </li> -->
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
                <li>
                    <div class="im-list-c">
                          <h3>智慧垦区基础通信工程招标公告</h3>
                          <div class="img-list-bottom">
                             <p><span>反映人：吴丑</span><span>地点：江西-新余市</span></p>
                             <p><span>反映时间：2017-8-27</span></p>
                          </div>
                    </div>
                    <img class="im-list-img"  src="http://upload.newsxy.com/2015/0806/1438849725819.jpg"/>
                </li>
                <li>
                    <div class="im-list-c">
                          <h3>LED显示屏及会议音视频系统中标结果</h3>
                          <div class="img-list-bottom">
                             <p><span>反映人：郑寅</span><span>地点：江西-新余市</span></p>
                             <p><span>反映时间：	2017-9-7</span></p>
                          </div>
                    </div>
                    <img class="im-list-img"  src="http://upload.newsxy.com/2015/0717/1437117151395.jpg"/>
                </li>
                <li>
                    <div class="im-list-c">
                          <h3>南英垦区中小企业孵化园基础设施项目全过程咨询及招标代理服务预中标结果</h3>
                          <div class="img-list-bottom">
                             <p><span>反映人：王卯</span><span>地点：江西-新余市</span></p>
                             <p><span>反映时间：2017-10-11</span></p>
                          </div>
                    </div>
                    <img class="im-list-img"  src="http://jx.people.com.cn/NMediaFile/2013/0130/LOCAL201301300926000216693760662.JPG"/>
                </li>
                <li>
                    <div class="im-list-c">
                          <h3>南英垦区罗坊街道招牌拆除及更换招标公告</h3>
                          <div class="img-list-bottom">
                             <p><span>反映人：冯辰</span><span>地点：江西-新余市</span></p>
                             <p><span>反映时间：2017-9-26</span></p>
                          </div>
                    </div>
                    <img class="im-list-img"  src="http://upload.newsxy.com/2015/0806/1438849725819.jpg"/>
                </li>
                <li>
                    <div class="im-list-c">
                          <h3>南英垦区智慧通信基础建设中标结果</h3>
                          <div class="img-list-bottom">
                             <p><span>反映人：陈巳</span><span>地点：江西-新余市</span></p>
                             <p><span>反映时间：2017-10-9</span></p>
                          </div>
                    </div>
                    <img class="im-list-img"  src="http://upload.newsxy.com/2015/0717/1437117151395.jpg"/>
                </li>
            </ul>
        </main>

  </div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
export default {
  name: '',
  data () {
    return {
   
    }
  },
   methods:{
       back(){

       this.$router.go(-1);
     
   } ,toPush(){
     
       this.$router.push({ name:'IncidentManagementPush'});
    }
  
  },
    components:{
    NavBar
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.gruop-button{
    display:flex;
    text-align:center;
    color:#fff;
    line-height:rem(65px);
     font-size:14px;
     justify-content: space-around;
     margin:10px 0;
    >li{
        flex-basis:rem(220px);
        height:rem(65px);
     border-radius:rem(9px);
        &:nth-of-type(1){
          background:#dd524d;
        }
        &:nth-of-type(2){
          background:#eab04c;
        }
           &:nth-of-type(3){
          background:#77be84;
        }
        >span{
            $size:rem(40px);
            display:inline-block;
             padding:0 3px;
             height: $size;
            line-height: $size;
            border-radius: $size;
            background:rgba(0,0,0,.1);
            font-size:12px;
            margin-left:rem(15px);
        }
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
