<template>
  <div>
    <van-cell-group style="margin-top:10px;">
      <van-field label="订单主题" required />
      <van-field rows="2" autosize type="textarea" placeholder="描述" />
      <van-field
        readonly
        required
        clickable
        label="指派给"
        :value="assignuser"
        @click="showAssignPicker = true"
      />
    </van-cell-group>

    <van-cell-group style="margin-top:10px;">
      <van-field disabled>
        <van-row slot="input" style="margin-left:22px;margin-right:22px;">
          <van-col span="8">项目</van-col>
          <van-col span="8" style="text-align:right">数量</van-col>
          <van-col span="8" style="text-align:right">单价</van-col>
        </van-row>
      </van-field>
      <van-field disabled v-for="item in detailList" :key="item.id">
        <span
          slot="left-icon"
          @click="onEditDetail('edit',item.id)"
          class="iconfont icon-bianji"
          style="color:#969799;"
        ></span>
        <span slot="right-icon" @click="onDedeteDetail(item.id)" class="iconfont icon-delete2"></span>
        <van-row slot="input">
          <van-col span="8">{{item.name}}</van-col>
          <van-col span="8" style="text-align:right">{{item.number}}</van-col>
          <van-col span="8" style="text-align:right">￥{{formatData(item.amount)}}</van-col>
        </van-row>
      </van-field>
      <van-row style="margin-left:22px;margin-right:22px;">
        <van-col span="24">
          <van-cell title="费用合计" :value="total_cost" />
        </van-col>
      </van-row>
    </van-cell-group>
    <van-button
      @click="onShowDetailPicker('new')"
      color="#4679cc"
      block
      style="position: absolute;bottom:0px;"
    >增加明细</van-button>

    <van-popup v-model="showAssignPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="assignUserList"
        value-key="name"
        @cancel="showAssignPicker = false"
        @confirm="onAssignConfirm"
      />
    </van-popup>
    <van-popup v-model="showDetailPicker" show-toolbar position="bottom" :style="{ height: '40%' }">
      <div>
        <van-row style="padding:15px;">
          <van-col span="12" style="color:#4679cc;">
            <span @click="showDetailPicker = false">取消</span>
          </van-col>
          <van-col span="12" style="text-align:right;color:#4679cc;">
            <span @click="confirmDetail">确定</span>
          </van-col>
        </van-row>
        <van-field v-model="currentDetail.name" label="项目" required style="margin-top:10px;" />
        <van-field v-model="currentDetail.number" label="数量" required />
        <van-field v-model="currentDetail.amount" label="单价" required />
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, Field, Row, Col, Button, Picker, Popup } from 'vant'
import { numberComma, numberPad, numberRandom } from 'vux'
import { before_create_order } from '@/api/ower/myorder/myorder'
import{ create_order} from '@/api/ower/myorder/myorder'
import { stringify } from 'querystring'
Vue.use(Cell).use(CellGroup)
Vue.use(Field)
Vue.use(Row).use(Col)
Vue.use(Button)
Vue.use(Picker)
Vue.use(Popup)

export default {
  data() {
    return {
      detailList: [],
      assignuser: '',
      assignuserid:0,
      showAssignPicker: false,
      assignUserList: [],
      showDetailPicker: false,
      currentDetail: {
        id: 0,//当前行id
        name: '',//当前项目名称
        number: '',//当前数量
        amount: ''//当前金额
      },
      step: 0,
      operation_mode: 'new'//操作模式 new新增 edit编辑

    }
  },
  methods: {
    onAssignConfirm(value) {
      this.assignuser = value.name;
      this.assignuserid = value.id;
      this.showAssignPicker = false;
    },
    onShowDetailPicker(op) {
      this.showDetailPicker = true;
      this.operation_mode = op;
      this.currentDetail.name = '';
      this.currentDetail.number = '';
      this.currentDetail.amount = '';
    },
    confirmDetail() {
      this.showDetailPicker = false;
      if (this.operation_mode == 'new') {
        this.currentDetail.id = ++this.step;
        this.detailList.push(Object.assign({}, this.currentDetail));
      } else {
        this.detailList.forEach(item => {
          if (item.id == this.currentDetail.id) {
            item.name = this.currentDetail.name;
            item.number = this.currentDetail.number;
            item.amount = this.currentDetail.amount;
            return true;
          }
        })
      }
    },
    onEditDetail(op, id) {
      this.showDetailPicker = true;
      this.operation_mode = op;
      this.currentDetail.id = id;
      this.detailList.forEach(item => {
        if (item.id == id) {
          this.currentDetail.name = item.name;
          this.currentDetail.number = item.number;
          this.currentDetail.amount = item.amount;
        }
      })
    },
    onDedeteDetail(id) {
      this.detailList.some((item, i) => {
        if (item.id == id) {
          this.detailList.splice(i, 1)
          //在数组的some方法中，如果return true，就会立即终止这个数组的后续循环
          return true
        }
      })

    },
    formatData(data) {
      return numberComma(parseFloat(data).toFixed(2))
    },
    onCommit(way) {
        let param = {
            
        }
        if(way == 'new'){
create_order().then(data =>{

})
        }
    },
  },
  computed: {
    total_cost: function () {
      let totalcost = 0
      this.detailList.forEach(item => {
        totalcost += parseFloat(item.number) * parseFloat(item.amount)
      })
      return '￥' + this.formatData(totalcost)
    }
  },
  created() {
    before_create_order().then(data => {
      //debugger
      data.result.forEach(item => {
          let param = {
              id:item.id,
              name:item.name
          }
        this.assignUserList.push(param)
      })
    })
  }
}
</script>

<style scoped>
.van-cell__value {
  color: #323233;
}
</style>