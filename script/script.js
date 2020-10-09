
    let hamberger=document.querySelector('.hamberger');
    let times=document.querySelector('.times');
    let mobileNav=document.querySelector('.mobile-nav');

    

    hamberger.addEventListener('click',function(){
        mobileNav.classList.add('open');

    });
    times.addEventListener('click',function(){
        mobileNav.classList.remove('open');
    });

    //contact form//

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzpHB099VqyGJfHbQhL02wmvSldX8X0AcfYGaGv/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")
  
        }
    })
  })



  /*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('mobile_nav')
  navMenu.classList.remove('open')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// });

// /*SCROLL HOME*/
// sr.reveal('.header nav .left',{}); 
// sr.reveal('.hero .left img',{delay: 200}); 
// sr.reveal('.hero .right',{delay: 400}); 
// sr.reveal('.btn-primary',{ interval: 200}); 
// sr.reveal('.btn-secondary',{ interval: 200}); 
// sr.reveal('header nav',{ interval: 200}); 


// /*SCROLL ABOUT*/
// sr.reveal('.about__img',{}); 
// sr.reveal('.about__subtitle',{delay: 400}); 
// sr.reveal('.about__text',{delay: 400}); 

// /*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle',{}); 
// sr.reveal('.skills__text',{}); 
// sr.reveal('.skills__data',{interval: 200}); 
// sr.reveal('.skills__img',{delay: 600});

// /*SCROLL WORK*/
// sr.reveal('.work__img',{interval: 200}); 

// /*SCROLL CONTACT*/
// sr.reveal('.contact__input',{interval: 200}); 
