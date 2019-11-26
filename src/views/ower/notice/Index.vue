<template>
    <div>
        <van-nav-bar
            title="公告"
            right-text="新建公告"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
                finished-text="没有更多了"
                :finished="finished"
                v-model="loading"
                @load="onLoad"
                style="margin-top:10px;"
            >
                <van-cell
                    v-for="value in list"
                    :key="value.id"
                    :title="value.name"
                    :to="'/ower/notice/show/' + value.id"
                >
                    <div slot="default">
                        <badge v-show="value.unread"></badge>
                    </div>
                    <div slot="label" class="van-multi-ellipsis--l2">
                        {{ value.notice }}
                    </div>
                </van-cell>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, NavBar, List, PullRefresh } from 'vant'
import { Badge } from 'vux'
import { getNoticeList } from '@/api/ower/notice'

Vue.use(Cell).use(CellGroup)
Vue.use(NavBar)
Vue.use(List)
Vue.use(PullRefresh)
export default {
    components: {
        Badge
    },
    data () {
        return {
            page: 1,
            list: [],
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
            this.$router.push('/ower/notice/new')
        },
        onLoad () {
            this.refreshdata('up')
            this.page++
        },
        onRefresh () {
            // this.list = []
            this.finished = false
            this.page = 1
            this.refreshdata('down')
        },
        refreshdata (direct) {
            getNoticeList(this.page).then(data => {
                if (direct === 'down') {
                    this.list = []
                    this.isLoading = false
                }
                data.result.notices.forEach(element => {
                    this.list.push(Object.assign({}, element))
                })
                this.loading = false
                if (data.result.finished === 1) {
                    this.finished = true
                }
            })
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
.van-cell__title {
    -webkit-box-flex: unset;
    -webkit-flex: auto;
    flex: auto;
    width: 90%;
}
</style>