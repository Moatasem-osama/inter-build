
  const partnersSwiper = new Swiper(".partnersSwiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 9, // عدد اللوجوه الظاهرة في نفس الوقت
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { slidesPerView: 3 },
      576: { slidesPerView: 4 },
      768: { slidesPerView: 5 },
      992: { slidesPerView: 9 },
    },
  });