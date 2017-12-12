<template>
<div class="webView bgWhite">
  <div class="publishAd">
    <div class="pubTitle item">
      <label for="">发布标题</label>
      <input type="text" v-model="pubTil" @focus="isFocus=true" @blur="blurInput()"/>
    </div>
    <div class="pubMan item">
      <label for="">发 布 人</label>
      <input type="text" v-model="pubMan" @focus="isFocus=true" @blur="blurInput()"/>
    </div>
    <div class="pubTime item">
      <label for="">发布时间</label>
      <input type="date" v-model="pubTim" />
    </div>
    <div class="pubContent ">
      <div class="contentTit">发布内容</div>
      <textarea v-model="pubCon" @focus="isFocus=true" @blur="blurInput()"></textarea>
    </div>
    <div class="report" v-show="!isFocus" @click="inforCheck">发&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;布</div>
  </div>
  <zalert v-show="isShow" :content="alertCon" @alert="alertClick"/>
</div>
</template>

<script>
import Zalert from '../Zalert/Zalert'
import { options } from '../../api/common'
export default {
  name: 'zpublish',
  data () {
    return {
      isFocus: false,
      isShow: false,
      alertCon: '',
      pubTil: '',
      pubMan: '',
      pubTim: '',
      pubCon: ''
    }
  },
  mounted() {

  },
  methods: {
    blurInput(){
      var _vue = this;
      setTimeout(function() {
        _vue.isFocus = false;
      }, 100);
    },
    inforAlert(inf) {
      this.isShow = true
      this.alertCon = inf
    },
    inforCheck() {
      var len = this.pubTil.length
      console.log(len)
      if (this.pubTil == '' || !this.pubTil) {
        this.inforAlert('请输入标题')
        return    
      }
      if (this.pubTil.length > 25) {
        this.inforAlert('您输入的长度超过25字体长度，请重新输入')
        return    
      }
      if (this.pubMan == '' || !this.pubTil) {
        this.inforAlert('请输入发布人')
        return    
      }
      if (this.pubTim == '' || !this.pubTil) {
        this.inforAlert('请输入时间')
        return    
      }
      if (this.pubCon == '' || !this.pubTil) {
        this.inforAlert('请输入内容')
        return    
      }
      var pubAdUrl = "&title="+this.pubTil+"&datetime="+this.pubTim+"&shifou=N&fabuman="+this.pubMan+"&tearter="+this.pubCon
      this.pubAd(pubAdUrl)
    },
    pubAd(pubStr){
      this.$http.get(options.pubAd + pubStr)
      .then((res) => {
        if (res.data.result == "success") {
          this.inforAlert('发布成功')
          this.pubTil = ''
          this.pubMan = ''
          this.pubTim = ''
          this.pubCon = ''
          // this.$router.go(-1)
        }
      })
      .catch((res) => {
        this.inforAlert('发布失败，请稍后重试！')
      })
    },
    alertClick() {
      this.isShow = !this.isShow
      // this.$router.go(-1);
    }
  },
  components: {
    Zalert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/style/base.scss";
  .publishAd {

    padding: 0 $contentPadding;
    .item {
      display: flex;
      align-items: center;
      margin-top: 10px;
      >label {
        font-size: 13px;
        font-weight: 500;
        width: 65px;
        text-align: left;
        margin-right: 5px;
        &:before {
          content: "* ";
          color: red;
          vertical-align: middle;
        }
      }
      >input {
        border: none;
        display: block;
        flex: 1;
        height: 25px;
        line-height: 27px;
        background: rgb(242,242,242);
        border-radius: 2px;
        border: 1px solid rgb(230,230,230);
        text-indent: .5em;
      }
    }
    .pubContent {
      margin-top: 20px;
      width: 100%;
      .contentTit {
        font-size: 13px;
        font-weight: 500;
        width: 65px;
        text-align: left;
        margin-bottom: 10px;
      }
      textarea {
        resize: none;
        display: block;
        height: 55px;
        width: 100%;
        box-sizing: border-box;
        background: rgb(242,242,242);
        border-radius: 2px;
        border: 1px solid rgb(230,230,230);
        text-indent: .5em;
        &:focus {
          border: 1px solid rgb(230,230,230);
          outline: none;
        }
      }
    }
    .report {
      width: 80%;
      font-size: 16px;
      font-weight: bold;
      height: rem(100px);
      color: white;
      line-height: rem(100px);
      position: fixed;
      top: 80%;
      border: 1px solid rgb(55,143,232);
      // margin: 0 10%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      background: rgb(55,143,232);
      border-radius: rem(50px);
    }
  }

</style>
