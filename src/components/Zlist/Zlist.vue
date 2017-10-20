<template>
  <div class="zlist webView">
    <div class="list" v-for="item in items">
        
        <router-link to="/ZnoticeDetail?id=1">
          <div class="inf-t">{{ item.title }}</div>
          <div class="inf-b">
            <div class="strus-l">
                <span class="">{{ item.name }}</span>
                <span class="name">{{ item.time }}</span>
            </div>
            <div class="strus-r" :class="{'read':item.state==='Y'}">{{ item.state==='N'?'未读':'已读' }}</div>
        </div>
        </router-link>
    </div>
 </div>
</template>

<script>
export default {
  name: 'Zlist',
  props: ['items'],
  data () {
    return {
      
    }
  },
  computed: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../assets/style/base.scss";
    .zlist {
      background: white;
    }
    .list {
      height:rem(100px);
      margin:15px rem(25px);
      // margin-bottom: 6px;
      border-bottom: 1px dashed lightgray;
      // &:last-child {
      //   border-bottom: none;
      // }
      .inf-t {
        width: 100%;
        font-Size: 14px;
        font-weight: 400;
        padding-bottom: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
      }
      .inf-b {
        font-size: 12px;
        color: gray;
        line-height: 1;
        // font-weight: 200;
        display: flex;
        justify-content:row;
        .strus-l {
          width: 80%;
          .name {
            padding-left: 10px;
          }
        }
        .strus-r {
          width: 20%;
          text-align: center;
          color: red;
          &.read{
            color: blue;
          }
        }
      }
    }
</style>