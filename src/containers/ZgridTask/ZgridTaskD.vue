<template>
  <div class="iMagementPush" style="height:100%">
       <NavBar    leftIcon="icon-fanhui"   fixed="true" title="事件详情" @leftActive="back()"  />
       <main class="main" style="background:#f0eff4;height:100%;">
           <div class="push-form">
               <p>事件类型： </p>
               <p>紧急程度：特急 
               </p>
               <p>
               处理方式：自己处理 
            
               </p>
               <p>
               上报地点：杭州电子科技大学
                <p>
               反映人&nbsp;&nbsp;：张鹏
               </p>
                <p>
               反映人电话:18758716921
                   
               </p>
                <p>
               处理前图片：
                   <span style="color:#288bf0">添加</span>
               </p>
                <p>
                处理后图片：
                   <span style="color:#288bf0">添加</span>
               </p>
              <p>  <textarea   style="resize:none;width:100%;height:80px" placeholder="请输入处理前描述" rows="3" cols="50" value=""></textarea></p>
             <p>  <textarea  style="resize:none;width:100%;height:80px" placeholder="请输入处理后描述" rows="3" cols="50" value=""></textarea></p>
            <!-- <div class="sj-btns">
                 <a href="javascript:;" class="sj-btn">提交</a>
                 <a href="javascript:;" class="sj-btn">取消</a>
             </div>-->
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
    content:{}
    }
  },
   methods:{
       getData(){
       this.$http.get(options.searchManagePie+this.$route.query.ids)
       .then(res=>{
           let content=res.data.sjList[0];
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
     padding-top:$navHeight;
 
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
