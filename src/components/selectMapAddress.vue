<template>
  <div class="selectMapAddress">
      <iframe  id="map" style="width:100%;height:100%"  :src='selectMapAddress'></iframe>
 
  </div>
</template>

<script>
import { options } from '../api/common'
export default {
  name: 'selectMapAddress',
  
  data () {
    return {
     selectMapAddress:options.selectMapAddress
    }
  },
  mounted(){
   
   var iframe = document.getElementById('map').contentWindow;
    document.getElementById('map').onload = function(){
        iframe.postMessage('hello','https://m.amap.com/picker/');
    };
     window.addEventListener("message", (e)=>{
             console.log('您选择了:' + e.data.name + ',' + e.data.location);
             this.$emit('closeMap',e.data);

     }, false);
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.selectMapAddress{
position:fixed;
width:100%;
height:100%;
z-index:99999;
background:#fff;
top:0;
}

</style>
