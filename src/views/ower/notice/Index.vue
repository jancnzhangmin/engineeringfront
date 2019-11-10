<template>
  <div>
    <van-nav-bar
      title="公告"
      right-text="新建公告"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-list finished-text="没有更多了" style="margin-top:10px;">
      <van-cell v-for="value in 20" :key="value" title="二小区的项目得要抓紧时间了" label="描述信息">
        <div slot="default">
          <badge></badge>
        </div>
        <div
          slot="label"
          class="van-multi-ellipsis--l2"
        >二小区的项目得要抓紧时间了,二小区的项目得要抓紧时间了,二小区的项目得要抓紧时间了,二小区的项目得要抓紧时间了,二小区的项目得要抓紧时间了</div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, NavBar, List } from 'vant'
import { Badge } from 'vux'

Vue.use(Cell).use(CellGroup)
Vue.use(NavBar)
Vue.use(List)
export default {
  components: {
    Badge
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      this.$router.push('/ower/notice/new')
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
.van-cell__title {
  -webkit-box-flex: unset;
  -webkit-flex: auto;
  flex: auto;
  width: 90%;
}
</style>