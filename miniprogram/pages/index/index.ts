// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    imgUrls: [
      "../../images/swiper01.jpg",
      "../../images/swiper02.jpg",
      "../../images/swiper03.jpg",
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500,
    homeList: [{
      src: '../../images/pro_01.jpg',
      content: '22周岁以上即可\n最快3小时下款\n件均8万，最高20万',
      title: '精英贷'
    },{
      src: '../../images/pro_02.jpg',
      content: '不看工作，不看流水\n不限地区，无须家人签字\n最高可放款150万',
      title: '月供贷'
    },{
      src: '../../images/pro_03.jpg',
      content: '凭新版征信和保单官网账号密码即可进件最高可贷50万',
      title: '保单贷'
    }]
    },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  }
})