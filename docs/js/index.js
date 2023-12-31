const navDrop= document.getElementById('nav-drop');
const navToggler= document.getElementById('nav-toggler');

navToggler.addEventListener('click', ()=>{
    navDrop.classList.toggle('hidden');
})