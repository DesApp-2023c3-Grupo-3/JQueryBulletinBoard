import { onYouTubeIframeAPIReady } from './youtube-api-initializer'

export const initializeCarousel = function ($, id, data, type) {
  $(document).ready(function() {
    let currentIndex = 0;

    (data.items || []).forEach(anItem => {
      $(`#carousel-${id} .carousel-items`).append(anItem.content);
      if (anItem.video) {
        onYouTubeIframeAPIReady(anItem.video, anItem.video)
      }
    });

    const $carouselItem = $(`#carousel-${id} .carousel-item`);
    const totalItems = $carouselItem.length;
    // const intervalTime = data.durationTime || 1000;
    let autoPlayInterval;

    function goToSlide(index) {
      if (index >= totalItems) {
        index = 0;
      } else if (index < 0) {
        index = totalItems - 1;
      }

      // Hide all slides except the current one
      $carouselItem.each(function(i) {
        if (i === index) {
          $(this).css('display', type || 'revert');  // Show the active slide
        } else {
          $(this).css('display', 'none');   // Hide inactive slides
        }
      });

      currentIndex = index;
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startAutoplay() {
      const intervalTime = Number(data.items.at(currentIndex).duration || 1) * 1000
      autoPlayInterval = setInterval(nextSlide, intervalTime);
    }

    function stopAutoplay() {
      clearInterval(autoPlayInterval);
    }

    $('.next').on('click', function() {
      stopAutoplay();
      nextSlide();
      startAutoplay();
    });

    $('.prev').on('click', function() {
      stopAutoplay();
      prevSlide();
      startAutoplay();
    });

    // Initialize the carousel by showing the first slide and hiding others
    goToSlide(currentIndex);
    startAutoplay();
  });
};
