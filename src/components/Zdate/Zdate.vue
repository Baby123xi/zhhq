<template>
<div class="zdate">
  <NavBar title="日程安排" :isBack="true"  rightIcon='icon-shangbao' @rightActionF="transNew"/>
  <vue-event-calendar
      :events="demoEvents"
      @day-changed="handleDayChanged"
      @month-changed="handleMonthChanged"
    ></vue-event-calendar>
  <!-- <h2 class="t-center">Custom template</h2> -->
  <!-- <vue-event-calendar :events="demoEvents">
    <template scope="props">
        <div v-for="(event, index) in props.showEvents" class="event-item">
         （ In here do whatever you want, make you owner event template）
          {{event}}
        </div>
      </template>
  </vue-event-calendar> -->
</div>
</template>

<script>
import NavBar  from '../NavBar/NavBar'
import { options } from '../../api/common'
import { add0, getDate } from '../../api/timeFormat'
let today = new Date()
export default {
  created() {
    this.getDate()
  },
  data () {
    return {
      demoEvents: []
    }
  },
  methods: {
    getDate() {
      this.$http.get(options.searchDate)
      .then((res) => {
        this.demoEvents = res.data.demoList
        for (var i = 0; i < this.demoEvents.length; i++) {
          this.demoEvents[i].date = getDate(this.demoEvents[i].date, "/")
          this.demoEvents[i].desc = this.demoEvents[i].descs
        }
      })
      .catch((res) => {
        console.log(res)
      })
    },
    handleDayChanged(day) {
      // console.log(day)
      console.log(day.date)
    },
    handleMonthChanged(month){
        console.log(month)
    },
    transNew() {
      this.$router.push({ name:'ZpubDate'});
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped lang="scss">

.zdate{
  background:#fff;
}
</style>