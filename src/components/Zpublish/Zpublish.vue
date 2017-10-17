<template>
<div class="webView bgWhite">
  <div class="publishAd">
    <div class="pubTitle item">
      <label for="">发布标题</label>
      <input type="text" @focus="isFocus=true" @blur="blurInput()"/>
    </div>
    <div class="pubMan item">
      <label for="">发 布 人</label>
      <input type="text" @focus="isFocus=true" @blur="blurInput()"/>
    </div>
    <div class="pubTime item">
      <label for="">发布时间</label>
      <input type="date" />
    </div>
    <div class="pubContent ">
      <div class="contentTit">发布内容</div>
      <textarea @focus="isFocus=true" @blur="blurInput()"></textarea>
    </div>
    <div class="report" v-show="!isFocus">发&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;布</div>
  </div>
</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      isFocus: false
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
    }
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
