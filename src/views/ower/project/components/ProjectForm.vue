<template>
    <div>
        <van-cell-group style="margin-top:10px;">
            <van-field label="项目名称" required v-model="data.name" />
            <van-field
                type="textarea"
                placeholder="描述"
                v-model="data.summary"
            />
            <van-cell clickable>
                <van-checkbox slot="icon" v-model="data.examine"
                    >任务需要审核</van-checkbox
                >
            </van-cell>
        </van-cell-group>
        <van-divider :style="{ color: '#4679cc', borderColor: '#4679cc' }"
            >模块</van-divider
        >

        <div
            style="background-color: white;padding:10px;padding-left: 5px;padding-right: 5px;height:40px;"
        >
            <div class="module-div">
                <div class="module-padding">
                    <van-button
                        block
                        round
                        :plain="!data.module.notice"
                        size="small"
                        color="#4679cc"
                        style="touch-action: none;"
                        @click="data.module.notice = !data.module.notice"
                        >公告</van-button
                    >
                </div>
            </div>
            <div class="module-div">
                <div class="module-padding">
                    <van-button
                        block
                        round
                        :plain="!data.module.document"
                        size="small"
                        color="#4679cc"
                        style="touch-action: none;"
                        @click="data.module.document = !data.module.document"
                        >文档</van-button
                    >
                </div>
            </div>
            <div class="module-div">
                <div class="module-padding">
                    <van-button
                        block
                        round
                        :plain="!data.module.contact"
                        size="small"
                        color="#4679cc"
                        style="touch-action: none;"
                        @click="data.module.contact = !data.module.contact"
                        >联系人</van-button
                    >
                </div>
            </div>
        </div>
        <div
            style="background-color: white;padding:10px;padding-left: 5px;padding-right: 5px;padding-top:0px;height:40px;"
        >
            <div class="module-div">
                <div class="module-padding">
                    <van-button
                        block
                        round
                        :plain="!data.module.myorder"
                        size="small"
                        color="#4679cc"
                        style="touch-action: none;"
                        @click="data.module.myorder = !data.module.myorder"
                        >订单</van-button
                    >
                </div>
            </div>
            <div class="module-div">
                <div class="module-padding">
                    <van-button
                        block
                        round
                        :plain="!data.module.talkover"
                        size="small"
                        color="#4679cc"
                        style="touch-action: none;"
                        @click="data.module.talkover = !data.module.talkover"
                        >讨论</van-button
                    >
                </div>
            </div>
        </div>

        <van-cell-group>
            <van-cell title="成员" is-link @click="showPopup" :label="lable" />
        </van-cell-group>
        <van-popup
            v-model="show"
            round
            position="bottom"
            :style="{ height: '80%' }"
        >
            <flexbox :gutter="0" style="margin-bottom:10px;">
                <flexbox-item :span="1 / 2">
                    <div>
                        <van-button
                            style="border: 0px;font-size: 17px;"
                            @click="onClickHide"
                        >
                            关闭
                        </van-button>
                    </div>
                </flexbox-item>
                <flexbox-item :span="1 / 2">
                    <div style="text-align:right;">
                        <van-button
                            style="border: 0px;font-size: 17px;"
                            @click="onClickConfirm"
                        >
                            确认
                        </van-button>
                    </div>
                </flexbox-item>
            </flexbox>

            <flexbox
                :gutter="0"
                v-for="assignUser in assignUserList"
                :key="assignUser.id"
                class="mylist"
            >
                <flexbox-item :span="1 / 8">
                    <div>
                        <van-checkbox
                            v-model="assignUser.select"
                            style="touch-action: none;"
                        ></van-checkbox>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div>
                        <span>{{ assignUser.name }}</span>
                        <span style="margin-left:10px;color:#999999;">{{
                            assignUser.phone
                        }}</span>
                    </div>
                    <flexbox
                        :gutter="0"
                        style="font-size:small;margin-top:5px;"
                    >
                        <flexbox-item :span="1 / 2">
                            <div>
                                <van-checkbox
                                    v-model="assignUser.admin"
                                    :disabled="!assignUser.select"
                                    style="touch-action: none;"
                                >
                                    <span slot="default" style="color:#999999;"
                                        >管理员</span
                                    >
                                </van-checkbox>
                            </div>
                        </flexbox-item>
                        <flexbox-item :span="1 / 2">
                            <div>
                                <van-checkbox
                                    v-model="assignUser.path"
                                    :disabled="!assignUser.select"
                                    style="touch-action: none;"
                                >
                                    <span slot="default" style="color:#999999;"
                                        >项目参与</span
                                    >
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
import { beforeCreateOrder, CreateOrder, getOrder } from '@/api/order'
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
    props: ['id'],
    components: {
        Flexbox,
        FlexboxItem
    },
    data: function () {
        return {
            show: false,
            checked: true,
            assignUserList: [],
            data: {
                id: null,
                name: null,
                summary: null,
                examine: false,
                module: { notice: 0, document: 0, contact: 0, myorder: 0, talkover: 0 },
                user: []
            },
            lable: ''
        }
    },

    methods: {
        showPopup () {
            this.show = true
        },
        onClickConfirm () {
            this.show = false
            this.lable = ''
            this.data.user = []
            this.assignUserList.forEach(item => {
                if (item.select) {
                    this.lable += (item.name + '   ')
                    this.data.user.push({ user: item.id, admin: item.admin, path: item.path })
                }
            })
        },
        onClickHide () {
            this.show = false
            for (let i = 0; i < this.assignUserList.length; i++) {
                this.assignUserList[i].admin = false
                this.assignUserList[i].path = false
                this.assignUserList[i].select = false
                for (let j = 0; j < this.data.user.length; j++) {
                    if (this.assignUserList[i].id === this.data.user[j].user) {
                        this.assignUserList[i].admin = this.data.user[j].admin
                        this.assignUserList[i].path = this.data.user[j].path
                        this.assignUserList[i].select = true
                    }
                }
            }
        },
        dataSave () {
            Object.keys(this.data.module).forEach(key => {
                if (this.data.module[key] === true || this.data.module[key] === 1) {
                    this.data.module[key] = 1
                } else {
                    this.data.module[key] = 0
                }
            })
            this.data.user.forEach(item => {
                if (item.admin) {
                    item.admin = 1
                } else {
                    item.admin = 0
                }
                if (item.path) {
                    item.path = 1
                } else {
                    item.path = 0
                }
            })
            CreateOrder(this.data).then(ret => {
                this.$router.go(-1)
            })
        }
    },
    created: function () {
        beforeCreateOrder().then(data => {
            data.result.user.forEach(item => {
                let param = {
                    id: item.id,
                    name: item.name,
                    phone: item.phone,
                    admin: false,
                    path: false,
                    select: false
                }
                this.assignUserList.push(param)
            })
            this.data.module.notice = data.result.systemmodule.notice
            this.data.module.document = data.result.systemmodule.document
            this.data.module.contact = data.result.systemmodule.contact
            this.data.module.myorder = data.result.systemmodule.myorder
            this.data.module.talkover = data.result.systemmodule.talkover
        })
        if (this.id > 0) {
            getOrder().then(ret => {
                this.data = ret
            })
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