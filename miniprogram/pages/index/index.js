"use strict";
var app = getApp();
Page({
    onShareAppMessage: function () {
        return {
            title: 'swiper',
            path: 'page/component/pages/swiper/swiper'
        };
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
            }, {
                src: '../../images/pro_02.jpg',
                content: '不看工作，不看流水\n不限地区，无须家人签字\n最高可放款150万',
                title: '月供贷'
            }, {
                src: '../../images/pro_03.jpg',
                content: '凭新版征信和保单官网账号密码即可进件最高可贷50万',
                title: '保单贷'
            }]
    },
    changeIndicatorDots: function () {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        });
    },
    changeAutoplay: function () {
        this.setData({
            autoplay: !this.data.autoplay
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFDaEMsSUFBSSxDQUFDO0lBQ0gsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxRQUFRO1lBQ2YsSUFBSSxFQUFFLG9DQUFvQztTQUMzQyxDQUFBO0lBQ0gsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRTtZQUNQLDJCQUEyQjtZQUMzQiwyQkFBMkI7WUFDM0IsMkJBQTJCO1NBQzFCO1FBQ0QsYUFBYSxFQUFFLElBQUk7UUFDbkIsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDZixRQUFRLEVBQUUsQ0FBQztnQkFDVCxHQUFHLEVBQUUseUJBQXlCO2dCQUM5QixPQUFPLEVBQUUsK0JBQStCO2dCQUN4QyxLQUFLLEVBQUUsS0FBSzthQUNiLEVBQUM7Z0JBQ0EsR0FBRyxFQUFFLHlCQUF5QjtnQkFDOUIsT0FBTyxFQUFFLG1DQUFtQztnQkFDNUMsS0FBSyxFQUFFLEtBQUs7YUFDYixFQUFDO2dCQUNBLEdBQUcsRUFBRSx5QkFBeUI7Z0JBQzlCLE9BQU8sRUFBRSwyQkFBMkI7Z0JBQ3BDLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQztLQUNEO0lBRUgsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7U0FDeEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQzlCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuUGFnZSh7XG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ3N3aXBlcicsXG4gICAgICBwYXRoOiAncGFnZS9jb21wb25lbnQvcGFnZXMvc3dpcGVyL3N3aXBlcidcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICBpbWdVcmxzOiBbXG4gICAgICBcIi4uLy4uL2ltYWdlcy9zd2lwZXIwMS5qcGdcIixcbiAgICAgIFwiLi4vLi4vaW1hZ2VzL3N3aXBlcjAyLmpwZ1wiLFxuICAgICAgXCIuLi8uLi9pbWFnZXMvc3dpcGVyMDMuanBnXCIsXG4gICAgICBdLFxuICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIGludGVydmFsOiAyMDAwLFxuICAgICAgZHVyYXRpb246IDUwMCxcbiAgICBob21lTGlzdDogW3tcbiAgICAgIHNyYzogJy4uLy4uL2ltYWdlcy9wcm9fMDEuanBnJyxcbiAgICAgIGNvbnRlbnQ6ICcyMuWRqOWygeS7peS4iuWNs+WPr1xcbuacgOW/qzPlsI/ml7bkuIvmrL5cXG7ku7blnYc45LiH77yM5pyA6auYMjDkuIcnLFxuICAgICAgdGl0bGU6ICfnsr7oi7HotLcnXG4gICAgfSx7XG4gICAgICBzcmM6ICcuLi8uLi9pbWFnZXMvcHJvXzAyLmpwZycsXG4gICAgICBjb250ZW50OiAn5LiN55yL5bel5L2c77yM5LiN55yL5rWB5rC0XFxu5LiN6ZmQ5Zyw5Yy677yM5peg6aG75a625Lq6562+5a2XXFxu5pyA6auY5Y+v5pS+5qy+MTUw5LiHJyxcbiAgICAgIHRpdGxlOiAn5pyI5L6b6LS3J1xuICAgIH0se1xuICAgICAgc3JjOiAnLi4vLi4vaW1hZ2VzL3Byb18wMy5qcGcnLFxuICAgICAgY29udGVudDogJ+WHreaWsOeJiOW+geS/oeWSjOS/neWNleWumOe9kei0puWPt+WvhueggeWNs+WPr+i/m+S7tuacgOmrmOWPr+i0tzUw5LiHJyxcbiAgICAgIHRpdGxlOiAn5L+d5Y2V6LS3J1xuICAgIH1dXG4gICAgfSxcblxuICBjaGFuZ2VJbmRpY2F0b3JEb3RzKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBpbmRpY2F0b3JEb3RzOiAhdGhpcy5kYXRhLmluZGljYXRvckRvdHNcbiAgICB9KVxuICB9LFxuXG4gIGNoYW5nZUF1dG9wbGF5KCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhdXRvcGxheTogIXRoaXMuZGF0YS5hdXRvcGxheVxuICAgIH0pXG4gIH1cbn0pIl19