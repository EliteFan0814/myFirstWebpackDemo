import $ from 'jquery'

function secondMenu() {
  $(function () {
    $('.second-menu').hover(function () {
      $(this).children('.nav-toggle-list').stop().slideToggle("normal");
      // $(".nav-toggle-list").slideToggle("normal");
    })
  })
}

export default secondMenu