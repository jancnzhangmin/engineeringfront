/* eslint-disable no-undef */
<template>
  <div>
    <van-nav-bar title="新任务" left-arrow @click-left="onClickLeft" />
    <van-cell-group style="margin-top:10px;">
      <van-field required clearable label="任务主题" placeholder="请输入任务名称" />

      <van-field rows="2" autosize type="textarea" placeholder="描述" />

      <van-field
        required
        readonly
        clickable
        label="状态"
        :value="beginTime"
        placeholder
        @click="showTime(true)"
      />

      <van-field
        required
        readonly
        clickable
        label="优先级"
        :value="beginTime"
        placeholder
        @click="showTime(true)"
      />

      <van-field
        readonly
        clickable
        label="开始日期"
        :value="beginTime"
        placeholder
        @click="showTime(true)"
      />

      <van-field
        readonly
        clickable
        label="计划完成日期"
        :value="endTime"
        placeholder
        @click="showTime(false)"
      />

      <van-field
        readonly
        clickable
        label="指派给"
        :value="beginTime"
        placeholder
        @click="showTime(true)"
      />

      <van-field
        readonly
        clickable
        label="完成（%）"
        :value="beginTime"
        placeholder
        @click="showTime(true)"
      />

      <van-cell>
        <van-checkbox slot="title" v-model="checked" checked-color="#4679cc">跟踪</van-checkbox>
      </van-cell>
    </van-cell-group>

    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        @cancel="showbeginTime = false"
        @confirm="onConfirm"
      ></van-datetime-picker>
    </van-popup>

    <van-button color="#4679cc" block style="margin-top:20px;">创建</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  NavBar,
  Field,
  Cell,
  CellGroup,
  DatetimePicker,
  Popup,
  Checkbox,
  CheckboxGroup,
  Button
} from 'vant'
import { dateFormat } from 'vux'

Vue.use(NavBar)
Vue.use(Field)
Vue.use(Cell).use(CellGroup)
Vue.use(DatetimePicker)
Vue.use(Popup)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(Button)

export default {
  data () {
    return {
      currentDate: new Date(),
      beginTime: '',
      beginTimeMask: '',
      endTime: dateFormat(new Date(), 'YYYY-MM-DD'),
      Timebeginorend: true,
      showPicker: false,
      showbeginTime: false,
      checked: false
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onConfirm () {
      if (this.Timebeginorend) {
        this.beginTime = dateFormat(this.currentDate, 'YYYY-MM-DD')
      } else {
        this.endTime = dateFormat(this.currentDate, 'YYYY-MM-DD')
      }
      this.showPicker = false
    },
    showTime (istime) {
      if (istime) {
        this.currentDate = new Date(this.beginTime)
        this.Timebeginorend = true
      } else {
        this.currentDate = new Date(this.endTime)
        this.Timebeginorend = false
      }
      this.showPicker = true
    },
    onbenintime () {
      this.beginTime = this.beginTime.length > 0 ? (dateFormat(new Date(this.beginTime), 'YYYY-MM-DD')) : ''
      this.showbeginTime = false
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
.vux-popup-picker-placeholder {
  font-size: 14px !important;
}
</style>