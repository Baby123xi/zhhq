<template>
  <div class="iMagementPush" style="height:100%">
       <main class="main" style="background:#f0eff4;height:100%;">
           <div class="push-form">
               <p>
               标题：
                <input type="text" value="" />
               </p>
               <p>工作类型：
                    <select>
                       <option value="0">类型1</option>
                        <option value="0">类型2</option>
                         <option value="0">类型3</option>
                          <option value="0">类型5</option>
                           <option value="0">类型6</option>
                    </select>
               </p>
               
               <p>
               开始时间：<input type="date" value="" />
               </p>
                <p>
               结束时间：<input type="date" value="" />
               </p>
               <p>
               安排内容:
               </p>
              <p>  <textarea   style="resize:none;width:100%;height:80px" placeholder="请输日程描述" rows="3" cols="50" value=""></textarea></p>
             <!-- <div class="sj-btns">
                 <a href="javascript:;" class="sj-btn">提交</a>
                 <a href="javascript:;" class="sj-btn">取消</a>
             </div> -->
           </div>
       </main>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
   
    }
  },
   methods:{
       back(){

       this.$router.go(-1);
     
   }
  },
    components:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.push-form{
    margin:10px;
    padding:25px 10px;
    background:#fff;
    border-radius:15px;
  p{
    text-align: left;
    padding:rem(15px) 10px;
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
