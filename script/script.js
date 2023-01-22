window.onscroll = function () {
  myFunction();
};
const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
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
