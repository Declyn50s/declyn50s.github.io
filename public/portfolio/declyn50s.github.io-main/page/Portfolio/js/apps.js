//Remove Image in @media//

 


// JS pour CV //
(function() {
  $('.skills-prog li').find('.skills-bar').each(function(i) {
    $(this).find('.bar').delay(i * 150).animate({
      width: $(this).parents().attr('data-percent') + '%'
    }, 1000, 'linear', function() {
      return $(this).css({
        'transition-duration': '.5s'
      });
    });
  });

  $('.skills-soft li').find('svg').each(function(i) {
    var c, cbar, circle, percent, r;
    circle = $(this).children('.cbar');
    r = circle.attr('r');
    c = Math.PI * (r * 2);
    percent = $(this).parent().data('percent');
    cbar = ((100 - percent) / 100) * c;
    circle.css({
      'stroke-dashoffset': c,
      'stroke-dasharray': c
    });
    circle.delay(i * 150).animate({
      strokeDashoffset: cbar
    }, 1000, 'linear', function() {
      return circle.css({
        'transition-duration': '.3s'
      });
    });
    $(this).siblings('small').prop('Counter', 0).delay(i * 150).animate({
      Counter: percent
    }, {
      duration: 1000,
      step: function(now) {
        return $(this).text(Math.ceil(now) + '%');
      }
    });
  });

}).call(this);

// Menu Full Page Effect //
$('.open-overlay').click(function() {
  var overlay_navigation = $('.overlay-navigation'),
    nav_item_1 = $('nav li:nth-of-type(1)'),
    nav_item_2 = $('nav li:nth-of-type(2)'),
    nav_item_3 = $('nav li:nth-of-type(3)'),
    nav_item_4 = $('nav li:nth-of-type(4)'),
    nav_item_5 = $('nav li:nth-of-type(5)'),
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom');

  overlay_navigation.toggleClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {

    top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
    middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
    bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
    nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
    nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
    nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
    nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
    nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
  } else {
    top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
    middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
    bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
    nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
    nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
    nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
    nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
    nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
  }
})  
  
  // tabs

  var tabLinks = document.querySelectorAll(".tablinks");
  var tabContent = document.querySelectorAll(".tabcontent");
  
  
  tabLinks.forEach(function(el) {
     el.addEventListener("click", openTabs);
  });
  
  
  function openTabs(el) {
     var btnTarget = el.currentTarget;
     var country = btnTarget.dataset.country;
  
     tabContent.forEach(function(el) {
        el.classList.remove("active");
     });
  
     tabLinks.forEach(function(el) {
        el.classList.remove("active");
     });
  
     document.querySelector("#" + country).classList.add("active");
     
     btnTarget.classList.add("active");
  }
  

/* ===== Home Effect  ===== */
window.onload = function () {
    Particles.init({
      selector: ".background"
    });
  };
  const particles = Particles.init({
    selector: ".background",
    color: ["#03dac6", "#ff0266", "#000000"],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ["#faebd7", "#03dac6", "#ff0266"],
          maxParticles: 43,
          connectParticles: false
        }
      }
    ]
  });





  
  
  class NavigationPage {
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      this.lastScroll = 0;
      let self = this;
      $(".nav-tab").click(function () {
        self.onTabClick(event, $(this));
      });
      $(window).scroll(() => {
        this.onScroll();
      });
      $(window).resize(() => {
        this.onResize();
      });
    }
  
    onTabClick(event, element) {
      event.preventDefault();
      let scrollTop =
        $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
      $("html, body").animate({ scrollTop: scrollTop }, 600);
    }
  
    onScroll() {
      this.checkHeaderPosition();
      this.findCurrentTabSelector();
      this.lastScroll = $(window).scrollTop();
    }
  
    onResize() {
      if (this.currentId) {
        this.setSliderCss();
      }
    }
  
    checkHeaderPosition() {
      const headerHeight = 75;
      if ($(window).scrollTop() > headerHeight) {
        $(".nav-container").addClass("nav-container--scrolled");
      } else {
        $(".nav-container").removeClass("nav-container--scrolled");
      }
      let offset =
        $(".nav").offset().top +
        $(".nav").height() -
        this.tabContainerHeight -
        headerHeight;
      if (
        $(window).scrollTop() > this.lastScroll &&
        $(window).scrollTop() > offset
      ) {
        $(".nav-container").addClass("nav-container--move-up");
        $(".nav-container").removeClass("nav-container--top-first");
        $(".nav-container").addClass("nav-container--top-second");
      } else if (
        $(window).scrollTop() < this.lastScroll &&
        $(window).scrollTop() > offset
      ) {
        $(".nav-container").removeClass("nav-container--move-up");
        $(".nav-container").removeClass("nav-container--top-second");
        $(".nav-container-container").addClass("nav-container--top-first");
      } else {
        $(".nav-container").removeClass("nav-container--move-up");
        $(".nav-container").removeClass("nav-container--top-first");
        $(".nav-container").removeClass("nav-container--top-second");
      }
    }
  
    findCurrentTabSelector(element) {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      $(".nav-tab").each(function () {
        let id = $(this).attr("href");
        let offsetTop = $(id).offset().top - self.tabContainerHeight;
        let offsetBottom =
          $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if (
          $(window).scrollTop() > offsetTop &&
          $(window).scrollTop() < offsetBottom
        ) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      });
      if (this.currentId != newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }
  
    setSliderCss() {
      let width = 0;
      let left = 0;
      if (this.currentTab) {
        width = this.currentTab.css("width");
        left = this.currentTab.offset().left;
      }
      $(".nav-tab-slider").css("width", width);
      $(".nav-tab-slider").css("left", left);
    }
  }
  
  new NavigationPage();


  /*************** POP UP ***************** */
  function openPopup(popup) {
    /* Open popup and make accessible screen readers */
    $(popup).show().attr("aria-hidden", "false");
    /* Focus on element to guide screen readers to popup */
    $("#closePopup").focus();
  }
  
  function closePopup(popup) {
    /* Close popup and hide from screen readers */
    $(popup).hide().attr("aria-hidden", "true");
    /* Focus screen readers back to button */
    $("#openMyPopup").focus();
  }
  /****/
  function openPopup2(popup2) {
    /* Open popup and make accessible screen readers */
    $(popup2).show().attr("aria-hidden", "false");
    /* Focus on element to guide screen readers to popup */
    $("#closePopup2").focus();
  }
  
  function closePopup2(popup2) {
    /* Close popup and hide from screen readers */
    $(popup2).hide().attr("aria-hidden", "true");
    /* Focus screen readers back to button */
    $("#openMyPopup2").focus();
  }
  /****/
  function openPopup3(popup3) {
    /* Open popup and make accessible screen readers */
    $(popup3).show().attr("aria-hidden", "false");
    /* Focus on element to guide screen readers to popup */
    $("#closePopup2").focus();
  }
  
  function closePopup3(popup3) {
    /* Close popup and hide from screen readers */
    $(popup3).hide().attr("aria-hidden", "true");
    /* Focus screen readers back to button */
    $("#openMyPopup3").focus();
  }

/********************************  MES COMPETENCES **** */
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

