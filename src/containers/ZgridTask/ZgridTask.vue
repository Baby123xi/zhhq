<template>
  <div class="iMagement">
         <NavBar   rightIcon='icon-shangbao' @rightActionF="toPush()"   title="网格任务管理"  />
        <main class="main" style="background:#f0eff4;height:auto;">
           <ul class="gruop-button">
                <!-- <li>待处理<span>{{ waitHandle }}</span></li>
                <li>处理中<span>{{ Handling }}</span></li>
                <li>已处理<span>{{ Handled }}</span></li> -->
                <li @click="selctType(v.manageType)" v-for="(v,index) in  typeNumberList">{{setStatus(v.manageType)}}<span>{{v.nums}}</span></li>
               <!-- <li>处理中<span>20</span></li>
                <li>已处理<span>30</span></li>-->
            </ul>
            <ul class="iMagement-list">
                <ImItem :taskManaList="taskList"/>
            </ul>
        </main>

  </div>
</template>

<script>
import ImItem  from '../../components/ImItem'
import NavBar  from '../../components/NavBar/NavBar'
import { options } from '../../api/common'
import { add0, getDate } from '../../api/timeFormat'
export default {
  name: '',

  data () {
    return {
      taskList: [],
      waitHandle: '',
      Handling: '',
      Handled: '',
      typeNumberList:[]
    }
  },
  created() {
    const ser = options.searchManageAll
    this.getManageList(ser)
    
  },
   methods:{
    selctType(type){
         const ser = options.searchManageAll
        this.getManageList(ser+'&manageType='+type)
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
    },
       back(){

       this.$router.go(-1);
     
   } ,toPush(){
     
       this.$router.push({ name:'IncidentManagementPush'});
    },
    getManageList(ser) {
        this.$http.get(ser)
        .then((res) => {
          if (res.data.result === '') {
            this.taskList = res.data.sjList;
            this.typeNumberList=res.data.ZTList
            // var wHandleNum, 
            for (var i = 0; i < this.taskList.length; i++) {
              this.taskList[i].manageTime = getDate(this.taskList[i].manageTime, "-")

            }
          }
        })
    }
  
  },
    components:{
    NavBar,
    ImItem
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.main{
   padding-top:$navHeight;
}
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
          height:rem(130px);
          width:rem(130px);
      }
     
    }
}
</style>
