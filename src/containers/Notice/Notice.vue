<template>
  <div class="notice">
          <NavBar title="公告通知" />
           <div  class="list">
              <NoticeItem :noticeList="noticeList1"/>
           </div>
  </div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
import NoticeItem  from '../../components/NoticeItem/NoticeItem'
export default {
  name: 'Notice',
  data () {
    return {
      noticeList1: []
    }
  },
  created(){
    this.getNoticeDetail()
  },
  methods: {
    getNoticeDetail() {
      this.$http.get('/app/demoAction.action?xType=selectx')
      .then((res) => {
        this.noticeList = res.data.demoList
      })
      .catch((res) => {
        console.log(res)
      })
    }
  },
  components:{
      NavBar,
      NoticeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
</style>
