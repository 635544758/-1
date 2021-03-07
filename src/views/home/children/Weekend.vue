<template>
  <div class="recommend">
    <div class="infos">
      <div class="title">周末去哪儿</div>
      <div class="info" v-for="obj in infoList" :key="obj.id">
        <div class="info-left">
          <img :src="obj.imgUrl" alt="" class="info-img" />
        </div>
        <div class="info-right">
          <p class="info-title">{{ obj.title }}</p>
          <p class="info-content">{{ obj.content }}</p>
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
          title: "三亚之旅",
          content: "陪你去三亚，陪你去天涯海角",
          imgUrl:
            "//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/24d074328b5a26845ebb92be20b38754.jpg",
        },
        {
          id: 2,
          title: "意大利之旅",
          content: "在秘密花园，领略意大利风情",
          imgUrl:
            "//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/729fced755d522ccfc280ef155f45518.jpg",
        },
        {
          id: 3,
          title: "青海圆梦行",
          content: "带着相机去旅行，圆一场青海梦",
          imgUrl:
            "//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/e86b37fef48851353d6f5ae0090cc974.jpg",
        },
        {
          id: 4,
          title: "澳大利亚之旅",
          content: "澳洲的美，留在图里也要藏在心底",
          imgUrl:
            "//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/6ff48e0e00432f823bf593deec6d3397.jpg",
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
    box-sizing: border-box;
    .info-left {
      overflow: hidden;
      height: 0;
      padding-bottom: 60%;
      .info-img {
        width: 100%;
      }
    }
    .info-right {
      padding-left: 0.2rem;
      border-bottom: 2px solid #f9f9f9;
      .info-title {
        font-size: 0.25rem;
        font-weight: 700;
        padding-top: 0.1rem;
      }
      .info-content {
        font-size: 0.2rem;
        padding: 0.2rem 0 0.1rem 0;
        color: #ccc;
      }
    }
  }
}
</style>