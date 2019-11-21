<template>
    <div>
        <van-nav-bar
            title="当前项目"
            left-arrow
            @click-left="onClickLeft"
            :right-text="showeditlable"
            @click-right="clickEdit()"
            fixed
        />
        <van-pull-refresh v-model="refresh" @refresh="onRefresh">
            <van-radio-group
                    v-model="radio"
                    class="content"
                    :class="edit ? '' : 'fullbottomcontent'"
                >
        
            
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                >
                    <van-cell-group>
                        <van-cell
                            :title="item.name"
                            clickable
                            @click="onClickItem(item)"
                            v-for="item in list"
                            :key="item.id"
                            :is-link="edit"
                        >
                            <van-radio
                                slot="icon"
                                :name="item.id"
                                style="margin-right:10px;"
                                :class="edit ? 'hied' : ''"
                            />
                            <span slot="label" class="van-multi-ellipsis--l2">{{
                                item.summary
                            }}</span>
                        </van-cell>
                    </van-cell-group>
                </van-list>
            </van-radio-group>
        </van-pull-refresh>
        
        

        <van-button
            v-show="!this.edit"
            block
            to="/ower/currentproject/new"
            color="#4679cc"
            style="position: fixed;bottom: 0px;"
            >新项目</van-button
        >
    </div>
</template>

<script>
import { getProjectList } from '@/api/Project'
import Vue from 'vue'
import {
    NavBar,
    Button,
    RadioGroup,
    Radio,
    Cell,
    CellGroup,
    List,
    PullRefresh
} from 'vant'
Vue.use(NavBar)
Vue.use(PullRefresh)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Cell).use(CellGroup)
Vue.use(Button)
Vue.use(List)
export default {
    data () {
        return {
            radio: 1,
            edit: false,
            showeditlable: '编辑',
            list: [],
            finished: false,
            loading: false,
            page: 1,
            refresh: false
        }
    },
    methods: {
        onClickLeft () {
            this.$router.go(-1)
        },
        clickEdit () {
            if (this.edit) {
                this.edit = false
                this.showeditlable = '编辑'
            } else {
                this.edit = true
                this.showeditlable = '取消编辑'
            }
        },
        onClickItem (data) {
            if (this.edit) {
                this.$router.push('/ower/currentproject/Edit/' + data.id)
            } else {
                if (data.isdefault === 1) {
                    data.isdefault = 0
                    this.radio = 0
                } else {
                    data.isdefault = 1
                    this.radio = data.id
                }
            }
        },
        onLoad () {
            getProjectList(this.page).then(data => {
                if (data.result.length > 0) {
                    data.result.forEach(element => {
                        this.list.push(Object.assign({}, element))
                        if (element.isdefault === 1) {
                            this.radio = element.id
                        }
                    })
                    this.page++
                } else {
                    this.finished = true
                }
                this.loading = false
                this.refresh = false
            }).catch(data => {
                this.finished = true
                this.loading = false
                this.refresh = false
            })
        },
        onRefresh () {
            this.page = 1
            this.list = []
            this.finished = false
            this.onLoad()
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
.content {
    margin-top: 56px;
    background-color: #f6f6f6;
}
.fullbottomcontent {
    padding-bottom: 54px;
}
.hied {
    display: none;
}
</style>