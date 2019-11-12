<template>
  <div>
    <van-nav-bar title="新订单" left-arrow @click-left="onClickLeft" @click-right="onClickRight" right-text="保存" />
    <myorder-form ref="form"/>
  </div>
</template>

<script>

import Vue from 'vue'
import { NavBar } from 'vant'
import MyorderForm from './components/MyorderForm'

Vue.use(NavBar)
export default {
  components: {
    MyorderForm
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
onClickRight(){
    this.$refs.form.onCommit('new');
}
  }
}
</script>

<style scoped>
.van-nav-bar .van-icon {
  color: #969799;
  font-size: 24px;
  cursor: pointer;
}
.van-nav-bar__title {
  font-size: 17px;
  text-transform: capitalize;
}
</style>