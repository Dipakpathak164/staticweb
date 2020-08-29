// menu show
 const navMenu = document.getElementById('nav-menu');
        toggleMenu =document.getElementById('nav-toggle');
        closeMenu =document.getElementById('nav-close');

//   ///show menu
 toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})
// remove menu
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
})

// //active and remove menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    // active link
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')
    // remove menu mobile
    navMenu.classList.remove('show')
}
 navLink.forEach(n=> n.addEventListener('click', linkAction))

