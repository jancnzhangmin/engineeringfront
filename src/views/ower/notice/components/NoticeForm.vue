<template>
  <div>
    <van-cell-group style="margin-top:10px;">
      <van-field required label="公告名称" placeholder="请输入公告名称" />
      <van-field rows="10" type="textarea" placeholder="正文" />
    </van-cell-group>
    <van-button color="#4679cc" block style="margin-top:20px;">保存</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Cell, CellGroup, Button } from 'vant'

Vue.use(Field)
Vue.use(Cell).use(CellGroup)
Vue.use(Button)
export default {

}
</script>