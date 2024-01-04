let navToggler = document.querySelector('.nav-toggler')
let navLinks = document.querySelector('.nav-links')
let year = document.getElementById('year')
let toggler = true
let resizeTimer
let date = new Date().getFullYear()

year.innerHTML = date

window.addEventListener("resize", ()=>{
    if(document.body.clientWidth>1074)
        toggler = false
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          document.body.classList.remove("resize-animation-stopper");
        }, 400);
});

navToggler.addEventListener('click', ()=>{
    if(toggler){
        toggler = false
        navToggler.classList.add('toggle')
        navLinks.classList.add('nav-active')
    }else{
        toggler = true
        navToggler.classList.remove('toggle')
        navLinks.classList.remove('nav-active')
    }
})