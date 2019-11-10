<template>
  <div>
    <van-nav-bar title="当前项目" left-arrow @click-left="onClickLeft" right-text="编辑" />

    <van-radio-group v-model="radio" style="margin-top:10px;">
  <van-cell-group>
    <van-cell title="项目1" clickable @click="radio = '1'">
      <van-radio slot="icon" name="1" style="margin-right:10px;"/>
      <span slot="label" class="van-multi-ellipsis--l2">这是新项目的描述信息，这是新项目的描述信息，这是新项目的描述信息，这是新项目的描述信息，这是新项目的描述信息,这是新项目的描述信息,这是新项目的描述信息</span>
    </van-cell>
    <van-cell title="项目2" is-link clickable @click="radio = '2'">
      <van-radio slot="icon" name="2" style="margin-right:10px;"/>
    </van-cell>
  </van-cell-group>
</van-radio-group>

<van-button block to="/ower/currentproject/new" color="#4679cc" style="margin-top:20px;">新项目</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Button, RadioGroup, Radio,Cell, CellGroup } from 'vant'
Vue.use(NavBar)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Cell).use(CellGroup)
Vue.use(Button)
export default {
    data (){
        return {
radio:1
        }
    },
  methods: {
    onClickLeft() {
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