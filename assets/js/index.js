const navbar = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove ("nav-scrolled");
    }
  });

  var swiper = new Swiper(".mySwiper", {
    zoom: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    center:true,
    autoplay:true,
    responsive:{
        320:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1024:{
            items:4
        },
        1280:{
            items:5
        }
    }})

    // var modal = document.getElementById("modal");
    // var btn = document.getElementById("btn01");
    // var span = document.getElementsByClassName("close-btn")[0];
    
    // btn.onclick = function() {
    //   // modal.style.display = "block";
    //   console.log("osaidjaosidj")
    // }
    
    // span.onclick = function() {
    //   modal.style.display = "none";
    // }
    