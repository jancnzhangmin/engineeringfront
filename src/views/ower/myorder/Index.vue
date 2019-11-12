<template>
  <div>
    <van-nav-bar title="订单" left-arrow @click-left="onClickLeft" right-text="新订单" @click-right="onClickRight" />
    <van-list finished-text="没有更多了" style="margin-top:10px;">
      <van-cell v-for="item in 10" :key="item" title="二小区成本" value="￥150.00">
        <div
          slot="label"
          class="van-multi-ellipsis--l2"
        >这是一段最多显示两行的文字，多余的内容会被省略。这是一段最多显示两行的文字，多余的内容会被省略。</div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, List, Cell, CellGroup } from 'vant'
Vue.use(NavBar)
Vue.use(List)
Vue.use(Cell).use(CellGroup)

export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
        onClickRight() {
      this.$router.push('/ower/myorder/new')
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