window.onscroll = function () {
  myFunction();
};
const navbar = document.querySelector('.navbar');
const allMenu = document.querySelector('.allMenu');
const sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    allMenu.classList.add('sticky1');
  } else {
    navbar.classList.remove('sticky');
    allMenu.classList.remove('sticky1');
  }
}

document.querySelector('.menuButton').addEventListener('click', function () {
  const allMenu = document.querySelector('.allMenu');
  if (allMenu.style.display === 'none') {
    allMenu.style.display = 'block';
  } else {
    allMenu.style.display = 'none';
  }
});
