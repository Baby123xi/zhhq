<template>
<div class="webView bgWhite">
  <div class="inforDetail ">
    <div class="dTitle">{{ dTitle }}</div>
    <div class="dTime">
      <div class="time">{{ time }}</div>
      <div class="name">
        <!-- <span class="">发布人：</span> -->
        <span class="author">{{ author }}</span>
      </div>
    </div>
    <div class="dImg">
      <img src="../../assets/logo.png" />
    </div>
    <div class="dContent">{{ dContent }}</div>
  </div>
</div>
</template>

<script>
import { options } from '../../api/common'
import { add0, getDate } from '../../api/timeFormat'
export default {
  name: '',
  created() {
    var ips = options.searchIdNow + this.$route.query.ids
    this.getMsgDetail(ips)
    // console.log(this.$route.query.ids)
    // console.log(options.searchIdNow + this.$route.query.ids)
  },
  data () {
    return {
      dTitle: '',
      time: '',
      author: '',
      dContent: '',
      fabuman: ''
    }
  },
  methods: {
    getMsgDetail(ips) {
      this.$http.get(ips)
      .then((res) => {
        // console.log(res.data.demoList)
        var data = res.data
        if(data.result === '') {
          var dataList = data.demoList[0]
          this.dTitle = dataList.title
          this.time = getDate(dataList.datetime, '-')
          this.author = dataList.fabuman
          this.fabuman = '发布人：' + this.author
          this.dContent = dataList.tearter
        }
        this.changeReadState()
      })
    },
    changeReadState() {
      var change = options.changeAd + this.$route.query.ids + '&title=' + this.dTitle + '&shifou=Y&fabuman=' + this.author + '&tearter=' + this.dContent + '&datetime=' + this.time
      this.$http.get(change)
      .then((res) => {
        console.log(res.data.msg)
      })
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
