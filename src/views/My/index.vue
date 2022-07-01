<template>
  <div class="my-container">
    <div v-if="user" class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image round fit="cover" class="avatar" :src="userInfo.photo"></van-image>
          <span class="name">{{ userInfo.name }}</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">{{ userInfo.art_count }}</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userInfo.follow_count }}</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userInfo.fans_count }}</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userInfo.like_count }}</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
    <div v-else class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="">
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <van-grid class="grid-nav" :column-num="2" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-shoucang"></i>
        <span slot="text" class="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-lishi"></i>
        <span slot="text" class="text">历史</span>
      </van-grid-item>
    </van-grid>
    <van-cell title="消息通知" is-link></van-cell>
    <van-cell class="mb-9" title="小智同学" is-link></van-cell>
    <van-cell clickable @click="onLogout" v-if="user" class="logout-cell" title="退出登录"></van-cell>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {getUserInfo} from '@/api/user'

export default {
  name: 'index',
  data() {
    return {
      userInfo: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created() {
    if (this.user) {
      this.loadUserInfo()
    }
  },
  methods: {
    onLogout() {
      this.$dialog.confirm({
        title: '确认退出吗?'
      }).then(() => {
        this.$store.commit('setUser', null)
      }).catch(() => {

      })
    },
    async loadUserInfo() {
      try {
        const {data} = await getUserInfo()
        this.userInfo = data.data
        console.log(this.userInfo)
      } catch (err) {
        this.$toast('获取用户信息失败,请稍后重试')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my-container {
  .header {
    height: 180px;
    background: url("~@/assets/banner.png");
    background-size: cover;
  }

  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;

    .login-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .mobile-img {
        width: 65px;
        height: 65px;
        margin-bottom: 8px;
      }

      .text {
        font-size: 14px;
        color: #fff;
      }
    }
  }

  .user-info {
    .base-info {
      height: 115px;
      //background-color: pink;
      padding: 38px 16px 11px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        align-items: center;

        .avatar {
          width: 66px;
          height: 66px;
          margin-right: 11px;
          border: 4px solid #ffffff;
        }

        .name {
          font-size: 15px;
          color: white;
        }
      }
    }

    .data-stats {
      //background-color: #ccc;
      display: flex;

      .data-item {
        height: 65px;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;

        .count {
          font-size: 18px;
        }

        .text {
          font-size: 11px;
        }
      }
    }
  }

  .grid-nav {
    .grid-item {
      height: 70px;

      i.toutiao {
        font-size: 22px;
      }

      .toutiao-shoucang {
        color: #eb5253;
      }

      .toutiao-lishi {
        color: #ff9d1d;
      }

      span.text {
        font-size: 14px;
      }
    }
  }

  .logout-cell {
    text-align: center;
    color: #d86262;
  }

  .mb-9 {
    margin-bottom: 9px;
  }
}
</style>
