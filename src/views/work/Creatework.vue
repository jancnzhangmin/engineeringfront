<template>
  <div>
    <van-nav-bar title="新任务" left-arrow @click-left="onClickLeft" />
    <group label-width="4.5em" label-margin-right="2em" label-align="right"></group>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Field } from 'vant'
import { Group } from 'vux'

Vue.use(NavBar)
Vue.use(Field)
export default {
  components: {
    Group
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
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