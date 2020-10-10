
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



