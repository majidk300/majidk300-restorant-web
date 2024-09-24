let lists = document.getElementById('lists');
let bars = document.getElementById('bars');

bars.onclick = ()=>{
    bars.classList.toggle('fa-times');
    
    if(bars.classList.contains('fa-times')){
        bars.style.backgroundColor='#27ae60';
        bars.style.color='#fff';

        lists.classList.toggle('active');
    }
    else{
        bars.style.backgroundColor='';
        bars.style.color='';
        lists.classList.toggle('active');
    }
}


let sections = document.querySelectorAll('.section'); // Select sections by class
let navLinks = document.querySelectorAll('.header .lists ul a'); // Select nav links

window.onscroll = () => { 
    
    bars.classList.remove('fa-times');
    lists.classList.remove('active');
    
    sections.forEach(section => {
        let top = window.scrollY; 
        let height = section.offsetHeight; 
        let offset = section.offsetTop - 150; 
        let id = section.getAttribute('id'); 
        

        if (top >= offset && top < offset + height) { 
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.header .lists ul a[href*='+id+']').classList.add('active'); 
            });
        };
    });
};

 
// search  form 
let search = document.querySelector('#searchBox');
let searchBox = document.querySelector('#search-form');
let closeSearch = document.querySelector('#close');

search.addEventListener('click',()=>{
    searchBox.classList.toggle('active');
});

closeSearch.addEventListener('click',()=>{
    searchBox.classList.remove('active');
})


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
  });



  //loader
  let allContents = document.querySelector('.allContents');
  let loader = document.querySelector('.loader'); 

  window.onload = function(){

    setTimeout(function(){
        loader.style.display='none';
        allContents.style.display='block';
    },3000); 

  };



  