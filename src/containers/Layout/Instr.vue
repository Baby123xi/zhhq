<template>
  <div class="about">
    <NavBar fixed="true" title="应用介绍" />
    <div class="instrMsg">
      <p>
        根据招标文件要求，本次软件平台建设内容主要包括包括5个主要既定功能，包括网格化管理、综合执法、综合服务平台、智慧南英手机版、智能分析辅助系统、智慧环保等功能模块，还附有业务支撑系统。软件部分支持扩充对接政府其他业务系统功能.
      </p>
    </div>

 </div>
</template>

<script>
import NavBar from '../../components/NavBar/NavBar'
export default {
  name: 'Layout',
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
  .about {
    .instrMsg {
      padding:$navHeight 5px;
      line-height: 1.4;
      font-size: 16px;
      >p {
        text-indent: 2em;
      }
    }
  }
</style>