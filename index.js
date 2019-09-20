const menu = document.querySelector('.menu__inner');
const nav = document.querySelector('nav');

let showMenu = false;

menu.addEventListener('click', toggleMenu);

function toggleMenu(){
  if(!showMenu){
    nav.classList.add('open');
    showMenu = true;
  } else {
    nav.classList.remove('open');
    showMenu = false;
  }
}