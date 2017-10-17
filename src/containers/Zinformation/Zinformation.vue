<template>
   <div class="zinformation">
       <NavBar title="通知公告"/>
       <list-show :items="items"></list-show>
   </div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
import ListShow  from '../../components/Zlist/Zlist'
export default {
  data () {
    return {
      items: [
        {title: "新余渝水罗坊镇开展“药具宣传日”活动", name: "mr.Smith", time: "2017-08-25", tempt: "未读",state: "N"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动2", name: "mr.Smith", time: "2017-08-25", tempt: "已读",state: "N"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动3", name: "mr.Smith", time: "2017-08-25", tempt: "未读",state: "N"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动5", name: "mr.Smith", time: "2017-08-25", tempt: "已读",state: "Y"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动6", name: "mr.Smith", time: "2017-08-25", tempt: "未读",state: "N"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动", name: "mr.Smith", time: "2017-08-25", tempt: "未读",state: "N"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动2", name: "mr.Smith", time: "2017-08-25", tempt: "已读",state: "N"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动3", name: "mr.Smith", time: "2017-08-25", tempt: "未读",state: "N"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动5", name: "mr.Smith", time: "2017-08-25", tempt: "已读",state: "Y"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动6", name: "mr.Smith", time: "2017-08-25", tempt: "未读",state: "N"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动", name: "mr.Smith", time: "2017-08-25", tempt: "未读",state: "N"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动2", name: "mr.Smith", time: "2017-08-25", tempt: "已读",state: "N"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动3", name: "mr.Smith", time: "2017-08-25", tempt: "未读",state: "N"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动5", name: "mr.Smith", time: "2017-08-25", tempt: "已读",state: "Y"},
        {title: "新余渝水罗坊镇开展“药具宣传日”活动6", name: "mr.Smith", time: "2017-08-25", tempt: "未读",state: "N"},
        ],
    }
  },
  components: {
    NavBar,
    ListShow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";

</style>