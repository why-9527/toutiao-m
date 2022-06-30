<template>
  <div class="my-container">
    <div class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="">
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <div class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image round fit="cover" class="avatar" src="https://img.yzcdn.cn/vant/cat.jpeg"></van-image>
          <span class="name">黑马头条号</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">获赞</span>
        </div>
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
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {}
  },
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
}
</style>
