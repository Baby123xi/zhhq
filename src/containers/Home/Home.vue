<template>
  <div class="home">
     <NavBar/>
 
  </div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components:{
      NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/style/base.scss";
</style>
