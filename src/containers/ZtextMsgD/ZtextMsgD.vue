<template>
  <div class="notice">
          <NavBar title="日志详情" />
           <div  class="list">
              <ZtextDetail />
           </div>
  </div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
import ZtextDetail  from '../../containers/ZtextMsg/ZtextMsgDetail'
import { add0,getDate } from '../../api/timeFormat'
import { options } from '../../api/common'
export default {
  name: 'Notice',
  data () {
    return {
      noticeList1: []
    }
  },
  created(){
    this.getNoticeDetail()
    // '/app/demoAction.action?xType=selectx'
  },
  methods: {
    getNoticeDetail() {
      this.$http.get(options.searchAd)
     .then((res) => {
        this.noticeList1 = res.data.demoList
        // console.log(this.noticeList1)
        for (var i = 0; i < this.noticeList1.length; i++) {
            this.noticeList1[i].datetime = getDate(this.noticeList1[i].datetime, "-")
            if (this.noticeList1[i].shifou === "N") {
              this.noticeList1[i].shifou = '未读'
            } else {
              this.noticeList1[i].shifou = '已读'
            }
        }
        // console.log(this.noticeList1)
      })
      .catch((res) => {
        console.log(res)
      })
    },
    transNew() {
      console.log("123")
      this.$router.push({ path:'zpubAd'});
    }
  },
  components:{
      NavBar,
      ZtextDetail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
</style>
