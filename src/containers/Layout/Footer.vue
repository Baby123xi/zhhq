<template>

      <div class="footer">
           <ul>
             <li v-for="(v,i) in  items"><router-link :to="v.url"><p :class="['iconfont',v.icon]"></p><span>{{v.name}}</span></router-link></li>
           </ul>
      </div>


</template>

<script>
export default {
  name: 'vfooter',
  data(){
    return{
      items:[
        {"name":"主页","url":'/home',"icon":'icon-zhuye'},
        {"name":"事件分布","url":'/find',"icon":'icon-faxian'},
    
       
        {"name":"我的","url":'/my',"icon":'icon-wode'}
      ]
    }
  },
  methods:{
    setIcon(i){
     return "url("+items[i]['icon']+") no-repeat  center/contain";
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/style/base.scss";
.footer{
    position: fixed;
    bottom:0;
    width: 100%;
    height:rem(110px);
    background: #fff;
    z-index: 999;
    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
     &:before{
       position: absolute;
        content: "";
        top: 0;
        left: 0;
        height:1px;
        width: 100%; 
        background: #eee;
        transform: scaleY(.5);
        z-index: 99;
    }
    >ul{
      display: flex;
      align-items:center;
       height:100%;
      >li{
        text-align: center;

        flex: 1;
      a{
       color: #444;
      &.router-link-active{
        color: #378fe8;
      }
       p{
         margin: rem(8px) 0;
         font-size: rem(50px);

         width: 100%;
       }
       span{

         font-size: 14px;
       }
      }

      }
    }
}

</style>