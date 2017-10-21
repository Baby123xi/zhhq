<template>
<div>
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
let today = new Date()
export default {
  data () {
    return {
      demoEvents: [{
        date: `${today.getFullYear()}/9/18`,
        title: '南京大屠杀',
        desc: '南京大屠杀（Nanjing Massacre）指1931至1945年中国抗日战争期间[1]  ，中华民国在南京保卫战中失利、首都南京于1937年12月13日沦陷后，侵华日军于南京及附近地区进行长达6周的有组织、有计划、有预谋的大屠杀和奸淫、放火、抢劫等血腥暴行，在南京大屠杀中，大量平民及战俘被日军杀害，无数家庭支离破碎，南京大屠杀的遇难人数超过30万。'
      },{
        date: `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`,
        title: '十九大今日要闻：十九大主席团举行第二次会议 发改委主任今日下午答问',
        desc: '中国共产党第十九次全国代表大会主席团20日下午在人民大会堂举行第二次会议。习近平同志主持会议。大会秘书长刘云山就十九届中央委员会委员、候补委员和中央纪律检查委员会委员候选人预备人选建议名单作了说明。'
      },{
        date: `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`,
        title: '浙江慈溪秦女士取钱时银行多给一千六，拒退称离柜概不负责，你怎么看？',
        desc: '浙江慈溪秦女士在某银行取22400元,银行却给了24000元。事后,银行想向秦小姐要回多给的1600元被拒。银行以“不当得利”为由将秦女士告上法庭。秦女士认为,银行规定储户钱“离柜概不负责”,她也“离柜概不负责”。你怎么看？'
      },{
        date: `${today.getFullYear()}/${today.getMonth() + 1}/15`,
        title: '17-10-15',
        desc: ' this is the longlonglong description'
      },{
        date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
        title: 'num  is very import'
      },{
        date: `${today.getFullYear()}/${today.getMonth() === 11 ? 1 : today.getMonth() + 2}/06`,
        title: 'together',
        desc: 'catch one`s heart, never be apart'
      }]
    }
  },
  methods: {
      handleDayChanged() {
        // document.getElementsByClassName('events-wrapper')[0].style.display = 'block'
          alert('day-changed')
      },
      handleMonthChanged(){
        // document.getElementsByClassName('events-wrapper')[0].style.display = 'none'
          alert('month-changed')
      }
  }
}
</script>

<style>
  .__vev_calendar-wrapper .events-wrapper .event-item .title {
    text-align: left;
    padding-right: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .__vev_calendar-wrapper .events-wrapper .event-item .desc {
    text-align: left;
    text-indent: 2em;

  }
  .__vev_calendar-wrapper .events-wrapper {
    /* display: none; */
  }
</style>