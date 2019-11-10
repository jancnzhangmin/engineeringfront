<template>
  <div>
    <div>
      <transition :name="transitionName">
        <router-view style="margin-bottom: 50px;width:100%;"></router-view>
      </transition>
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
      <van-tabbar-item replace to="/ower">
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
      active: 0,
      transitionName: ''
    }
  },
  created () {
    this.active = this.$route.meta.index > 0 ? this.$route.meta.index - 1 : 0
  },
  watch: {
    $route (to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
      this.active = to.meta.index ? to.meta.index - 1 : 0
    }
  }
}
</script>
<style scoped>
/*路由切换动画*/
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>