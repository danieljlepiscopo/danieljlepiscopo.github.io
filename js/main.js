$(function() {
    init();
  
    // Event Listeners
    $('#menu-btn').click(function() {
      openNav();
    });
  
    $('#close-menu-btn').click(function() {
      closeNav();
    });
  
    $('.menu-link').click(function() {
      closeNav();
    });
  
    // Add Smooth Scrolling
    $("a[href*='#']").click(function() {
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
  
        let target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            500
          );
          return false;
        }
      }
    });
  
    // Functions
    function init() {
      console.log($('#fakeloader')); // Debugging
      $('#fakeloader').fakeLoader({
          timeToHide: 1200,
          zIndex: '9999',
          spinner: 'spinner5',  // Try a different spinner
          bgColor: '#192bc2'
      });
      
      $('#page').show();
  
      new WOW().init();
  
      $('#testimonial-slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 1500
      });
    }
  
    function openNav() {
      $('#menu').css('height', '100%');
    }
  
    function closeNav() {
      $('#menu').css('height', '0%');
    }
  
    $('.dtYear').each(function() {
        $(this).text(new Date().getFullYear());
    });
  
  });