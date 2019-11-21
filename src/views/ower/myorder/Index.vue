<template>
    <div>
        <van-nav-bar
            fixed
            title="订单"
            left-arrow
            @click-left="onClickLeft"
            right-text="新订单"
            @click-right="onClickRight"
        />
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                @load="onLoad"
                finished-text="没有更多了"
                style="margin-top:55px;"
            >
                <van-cell
                    v-for="item in orderlist"
                    :key="item.id"
                    :title="item.name"
                    :to="'/ower/myorder/show/'+item.id"
                >
                    <div slot="default">
                        <div>{{ item.amount }}</div>
                        <div>
                            <van-tag plain>{{ item.assign }}</van-tag>
                        </div>
                        <div style="font-size:10px;">{{ item.user }}</div>
                    </div>
                    <div slot="label" class="van-multi-ellipsis--l2">
                        {{ item.summary }}
                    </div>
                </van-cell>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, List, Cell, CellGroup, Tag, PullRefresh } from 'vant'
import { getOrderList } from '@/api/ower/myorder/myorder'
import { parse } from 'path'
Vue.use(NavBar)
Vue.use(List)
Vue.use(Cell).use(CellGroup)
Vue.use(Tag)
Vue.use(PullRefresh)

export default {
    data () {
        return {
            orderlist: [],
            page: 1,
            loading: false,
            finished: false,
            isLoading: false
        }
    },
    methods: {
        onClickLeft () {
            this.$router.go(-1)
        },
        onClickRight () {
            this.$router.push('/ower/myorder/new')
        },
        onLoad () {
            this.refreshdata('up')
        },
        onRefresh () {
            // this.orderlist = []
            this.page = 1
            this.finished = false
            this.refreshdata('down')
        },
        refreshdata (value) {
            getOrderList(this.page).then(data => {
                if (data.status === 200) {
                    if (value === 'down') {
                        this.orderlist = []
                    }
                    data.result.data.forEach(el => {
                        let param = {
                            id: el.id,
                            name: el.name,
                            summary: el.summary,
                            assign: el.assign,
                            amount: '￥' + parseFloat(el.amount).toFixed(2),
                            user: '由' + el.user + '创建于' + el.date
                        }
                        this.orderlist.push(param)
                    });
                    if (data.result.finished === 1) {
                        this.finished = true
                    }
                    this.loading = false
                    this.isLoading = false
                    this.page++
                }
            })
        }
    },
    created () {
        // getOrderList().then(data => {
        //     if (data.status === 200) {
        //         data.result.data.forEach(el => {
        //             let param = {
        //                 id: el.id,
        //                 name:el.name,
        //                 summary:el.summary,
        //                 assign: el.assign,
        //                 amount: '￥' + parseFloat(el.amount).toFixed(2),
        //                 user: '由' + el.user + '创建于' + el.date
        //             }
        //             this.orderlist.push(param)
        //         });
        //     }
        // })
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
</style>