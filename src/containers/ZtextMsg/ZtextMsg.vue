<template>
  <div class="" style="height:100%">
    <NavBar    leftIcon="icon-fanhui"   fixed="true" title="工作日志" @leftActive="back()"  />
  
    <div class="logList" style="width: 100%">
      <CheckBox @taskSearch="taskSearchs"/>
      <router-link :to="{path: 'ZtextMsgD', query: {taskIds: v.taskIds}}"  class="" v-for="(v,index) in logList" :key="index" :logList="logList">
        <div class="listItem">
            <div class="listItemTop">
              <div class="logProject">{{ v.title }}</div>
              <div class="logTime">{{ v.date }}</div>
            </div>
            <p class="listItemBot">{{ v.descs }}</p>
        </div>
      </router-link>
    </div>
    
  </div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
import CheckBox from '../../components/CheckBox/CheckBox'
import { options } from '../../api/common'
import { add0, getDate } from '../../api/timeFormat'
export default {
  name: 'ztextMsg',
  data () {
    return {
      logList: []
    }
  },
  created() {
    let searchDate = options.searchDate
    this.getLogList(searchDate)
  },
  methods: {
    taskSearchs(selMsg, intMsg) {
      let searchDate = options.searchDate + '&' + selMsg + '=' + intMsg
      console.log(searchDate)
      // this.getLogList(searchDate)
    },
    getLogList(searchDate) {
      this.$http.get(searchDate)
     .then((res) => {
        this.logList = res.data.demoList
        for (var i = 0; i < this.logList.length; i++) {
          this.logList[i].date = getDate(this.logList[i].date, "/")
        }
      })
      .catch((res) => {
        console.log(res)
      })
    }
  },
  components: {
      NavBar,
      CheckBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/style/base.scss";
  .logList {
    background: lightgray;
    padding: 10px 0;
    padding-top:$navHeight;
    .listItem {
      width: 90%;
      margin: 0 auto;
      padding: 5px 0;
      background: #fff;
      position: relative;
      margin-bottom: 10px;
      .listItemTop {
        overflow: hidden;
        width: 90%;
        height: 40px;
        line-height: 40px;
        margin: 1px auto;
        border-bottom: 1px solid lightgray;
        .logProject {
          width: 40%;
          font-size: 16px;
          color: #323232;
          text-align: left;
          float: left;
        }
        .logTime {
          width: 40%;
          font-size: 14px;
          color: #9b9b9b;
          text-align: right;
          float: right;
        }
      }
      .listItemBot {
        width: 90%;
        margin: 0 auto;
        text-align: left;
        font-size: 14px;
        color: #9b9b9b;
        text-indent: 2em;
        line-height: 1.4;
        text-overflow: -webkit-ellipsis-lastline;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
      }
    }
  }
</style>
