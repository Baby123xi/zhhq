<template>
  <div class="layout">
      <router-view></router-view>
      <vFooter/>
 </div>
</template>

<script>
import  vFooter from './Footer'
export default {
  name: 'Layout',
  data () {
    return {
      
    }
  },
  components:{
    vFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";

</style>