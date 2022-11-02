const swiper = new Swiper(".mySwiper", {
    speed: 1000,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"><img src="./assets/img/client/client_${index + 1}.png" /></span>`;
      },
    },
  });