$('.partners-slider').slick({
    arrows:true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<a class="slick-arrow slick-prev"><i class="fa fa-angle-left"></i></a>',
    nextArrow: '<a class="slick-arrow slick-next"><i class="fa fa-angle-right"></i></a>',
    draggable: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
      ]
  });