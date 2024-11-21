import { onYouTubeIframeAPIReady } from './youtube-api-initializer'

export const initializeCarousel = function ($, id, data, type) {
  $(document).ready(function() {
    let currentIndex = 0;
    
    $(`#carousel-${id} .carousel-items`).html('');

    function callbacker(){
      nextSlide()
    }

    (data.items || []).forEach(anItem => {
      $(`#carousel-${id} .carousel-items`).append(anItem.content);
      if (anItem.video) {
        anItem.player = onYouTubeIframeAPIReady(anItem.video, anItem.video, callbacker)
      }
    });

    const $carouselItem = $(`#carousel-${id} .carousel-item`);
    const totalItems = $carouselItem.length;
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
      if (data.items[currentIndex]?.video) {
        data.items[currentIndex]?.player.seekTo(0)
        data.items[currentIndex]?.player.pauseVideo()
      }
      goToSlide(currentIndex + 1);
      if (data.items[currentIndex]?.video) {
        data.items[currentIndex]?.player.seekTo(0)
        data.items[currentIndex]?.player.playVideo()
      }
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startAutoplay() {
      const intervalTime = Number(data.items[currentIndex]?.duration || 1) * 1000
      
      if (data.items[currentIndex]?.video) {
        stopAutoplay()
        return
      }
      
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

export const updateCarousel = function ($, id, data, type) {
  // Find the container for carousel items
  const $carouselContainer = $(`#carousel-${id} .carousel-items`);

  // Iterate over the items in data
  (data.items || []).forEach(newItem => {
    const $existingItem = $carouselContainer?.find(`#item-${newItem.id}`);
    
    if ($existingItem.length > 0) {
      // Update existing item if it already exists
      $existingItem.html(newItem.content);
      if (newItem.video) {
        onYouTubeIframeAPIReady(newItem.video, newItem.video);
      }
    } else {
      // Add new item if it doesn't exist
      const $newCarouselItem = $(`<div class="carousel-item" id="item-${newItem.id}">${newItem.content}</div>`);
      $carouselContainer?.append($newCarouselItem);

      if (newItem.video) {
        onYouTubeIframeAPIReady(newItem.video, newItem.video);
      }
    }
  });

  // Update autoplay interval if needed
  updateAutoplayInterval($, id, data);
};

// Helper function to update the autoplay interval based on current items
function updateAutoplayInterval($, id, data) {
  const $carouselContainer = $(`#carousel-${id} .carousel-items`);
  let currentIndex = 0;
  const autoPlayInterval = null

  function startAutoplay() {
    clearInterval($carouselContainer.data('autoPlayInterval'));
    const intervalTime = Number(data.items[currentIndex]?.duration || 1) * 1000;
    autoPlayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % data.items.length;
      goToSlide($, id, currentIndex, data.items.length, data.type);
    }, intervalTime);
    $carouselContainer.data('autoPlayInterval', autoPlayInterval);
  }

  startAutoplay();
}

// Function to show the specific slide
function goToSlide($, id, index, totalItems, type) {
  const $carouselItem = $(`#carousel-${id} .carousel-item`);
  
  $carouselItem.each(function(i) {
    $(this).css('display', i === index ? (type || 'revert') : 'none');
  });
}

export const removeCarouselItem = function ($, id, itemId) {
  // Encuentra el contenedor del carrusel
  const $carouselContainer = $(`#carousel-${id} .carousel-items`);

  // Busca el elemento específico por su ID
  const $itemToRemove = $carouselContainer.find(`#item-${itemId}`);
  
  // Verifica si el elemento existe y elimínalo
  if ($itemToRemove.length > 0) {
    $itemToRemove.remove();
    console.info(`Item ${itemId} eliminado del carrusel ${id}`);
  } else {
    console.info(`Item ${itemId} no encontrado en el carrusel ${id}`);
  }
};

