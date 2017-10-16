<template>
<div class="">
  <NavBar title="公告详情"/>
  <zdetail/>
</div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
import Zdetail  from '../../components/Zdetail/Zdetail'
export default {
  name: '',
  data () {
    return {
      
    }
  },
  components: {
      NavBar,
      Zdetail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
</style>
