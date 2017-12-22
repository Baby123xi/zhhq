<template>
  <div class="iMagementPush" style="height:100%">
       <NavBar    leftIcon="icon-fanhui"   fixed="true" title="事件上报" @leftActive="back()"  />
       <main class="main" style="background:#f0eff4;height:100%;">
           <div class="push-form">
               <!--<p>事件类型：
                    <select v-model="eventType">
                        <option value="0">类型1</option>
                     
                    </select>
               </p>-->
               <p>紧急程度：
                 <label><input  v-model="eventDegree" type="radio" value="YB" />一般 </label> 
                 <label><input  v-model="eventDegree" type="radio" value="GG" />紧急 </label> 
              </p>
             
               <p>
               上报地点：<input type="text" value="" />
               </p>
                <p>
               反映人&nbsp;&nbsp;：<input type="text"  v-model="eventpPeople" value="" />
               </p>
               
                <p>
               处理前图片：
                   <span style="color:#288bf0">添加</span>
               </p>
                <p>
                处理后图片：
                   <span style="color:#288bf0">添加</span>
               </p>
              <p>  <textarea   style="resize:none;width:100%;height:80px" placeholder="请输入处理前描述" v-model="eventContent" rows="3" cols="50" value=""></textarea></p>
             <p>  <textarea  style="resize:none;width:100%;height:80px" placeholder="请输入处理后描述" rows="3" cols="50" value=""></textarea></p>
             <div class="sj-btns">
                 <a href="javascript:;" class="sj-btn"  @click="postContent">提交</a>
                 <a href="javascript:;" class="sj-btn">取消</a>
             </div>
           </div>
       </main>
  </div>
</template>

<script>
import { options } from '../../api/common'
import NavBar  from '../../components/NavBar/NavBar'
export default {
  name: '',
  data () {
    return {
       postStr:'0',
       eventType:'0',
       eventDegree:'YB',
       eventpPeople:'二月',
       eventContent:'一切安好'
    }
  },
   methods:{
     postContent(){
       this.postStr="&receiveMan="+this.eventpPeople+"&emergencyDegree="+this.eventDegree;
       this.$http.get(options.ManagePush+this.postStr)
       .then(res=>{
         console.log(res.data);
       })
      
     },
       back(){

       this.$router.go(-1);
     
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
.main{
   position:fixed;
    top:$navHeight;
 
}
.push-form{
    margin:10px;
    padding:25px 10px;
    background:#fff;
    border-radius:15px;
  p{
    padding:rem(15px) 0;
    font-size:14px;
  border-bottom:1px solid  #f1f1f1;
   input[type="text"]{
       border:none;
   }
  }
}
.sj-btns{
    display:flex;
    justify-content:center;
    .sj-btn{
        height:30px;
        width:60px;
        background:#288bf0;
        color:#fff;
        display: inline-block;
        font-size:14px;
        line-height:30px;
        text-align:center;
        border-radius:5px;
        margin:20px 10px;
        &:nth-of-type(2){
          background:#dd524d;

        }
    }
}

</style>
