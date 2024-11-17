const navSlider=()=>{
    const burger=document.querySelector('.burger');
    const navLinks=document.querySelector('.links');
    const navList=document.querySelectorAll('.links li');

     burger.addEventListener('click', () => {
        //toggle nav
     navLinks.classList.toggle('nav-active');
        //Animate 
     navList.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation='';
        }
        else{
        link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7+0.02}s`;
        }   
     });
      //burger Animation
      burger.classList.toggle('atoggle');
  });
}

function redirectToLink(url) {
    window.location.href = url;
}

const app=()=>{
    navSlider();
   
}
app();