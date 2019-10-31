<template>
  <div>
    <div style="margin-bottom: 50px;">
        <router-view></router-view>
    </div>
    <van-tabbar v-model="active" active-color="#4679cc">
      <van-tabbar-item info="3" replace to="/await">
        <span slot="icon" class="iconfont icon-daiban" style="font-size:22px;"></span>待办
      </van-tabbar-item>
      <van-tabbar-item replace to="/work">
        <span slot="icon" class="iconfont icon-gongzuo" style="font-size:22px;"></span>任务
      </van-tabbar-item>
      <van-tabbar-item>
        <span slot="icon" class="iconfont icon-icon_jindu" style="font-size:22px;"></span>进度
      </van-tabbar-item>
      <van-tabbar-item>
        <span slot="icon" class="iconfont icon-wode" style="font-size:22px;"></span>我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem, Icon } from 'vant'

Vue.use(Tabbar).use(TabbarItem)
Vue.use(Icon)

export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>