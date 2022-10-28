function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$("#dark-mode, #dark-mode-sidebar").click(function(){
    $("body, .form-control, input").toggleClass("dark-mode");
    $("footer").toggleClass("dark-mode-footer");
    $('header').toggleClass("dm-header");
    $('nav').toggleClass("navbar-dark");
    $('main').toggleClass("dm-main");
    $(".wrapper").toggleClass("dm-wrapper");
    $(".card, .card-body").toggleClass("dm-card");
    $("#article h5, h3, .panel").toggleClass("dm-text");
    $(".btn-light").toggleClass("btn-dark");
    $(".modal-content").toggleClass("dm-md-content");
});

$("#registr-sidebar, #registr").click(function() {
  $("#myModal").css("display","block",closeNav());
});

$("#button_signup").click(function(){
    if ($("#inputLogin").val() == "" || $("#inputPassword").val() == "") {
      $('#danger').css("visibility" ,'visible');
      $("#danger p").text("Enter login or password");
      setTimeout(function() {
        $('#danger').css("visibility", "hidden")}, 2000);
    }
    else{
      $("#inputLogin").val("");
      $("#inputPassword").val("");
      $('#success').css("visibility" ,'visible');
      $("#success p").text("You have logged in");
      setTimeout(function() {
        $('#success').css("visibility", "hidden")}, 2000);
      $("#myModal").css("display","none");
      var audio_send = new Audio('sound/sound_send.wav')
      audio_send.play();
    }
});

$("#button_reg").click(function(){
    if ($("#regLogin").val() == "" || $("#regPassword").val() == "" || $("#retRegPassword").val() == "" || $("#regEmail").val() == "") {
      $('#danger').css("visibility" ,'visible');
      $("#danger p").text("Fill in all the fields");
      setTimeout(function() {
        $('#danger').css("visibility", "hidden")}, 2000);
    }
    else if ($("#regPassword").val() != $("#retRegPassword").val()) {
      $('#danger').css("visibility" ,'visible');
      $("#danger p").text("The repeated password was entered incorrectly.");
      setTimeout(function() {
        $('#danger').css("visibility", "hidden")}, 2000);
    }
    else{
      $("#regLogin").val("");
      $("#regEmail").val("");
      $("#regPassword").val("");
      $("#retRegPassword").val("");
      $('#success').css("visibility" ,'visible');
      $("#success p").text("Registration was successful!!!");
      setTimeout(function() {
        $('#success').css("visibility", "hidden")}, 2000);
      $("#myModal").css("display","none");
      var audio_send = new Audio('sound/sound_send.wav')
      audio_send.play();
    }
});

$("#button-toRegistr").click(function() {
  $(".sign-up").css("display","none");
  $(".form-registration").css("display","block");
});

$("#button-Auth").click(function() {
  $(".form-registration").css("display","none");
  $(".sign-up").css("display","block");
});

/**
* Template Name: Maxim - v4.9.0
* Template URL: https://bootstrapmade.com/maxim-free-onepage-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(ev) {
  if (ev.target == modal) {
    modal.style.display = "none";
  }
}

//modal contenr

//Sidebar
const icons = document.querySelectorAll('.icon');

let i = 0;

function clickNavBtn() {
  icons.forEach (icon => {
    icon.addEventListener('click', () => {
      icon.classList.toggle("open");
      if (i == 0){
        openNav();
        i = 1;
      }
      else{
        closeNav();
        i = 0;
      }
  });
  });
}

//button from footer
let nameEmail = document.getElementById('exampleFormControlInput1');
let btn = document.getElementById('button_send');


function buttonClick(){

if (nameEmail.value == ""){
  buttonMouseout();
  var audio_error = new Audio('sound/sound_error.wav')
  audio_error.play();
  document.querySelector('#danger').style.visibility = 'visible';
  setTimeout(function() {
  document.querySelector('#danger').style.visibility = "hidden"; }, 2000);

}
else{
    nameEmail.value="";
    var audio_send = new Audio('sound/sound_send.wav')
    audio_send.play();
    document.getElementById('exampleFormControlTextarea1').value="";
    document.querySelector('#success').style.visibility = 'visible';
    setTimeout(function() {
    document.querySelector('#success').style.visibility = "hidden";}, 2000);

}
}

function buttonMouseover(){
    if (nameEmail.value == ""){
      document.querySelector('#warning').style.visibility = 'visible';}
}
function buttonMouseout(){
      document.querySelector('#warning').style.visibility = 'hidden';
}
btn.addEventListener('click', buttonClick);
btn.addEventListener('mouseover', buttonMouseover);
btn.addEventListener('mouseout', buttonMouseout);


document.addEventListener('keypress', (e) => {
  switch (e.key) {
    case "#":
      document.location.href = "index.html";
      break;
    case "$":
      document.location.href = "index_news.html";
      break;
    case "%":
      document.location.href = "index_dev.html";
      break;
    case "^":
      document.location.href = "index_games.html";
      break;
    case "&":
      document.location.href = "index_movie.html";
      break;
  }
});
