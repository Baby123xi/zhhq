<template>
  <div class="HotsNews">
       <div class="hot-top">
           <h2>待办事件</h2>
           <router-link :to="{path: 'ZgridTask'}" class="more">更多</router-link>
       </div>
       <ul class="iMagement-list">
            <ImItem :taskManaList="sliceList"/>
       </ul>

  </div>
</template>

<script>
import ImItem  from '../../components/ImItem'
import { options } from '../../api/common'
import { add0, getDate } from '../../api/timeFormat'
export default {
  name: 'HotsNews',
  created() {
    const ser = options.searchManageAll
    this.getManageList(ser)
  },
  computed: {
    sliceList() {
      return this.manageList.slice(0, 3)
    }
  },
  data () {
    return {
      manageList: []
    }
  },
  methods: {
    getManageList(ser) {
      this.$http.get(ser)
      .then((res) => {
        if (res.data.result === '') {
          this.manageList = res.data.sjList
          for (var i = 0; i < this.manageList.length; i++) {
            this.manageList[i].manageTime = getDate(this.manageList[i].manageTime, "-")
          }
        }
      })
    }
  },
  components:{
      ImItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
.HotsNews{
   padding-bottom:60px;
  .hot-top{
     margin:rem(15px) 0;
     padding:rem(30px) rem(30px);
     background:#fff;
     display:flex;
     justify-content:space-between;
     align-items:center;
    .more{
        font-size:16px;
        color:#666;
    }
    h2{
        font-size:18px;
        font-weight:bold;
       margin:0;
       padding-left:5px;
       border-left:3px solid #dd524d;
    }
}
    .iMagement-list{
    background:#fff;
    padding:0 rem(30px);

  }  
}


 

</style>