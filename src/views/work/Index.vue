<template>
    <div>
        <van-search show-action>
            <span slot="action" style="color:#4679cc;" @click="onCreatework"
                >新建任务</span
            >
        </van-search>
        <van-tabs v-model="active" sticky animated color="#4679cc">
            <van-tab>
                <div slot="title">
                    <span>新建</span>
                    <badge
                        slot="title"
                        text="11"
                        style="position: absolute;margin-left:-3px;margin-top:3px;"
                    ></badge>
                </div>
                <work-list />
            </van-tab>
            <van-tab>
                <div slot="title">
                    <span>进行中</span>
                    <badge
                        slot="title"
                        text="11"
                        style="position: absolute;margin-left:-3px;margin-top:3px;"
                    ></badge>
                </div>
                <work-list />
            </van-tab>
            <van-tab title="完成">
                <work-list />
            </van-tab>
            <van-tab title="审核">
                <work-list />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs, Search } from 'vant'
import { Badge } from 'vux'
import WorkList from './components/WorkList'

Vue.use(Tab).use(Tabs)
Vue.use(Search)

export default {
    components: {
        Badge,
        WorkList
    },
    data () {
        return {
            active: 0
        }
    },
    methods: {
        onCreatework () {
            this.$router.push('/creatework')
        }
    }

}
</script>
<style scoped>
.van-tab span {
    display: inline-block;
}
.vux-badge {
    background: transparent;
    color: #f74c31;
    border-color: #f74c31;
    border: solid 1px;
}
</style>