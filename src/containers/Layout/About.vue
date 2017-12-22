<template>
  <div class="about">
    <NavBar fixed="true" title="关于我们" />
    <div class="aboutMsg">
      <p class="indentText">
        江西省深入贯彻党的十八大和十八届三中、四中、五中、六中全会精神，全面贯彻习近平总书记系列重要讲话特别是视察江西重要讲话精神，牢固树立和贯彻落实创新、协调、绿色、开放、共享的发展理念，尊重城镇化发展规律、自然规律和市场经济规律，因地制宜、突出特色，发挥市场主体作用，创新建设理念，转变发展方式，大力培育特色鲜明、产业发展、绿色生态、美丽宜居的特色小镇，促进经济转型升级和新型城镇化发展，为决胜全面建成小康社会、建设富裕美丽幸福江西作出新贡献。
        2017年，新余市以市委一号文件形式印发《关于切实做好当前乡村两级重点工作的实施意见》(余发[2017]1号)，全面部署当前农村工作，对全市农村进行改造升级，统筹推进“整洁美丽、和谐宜居”新农村建设。乡村两级重点工作突出村庄整治、环境美化、乡风文明、和谐平安四大重点，包括农村党的建设、农村颐养之家建设、农村经济发展、农村健康卫生服务、农村建房规划整治、农村环境综合整治、农村集镇服务管理等七方面的内容。
        此次项目是从全局出发，面向乡镇级的综合信息化建设项目，是推进简政放权、提升社会治理能力、优化服务管理、推动乡村重点工作落地见效的重要内容。此次项目的建设将进一步创新基层社会管理服务方式，推动基层组织和干部为群众提供优质、高效、人性化的公共管理服务，从而有力的促进社会和谐稳定，群众安居乐业。
      </p>
      <p>联系我： <a href="tel: 187 5871 6921">187 5871 6921</a></p>
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
    background:#fff;
     min-height:100%;
    .aboutMsg {
      position:fixed;
      top: $navHeight;
      padding:10px;
      line-height: 1.4;
      >p {
        color: #288bf0;
        font-size: 16px;
        padding-bottom: 15px;
        &.indentText {
          color: #000;
          text-indent: 2em;
        }
        
      }
    }
  }
</style>