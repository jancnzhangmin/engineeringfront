<template>
    <div style="height:100%;background-color:white;">
        <van-nav-bar
            title="公告"
            left-arrow
            @click-left="onClickLeft"
            right-text="编辑"
            @click-right="onClickRight"
        />
        <van-row>
            <van-col
                span="24"
                style="text-align:center;padding:10px;padding-bottom:5px;margin-top:10px;"
                >{{ this.name }}</van-col
            >
        </van-row>
        <van-row>
            <van-col
                span="24"
                style="text-align:right;padding-right:10px;padding-bottom:5px;font-size:12px;color:#999999;"
            >
                {{ this.created_by }}创建于{{ this.created_at }}
            </van-col>
        </van-row>
        <van-row>
            <van-col span="24" style="padding:5px;">
                {{ this.notice }}
            </van-col>
        </van-row>
        <van-button
            type="danger"
            v-show="this.show_delete"
            @click="onDelete"
            block
            style="position: absolute;bottom:0px;"
            >删除</van-button
        >
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Row, Col, Button, Dialog } from 'vant'
import { showNotice, deleteNotice } from '@/api/ower/notice'
import global from '@/store/global.js'
Vue.use(NavBar)
Vue.use(Row).use(Col)
Vue.use(Button)

export default {
    props: ['id'],
    data () {
        return {
            noticeid: '',
            name: '',
            notice: '',
            created_by: '',
            created_at: '',
            show_delete: false
        }
    },
    methods: {
        onClickLeft () {
            this.$router.go(-1)
        },
        onClickRight () {
            this.$router.push('/ower/notice/edit/' + this.id)
        },
        onDelete () {
            Dialog.confirm({
                title: '删除',
                message: '确认删除公告？'
            }).then(() => {
                deleteNotice(this.id).then(res => {
                    this.$router.go(-1)
                })
            }).catch(() => {
                // on cancel
            })
        }
    },
    created () {
        showNotice(this.id).then(data => {
            this.noticeid = data.result.noticeid
            this.name = data.result.name
            this.notice = data.result.notice
            this.created_by = data.result.created_by
            this.created_at = data.result.created_at
            if (data.result.token === global.userinfo.usertoken) {
                this.show_delete = true
            }
        })
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