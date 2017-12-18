<template>
  <div class="" style="height:100%">
    <NavBar    leftIcon="icon-fanhui"   fixed="true" title="新建日程" @leftActive="back()"  />
    <!-- <zpubdat/> -->
    <div class="iMagementPush" style="height:100%">
       <main class="main" style="background:#f0eff4;height:100%;">
           <div class="push-form">
               <p>
               标题：
                <input type="text" value="" v-model="title" />
               </p>
               <p>工作类型：
                    <select v-model="type">
                       <option value="0">类型1</option>
                        <option value="1">类型2</option>
                         <option value="2">类型3</option>
                          <option value="3">类型5</option>
                           <option value="5">类型6</option>
                    </select>
               </p>
               
               <p>
               开始时间：<input type="date" value="" v-model="date" />
               </p>
                <p>
               结束时间：<input type="date" value="" v-model="dateEnd" />
               </p>
               <p>
               安排内容:
               </p>
              <p>  <textarea   style="resize:none;width:100%;height:80px" placeholder="请输日程描述" rows="3" cols="50" value="" v-model="desc"></textarea></p>
             <div class="sj-btns">
                 <a href="javascript:;" class="sj-btn" @click="report">提交</a>
                 <a href="javascript:;" class="sj-btn" @click="back">取消</a>
             </div>
           </div>
       </main>
       <zalert v-show="isShow" :content="alertCon" @alert="alertClick" :isBack="goBack"/>
  </div>
  </div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
import Zalert from '../../components/Zalert/Zalert'
import { options } from '../../api/common'
export default {
  name: '',
  data () {
    return {
      isShow: false,
      goBack: false,
      alertCon: '',
      title: '',
      date: '',
      dateEnd: '',
      desc: '',
      type: ''
    }
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    inforAlert(inf) {
      this.isShow = true
      this.alertCon = inf
    },
    report() {
      if (this.title == '' || !this.title) {
        this.inforAlert('请输入标题')
        return    
      }
      if (this.type == '' || !this.type) {
        this.inforAlert('请输入类型')
        return    
      }
      if (this.date == '' || !this.date) {
        this.inforAlert('请输入开始时间')
        return    
      }
      if (this.dateEnd == '' || !this.dateEnd) {
        this.inforAlert('请输入结束时间')
        return    
      }
      if (this.desc == '' || !this.desc) {
        this.inforAlert('请输入内容')
        return    
      }
      
      var pubDatUrl = "&title="+this.title+"&date="+this.date+"&taskEnd="+this.dateEnd+"&descs="+this.desc+"&taskType="+this.type
      this.pubAd(pubDatUrl)
    },
    pubAd(pubStr){
      this.$http.get(options.pubDate + pubStr)
      .then((res) => {
        if (res.data.result == "success") {
          this.inforAlert('新建成功')
          
          this.goBack = true
        }
      })
    },
    alertClick() {
      this.isShow = !this.isShow
      if (this.goBack) {
        this.back()
      }
    }
  },
  components: {
      NavBar,
      Zalert
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
