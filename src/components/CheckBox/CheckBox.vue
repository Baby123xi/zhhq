<template>
  <div class="checkBox">
    <div class="boxItem">
      <select v-model="selected">
        <!-- <option disabled value="">请选择</option> -->
        <option v-for="option in options" :value="option.value">{{ option.text }}</option>
      </select>
      <input type="text" v-model="selMsg" :placeholder="warning">
      <!-- <span>Selected: {{ selected }}</span> -->
    </div>
    <div class="searchBtn">
      <button @click="searchClick">查询</button>
    </div>
    <zalert v-show="isShow" :content="alertCon" @alert="alertClick"/>
  </div>
  
</template>

<script>
import Zalert from '../../components/Zalert/Zalert'
export default {
  name: 'checkBox',
  // created() {
  //   console.log(this.selected)
  // },
  data () {
    return {
      isShow: false,
      alertCon: '',
      selected: 'title',
      selMsg: '',
      warning: '',
      options: [
        {text: '标题', value: 'title'},
        {text: '开始时间', value: 'date'},
        {text: '结束时间', value: 'timeEnd'}
      ]
    }
  },
  watch: {
    selected() {
      this.selMsg = ''
      if (this.selected !== 'title') {
        this.warning = '请输入YYYY-MM-DD'
      } else {
        this.warning = ''
      }
    }
  },
  methods: {
    inforAlert(inf) {
      this.isShow = true
      this.alertCon = inf
    },
    alertClick() {
      this.isShow = !this.isShow
      // this.$router.go(-1);
    },
    searchClick() {
      if (this.selected !== 'title') {
        var reg = /(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/
        if (!this.selMsg.match(reg)) {
          this.inforAlert('请您输入合法时间')
        } else {
          this.$emit('taskSearch', this.selected, this.selMsg)
        }
      } else {
        this.$emit('taskSearch', this.selected, this.selMsg)
      }
      
    }
  },
  components: {
    Zalert
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .checkBox {
    background: lightgray;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    .boxItem {
      select {
        height: 25px;
        border-radius: 5px;
      }
      input {
        height: 19px;
        border-radius: 5px;
      }
    }
    .searchBtn {
      button {
        height: 25px;
        color: #288bf0;
      }
      
    }
  }

</style>