<template>
<div class="">
  <NavBar title="发布公告"/>
  <Zpublish/>
</div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
import Zpublish  from '../../components/Zpublish/Zpublish'
export default {
  name: '',
  data () {
    return {
      
    }
  },
  components: {
      NavBar,
      Zpublish
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
</style>
