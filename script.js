// responsive logo ipsum slider
$('.sliderlogo').slick({
   arrows: false,
   dots: false,
   infinite: true,
   autoplay: false,
   speed: 300,
   slidesToShow: 5,
   sliderToScroll: 1,
   responsive: [{
      breakpoint: 1024,
      settings: {
         slidesToShow:4,
         sliderToScroll: 1,
         infinite: true,
         dots: false,
      }
   },
   {
      breakpoint: 600,
      settings: {
         slidesToShow: 2,
         sliderToScroll: 1,
      }
   },
   ]
});

// faq section
document.addEventListener('DOMContentLoaded', function(){
   let accordionButtons = document.querySelectorAll('.accordion-button');
   let acoimg = document.querySelectorAll('.accordion-button img');

   accordionButtons.forEach(function(button, index){
      button.addEventListener('click', function(){
         let collapse = this.parentElement.nextElementSibling;

         // close all the other accordion items
         accordionButtons.forEach(function (otherButton, otherIndex){
            if(otherButton !== button){
               let otherCollapse = otherButton.parentElement.nextElementSibling;
               otherCollapse.style.maxHeight = null;

               // reset the image source and rotation for other accordian items
               acoimg[otherIndex].src = 'images/icon/plus.png';
               acoimg[otherIndex].style.transform = 'rotate(0deg)';
               otherButton.style.backgroundColor = '#fff'
            }
         });

         //toggle the clicked according item
         if(collapse.style.maxHeight){
            collapse.style.maxHeight = null;
            //reset the image source, rotation and background color when collapsing
            acoimg[index].src = "images/icon/plus.png";
            acoimg[index].style.transform = "rotate(90deg)"
            button.style.backgroundColor = '';
         } else {
            collapse.style.maxHeight = collapse.scrollHeight + "px";
            //change the image source, set rotation and background color when expanding
            acoimg[index].src = "images/icon/menus.png";
            acoimg[index].style.transform = "rotate(180deg)"
            button.style.backgroundColor = "#c1b0b5"
         }
      });
   });
});


// footer validation start

const fom = document.getElementById('footer-form');
const footerMessage = document.getElementById('footer-message')

fom.addEventListener('submit', (event)=> {
   event.preventDefault();
   footerMessage.innerHTML = '~ Form Submitted successfully'
   footerMessage.style.display = 'flex';
   fom.reset();
   setTimeout(() => {
      footerMessage.style.display = 'none'
   }, 3000);
})


// button back to top

window.onscroll = function(){
   scrollFunction()
}

function scrollFunction() {
   if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      document.getElementById('backToTopBtn').style.display = 'block';
   } else {
      document.getElementById('backToTopBtn').style.display = 'none';
   }
}

function scrollToTop() {
   const scrollToTopBtn = document.documentElement || document.body;
   scrollToTopBtn.scrollIntoView({
      behavior: 'smooth'
   })
}


// copy gmail to clipboard

function copyEmail(event) {
   event.preventDefault();
   const email = 'gm.agency.ai@gmail.com';
   navigator.clipboard.writeText(email).then(function() {
       showAlert();
   }, function(err) {
       console.error('Could not copy email: ', err);
   });
}

function showAlert() {
   const alert = document.getElementById('alert');
   alert.classList.add('show');
   setTimeout(function() {
       alert.classList.remove('show');
   }, 3000);
}


// services section
const scrollContainer = document.querySelector('.card-container');

        function scrollRight() {
            scrollContainer.scrollBy({
                left: 50,
                behavior: 'smooth'
            });
        }

        // Add keyboard navigation support
        scrollContainer.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                scrollContainer.scrollBy({
                    left: 250,
                    behavior: 'smooth'
                });
            }
            if (e.key === 'ArrowLeft') {
                scrollContainer.scrollBy({
                    left: -250,
                    behavior: 'smooth'
                });
            }
        });