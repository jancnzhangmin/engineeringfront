<template>
  <div>
    <div ref="notice">
      <van-sticky :container="notice">
        <van-cell-group>
          <van-cell title="公告" style="background:#4679cc;color:white;">
            <span slot="icon" class="iconfont icon-gonggao" style="margin-right:10px;"></span>
          </van-cell>
        </van-cell-group>
      </van-sticky>
      <van-cell-group>
        <van-cell value="内容" v-for="count in 5" :key="count">
          <div slot="title" class="van-multi-ellipsis--l2">这是一段最多显示两行</div>
          <div
            slot="label"
            class="van-multi-ellipsis--l2"
          >这是一段最多显示两行的文字文字文字文字文字文字文字文字文字文字文字文字文字文字，gmf q再多一点点</div>
          <van-tag color="#4679cc" plain slot="default">二小区项目</van-tag>
          <br />
          <van-tag color="#ffffffff" text-color="#999999">张敏创建于16小时前</van-tag>
        </van-cell>
      </van-cell-group>
    </div>
    <div ref="examine">
      <van-sticky :container="examine">
        <van-cell-group>
          <van-cell title="审核" style="background:#4679cc;color:white;">
            <span slot="icon" class="iconfont icon-shenhe" style="margin-right:10px;"></span>
          </van-cell>
        </van-cell-group>
      </van-sticky>
      <van-cell-group>
        <van-cell value="内容" v-for="count in 5" :key="count">
          <div slot="title" class="van-multi-ellipsis--l2">二小区楼梯修复</div>
          <div slot="label" class="van-multi-ellipsis--l2">项目进度修改为已完成</div>
          <van-tag color="#4679cc" plain slot="default">二小区项目</van-tag>
          <br />
          <van-tag type="warning" plain slot="default">待审核</van-tag>
          <br />
          <van-tag color="#ffffffff" text-color="#999999">张敏创建于2019-10-26</van-tag>
        </van-cell>
      </van-cell-group>
    </div>
    <div ref="order">
      <van-sticky :container="order">
        <van-cell-group>
          <van-cell title="订单" style="background:#4679cc;color:white;">
            <span slot="icon" class="iconfont icon-icon--copy" style="margin-right:10px;"></span>
          </van-cell>
        </van-cell-group>
      </van-sticky>
      <van-cell-group>
        <van-cell value="内容" v-for="count in 5" :key="count">
          <div slot="title" class="van-multi-ellipsis--l2">修复地插</div>
          <div slot="label" class="van-multi-ellipsis--l2">金额：￥450.00元</div>
          <van-tag color="#4679cc" plain slot="default">二小区项目</van-tag>
          <br />
          <van-tag color="#ffffffff" text-color="#999999">张敏创建于16小时前</van-tag>
        </van-cell>
      </van-cell-group>
    </div>
    <div ref="document">
      <van-sticky :container="document">
        <van-cell-group>
          <van-cell title="文档" style="background:#4679cc;color:white;">
            <span slot="icon" class="iconfont icon-gonggao" style="margin-right:10px;"></span>
          </van-cell>
        </van-cell-group>
      </van-sticky>
      <van-cell-group>
        <van-cell value="内容" v-for="count in 5" :key="count">
          <div slot="title" class="van-multi-ellipsis--l2">这是一段最多显示两行</div>
          <van-tag color="#4679cc" plain slot="default">二小区项目</van-tag>
          <br />
          <van-tag color="#ffffffff" text-color="#999999">张敏创建于16小时前</van-tag>
        </van-cell>
      </van-cell-group>
    </div>
    <div ref="follow">
      <van-sticky :container="follow">
        <van-cell-group>
          <van-cell title="关注" style="background:#4679cc;color:white;">
            <span slot="icon" class="iconfont icon-guanzhu" style="margin-right:10px;"></span>
          </van-cell>
        </van-cell-group>
      </van-sticky>
      <van-cell-group>
        <van-cell value="内容" v-for="count in 5" :key="count">
          <div slot="title" class="van-multi-ellipsis--l2">提交工作进度审核</div>
          <div slot="label" class="van-multi-ellipsis--l2">进度完成调整至80%</div>
          <van-tag color="#4679cc" plain slot="default">中科院</van-tag>
          <br />
          <van-tag color="#ffffffff" text-color="#999999">张敏提交于16小时前</van-tag>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Sticky, Cell, CellGroup, Tag } from 'vant'

Vue.use(Sticky)
Vue.use(Cell).use(CellGroup)
Vue.use(Tag)
export default {
  data () {
    return {
      notice: null,
      examine: null,
      order: null,
      document: null,
      follow: null
    }
  },
  mounted () {
    this.notice = this.$refs.notice
    this.examine = this.$refs.examine
    this.order = this.$refs.order
    this.document = this.$refs.document
    this.follow = this.$refs.follow
  }
}
</script>
