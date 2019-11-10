<template>
  <div>
    <van-cell-group style="margin-top:10px;">
      <van-field label="项目名称" required />
      <van-field type="textarea" placeholder="描述" />
      <van-cell clickable>
        <van-checkbox slot="icon">任务需要审核</van-checkbox>
      </van-cell>
    </van-cell-group>
    <van-divider :style="{ color: '#4679cc', borderColor: '#4679cc' }">模块</van-divider>

    <div
      style="background-color: white;padding:10px;padding-left: 5px;padding-right: 5px;height:40px;"
    >
      <div class="module-div">
        <div class="module-padding">
          <van-button block round size="small" color="#4679cc">公告</van-button>
        </div>
      </div>
      <div class="module-div">
        <div class="module-padding">
          <van-button block round plain size="small" color="#4679cc">文档</van-button>
        </div>
      </div>
      <div class="module-div">
        <div class="module-padding">
          <van-button block round plain size="small" color="#4679cc">联系人</van-button>
        </div>
      </div>
    </div>
    <div
      style="background-color: white;padding:10px;padding-left: 5px;padding-right: 5px;padding-top:0px;height:40px;"
    >
      <div class="module-div">
        <div class="module-padding">
          <van-button block round plain size="small" color="#4679cc">订单</van-button>
        </div>
      </div>
      <div class="module-div">
        <div class="module-padding">
          <van-button block round plain size="small" color="#4679cc">讨论</van-button>
        </div>
      </div>
    </div>

    <van-cell-group style="margin-top:10px;">
      <van-cell title="成员" is-link @click="showPopup" label="张三 李四 王老五" />
    </van-cell-group>
    <van-popup v-model="show" round position="bottom" :style="{ height: '80%' }">
      <flexbox :gutter="0" style="margin-bottom:10px;">
        <flexbox-item :span="1/2">
          <div style="padding:10px;">关闭</div>
        </flexbox-item>
        <flexbox-item :span="1/2">
          <div style="text-align:right;padding:10px;">确定</div>
        </flexbox-item>
      </flexbox>

      <flexbox :gutter="0" v-for="value in 5" :key="value" class="mylist">
        <flexbox-item :span="1/8">
          <div>
            <van-checkbox v-model="checked"></van-checkbox>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <span>张三</span>
            <span style="margin-left:10px;color:#999999;">13577445521</span>
          </div>
          <flexbox :gutter="0" style="font-size:small;margin-top:5px;">
            <flexbox-item :span="1/2">
              <div>
                <van-checkbox v-model="checked">
                  <span slot="default" style="color:#999999;">管理员</span>
                </van-checkbox>
              </div>
            </flexbox-item>
            <flexbox-item :span="1/2">
              <div>
                <van-checkbox v-model="checked">
                  <span slot="default" style="color:#999999;">项目参与</span>
                </van-checkbox>
              </div>
            </flexbox-item>
          </flexbox>
        </flexbox-item>
      </flexbox>
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, Field, Divider, Grid, GridItem, Button, Popup, Checkbox, CheckboxGroup } from 'vant'
import { Flexbox, FlexboxItem } from 'vux'

Vue.use(Cell).use(CellGroup)
Vue.use(Field)
Vue.use(Divider)
Vue.use(Grid).use(GridItem)
Vue.use(Button)
Vue.use(Popup)
Vue.use(Checkbox).use(CheckboxGroup)
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      show: false,
      checked: true
    }
  },

  methods: {
    showPopup () {
      this.show = true
    }
  }
}
</script>

<style scoped>
.van-grid-item-padding .van-grid-item__content {
  padding: 5px !important;
}
.module-div {
  float: left;
  width: 33.3333%;
}
.module-padding {
  padding: 5px;
}
.mylist {
  border-bottom: solid 1px #f6f6f6;
  padding: 10px;
}
</style>