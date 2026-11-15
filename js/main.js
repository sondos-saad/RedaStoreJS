let category_nav_list = document.querySelector('.category_nav_list');

// open category nav in header
function open_Category_list (){
    category_nav_list.classList.toggle("active");
}

// swiper
var swiper = new Swiper('.slide-swp ', {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullests: true,
          clickable:true,
        },
        autoplay:{
            delay:2500,
        },
        loop: true
      });




 
