<template>
  <div class="Zlist">
    <div class="list-l">
        <div class="inf-t">
            <span></span>
            <span></span>
        </div>
        <div class="inf-b"></div>
    </div>
    <div class="list-r"></div>
 </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../assets/style/base.scss";
    .Zlist {
        width: 100%;
        padding: 10px 5px;
        border-bottom: 1px solid gray;
    }
</style>