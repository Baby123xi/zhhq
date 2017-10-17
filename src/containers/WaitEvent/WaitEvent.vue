<template>
  <div class="wait-event">
          <NavBar title="待办事件" />
           <div  class="list">
              <NoticeItem v-for="(v,index) in 10" :key="index"/>
           </div>
  </div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
import NoticeItem  from '../../components/NoticeItem/NoticeItem'
export default {
  name: 'WaitEvent',
  data () {
    return {
      
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
