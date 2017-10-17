<template>
<div class="webView bgWhite">
  <div class="inforDetail ">
    <div class="dTitle">item.title</div>
    <div class="dTime">
      <div class="time">2017-10-22</div>
      <div class="name">
        <span class="">发布人：</span>
        <span class="author">李明</span>
      </div>
    </div>
    <div class="dImg">
      <img src="../../assets/logo.png" />
    </div>
    <div class="dContent">大家都知道出生在文莱的吴尊家世代均为富豪，从小生活环境就是优渥的。在《爸爸去哪儿5》里面，环境就算是对于普通城市家庭的孩子来说也算不上舒适了，但是从来没见过neinei和max对环境的抱怨和不满。
反而他们出来的镜头都是斯文有礼的。
节目一开播，max就因为太热了，而经常头发总是湿漉漉的。
吃饭时候，还是要拿小风扇给爸爸、姐姐吹凉。</div>
  </div>
</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/style/base.scss";
  .inforDetail {
    padding: 0 10px;
    .dTitle {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      line-height: 2;
    }
    .dTime {
      width: 100%;
      font-size: 12px;
      color: gray;
      overflow: hidden;
      >div {
        width: 48%;
      }
      .time {
        float: left;
        text-align: right;
      }
      .name {
        float: right;
        text-align: left;
      }
    }
    .dImg {
      height: rem(300px);
      text-align: center;
      margin: rem(50px) 0;
      img {
        height: 100%; 
      }
    }
    .dContent {
      font-size: 14px;
      color: gray;
      line-height: 1.5;
      text-indent: 2em;
    }
  }
</style>
