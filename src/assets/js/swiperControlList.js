import Swiper from 'swiper'

function swiperControlList() {
  var mySwiper = new Swiper('#swiper1', {
    autoplay: { // 可选选项，自动滑动
      delay: 3000
    },
    initialSlide: 0, // 初始默认轮播图
    direction: 'horizontal', // 垂直切换选项
    height: 300,
    speed: 500,
    loop: true, // 循环模式选项

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var mySwiper2 = new Swiper('#swiper2', {
    slidesPerView: 4,
    autoplay: { // 可选选项，自动滑动
      delay: 3000
    },
    initialSlide: 1, // 初始默认轮播图
    direction: 'horizontal', // 垂直切换选项
    height: 300,
    speed: 500,
    loop: true, // 循环模式选项

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var mySwiper3 = new Swiper('#swiper3', {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: { // 可选选项，自动滑动
      delay: 3000
    },
    initialSlide: 1, // 初始默认轮播图
    direction: 'horizontal', // 垂直切换选项
    height: 300,
    speed: 500,
    loop: true, // 循环模式选项

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
  })
}
export default swiperControlList