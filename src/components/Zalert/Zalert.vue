<template>
<div class="modal-mask">
    <div class="modal-confirm">
        <h2 class="confirm-header">
            <i class="iconfont icon-questioncircle"></i> {{ title }}
        </h2>
        <div class="confirm-content">
            {{ content }}
        </div>
        <div class="confirm-btns">
            <!-- <button class="btn" @click="op(1)">取 消</button> -->
            <button class="btn btn-primary" @click="op">确 定</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'AlertConfirm',
  props: {
    content: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      title: '温馨提示'
    }
  },
  methods:{
    op(){
      this.$emit("alert")
    },
    alert(setting){
      this.title = setting.title ||  '标题'
      this.content = setting.content || '内容'
      this.onOk = setting.onOk || false
      this.onCancel = setting.onCancel || false
      this.show = true
      document.body.style.overflow = 'hidden'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/style/web-style.css";
h2 {
  margin-bottom: 0;
}
.modal-mask{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(55,55,55,.6);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-confirm{
  width: 400px;
  box-sizing: border-box;
  padding: 30px 40px;
  background-color: #fff;
  border-radius: 6px;
}
@media only screen and (max-width: 640px) {
 .modal-confirm{
    width: 100%;
    margin: 0 20px;
    padding: 10px 20px; 
  }
}
</style>