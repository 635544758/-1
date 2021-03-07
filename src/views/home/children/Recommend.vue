<template>
  <div class="recommend">
    <div class="infos">
      <div class="title">热销推荐</div>
      <div class="info" v-for="obj in infoList" :key="obj.id">
        <div class="info-left">
          <img :src="obj.imgUrl" alt="" class="info-img" />
        </div>
        <div class="info-right">
          <p class="info-title">{{ obj.title }}</p>
          <p class="info-content">{{ obj.content }}</p>
          <button class="info-btn">查看详情</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      infoList: [
        {
          id: 1,
          title: "成都熊猫之旅",
          content: "含往返飞机票+5晚住宿",
          imgUrl:
            "//imgs.qunarzz.com/p/p97/1512/73/97da2a9e39df59f7.jpg_256x160_acb41adf.jpg",
        },
        {
          id: 2,
          title: "九寨沟之旅",
          content: "含往返飞机票+8晚住宿",
          imgUrl:
            "//imgs.qunarzz.com/p/p9/1409/28/8231ad3595d97ee1ffffffffc8d65eac.jpg_256x160_cd751095.jpg",
        },
        {
          id: 3,
          title: "成都自由行",
          content: "含往返飞机票+8晚住宿",
          imgUrl:
            "//imgs.qunarzz.com/p/p19/1809/b9/2a3d362aabcbb02.jpg_256x160_28907832.jpg",
        },
        {
          id: 4,
          title: "云南丽江游",
          content: "含往返飞机票+4晚住宿",
          imgUrl:
            "//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
        },
      ],
    };
  },
};
</script>


<style lang="less" scoped>
.recommend {
  .title {
    font-size: 0.25rem;
    background-color: #ececec;
    padding: 0.2rem 0 0.2rem 0.2rem;
    font-weight: 700;
  }
  .info {
    display: flex;
    padding-left: 0.2rem;
    box-sizing: border-box;
    padding-top: 0.15rem;
    .info-left {
      width: 1.8rem;
      height: 1.5em;
      .info-img {
        width: 100%;
        height: 1.5rem;
      }
    }
    .info-right {
      flex: 1;
      padding-left: 0.2rem;
      border-bottom: 2px solid #f9f9f9;
      .info-title {
        font-size: 0.25rem;
        font-weight: 700;
        padding-top: 0.1rem;
      }
      .info-content {
        font-size: 0.2rem;
        padding: 0.3rem 0 0.2rem 0;
        color: #ccc;
      }
      .info-btn {
        font-size: 0.2rem;
        padding: 0 0.2rem;
        margin-bottom: 0.1rem;
        background-color: #fd8801;
        color: white;
        border-radius: 5px;
      }
    }
  }
}
</style>