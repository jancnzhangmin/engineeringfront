<template>
  <div>
    <div v-for="value in 5" :key="value" class="vux-form-preview weui-form-preview">
      <div class="weui-form-preview__hd" style="padding: 0px 15px;">
        <div class="weui-form-preview__label" style="color:#555555;">新建项目</div>
        <div class="weui-form-preview__value">
          <van-tag color="#4679cc">二小区项目</van-tag>
          <van-tag plain color="#4679cc">新建</van-tag>
        </div>
      </div>

      <div class="weui-form-preview__bd" style="padding: 0px 15px;">
        <div class="weui-form-preview__item" style="line-height: normal;">
          <div
            class="van-multi-ellipsis--l2"
            style="font-size:12px;text-align: left;"
          >你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</div>
        </div>
        <div class="weui-form-preview__item">
          <label class="weui-form-preview__label">进度</label>
          <span class="weui-form-preview__value">80%</span>
        </div>
        <div class="weui-form-preview__item">
          <label class="weui-form-preview__label">时间</label>
          <span class="weui-form-preview__value">张敏创建于3天前</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Badge } from 'vux'
import { Tag } from 'vant'
Vue.use(Tag)
export default {
  components: {
    Badge
  }
}
</script>

<style scoped lang='less'>
@import "../../../assets/style/weui-form-preview.less";
.weui-form-preview__hd:after {
  border-bottom: 0px solid #d9d9d9;
}
</style>