<template>
  <div class="iMagementPush" style="height:100%">
       <NavBar    leftIcon="icon-fanhui"   fixed="true" title="事件详情" @leftActive="back()"  />
       <main class="main" style="background:#f0eff4;height:100%;">
           <div class="push-form">
              <!-- <p>事件类型： </p>-->
               <p>紧急程度：{{content.emergencyDegree=='YB'?'一般':'紧急'}}
               </p>
               <!--<p>
               处理方式：自己处理 
            
               </p>-->
               <p>
               上报地点：{{content.adreeNamr}}
                <p>
               反&nbsp;映&nbsp;人&nbsp;：{{content.receiveMan}}
               </p>
               
                <p>
               处理前图片：
                   <img :src="content.photos" style="width:60%"/>
               </p>
               
              <p>备注：
                  <span   style="margin-top:10px;resize:none;width:100%;height:80px"  >{{content.problem}}</span>
              </p>
             
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
  mounted(){
     this.getData();
  },
   methods:{
       getData(){
       this.$http.get(options.searchManagePie+this.$route.query.ids)
       .then(res=>{
           this.content=res.data.sjList[0];
          // console.log(content);
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
     width:100%;
 
}
.push-form{
    margin:10px;
    padding:25px 10px;
    background:#fff;
    border-radius:15px;
  p{
    padding:rem(25px) 0;
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
