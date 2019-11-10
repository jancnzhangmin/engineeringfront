<template>
  <div>
    <div class="headback" @click="onSetting">
      <span style="color:#ffffff;">个人中心</span>
      <div class="headfront">
        <div style="width:110px;float:left;">
          <div class="myhead" style="text-align: center;">
            <span
              class="iconfont icon-wodeA"
              style="font-size:40px;line-height:65px;color:rgba(70, 121, 204, 0.2);"
            ></span>
          </div>
        </div>
        <div style="width:60%;float:left;">
          <div style="padding-top:30px;">
            <span>微信昵称</span>
          </div>
          <div>
            <span style="color:#7d7e80;">15908775553</span>
          </div>
        </div>
      </div>
    </div>

    <van-grid :border="false" :column-num="3">
      <van-grid-item text="项目">
        <span slot="icon" style="font-size:30px;">0</span>
      </van-grid-item>
      <van-grid-item text="任务">
        <span slot="icon" style="font-size:30px;">0</span>
      </van-grid-item>
      <van-grid-item text="未完成">
        <span slot="icon" style="font-size:30px;">0</span>
      </van-grid-item>
    </van-grid>

    <van-cell-group style="margin-top:10px;">
      <van-cell size="large" title="当前项目" to="/ower/currentproject" is-link value>
        <span slot="icon" class="iconfont icon-xiangmu1" style="margin-right:5px;color:#4679cc;"></span>
      </van-cell>
      <van-cell size="large" title="公告" to="/ower/notice" is-link value>
        <span slot="icon" class="iconfont icon-gonggao222" style="margin-right:5px;color:#4679cc;"></span>
      </van-cell>
      <van-cell size="large" title="订单" is-link value>
        <span slot="icon" class="iconfont icon-dingdan" style="margin-right:5px;color:#4679cc;"></span>
      </van-cell>
      <van-cell size="large" title="讨论" is-link value>
        <span slot="icon" class="iconfont icon-iconfontb" style="margin-right:5px;color:#4679cc;"></span>
      </van-cell>
      <van-cell size="large" title="联系人" is-link value>
        <span slot="icon" class="iconfont icon-lianxiren1" style="margin-right:5px;color:#4679cc;"></span>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem, Cell, CellGroup } from 'vant'

Vue.use(Grid).use(GridItem)
Vue.use(Cell).use(CellGroup)
export default {
  methods: {
    onSetting () {
      this.$router.push('/ower/setting')
    }
  }
}
</script>

<style scoped>
.headback {
  height: 130px;
  background-image: linear-gradient(#4679cc, #a6bee7, #ffffff);
  text-align: center;
  padding-top: 15px;
}
.headfront {
  background-color: #ffffff;
  border-radius: 10px;
  height: 100px;
  width: 90%;
  margin-top: 10px;
  margin-left: 5%;
  text-align: justify;
}
.myhead {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0px 0px 1px 1px rgba(70, 121, 204, 0.2);
  margin-left: 20px;
  margin-top: 20px;
}
</style>