const navbar = document.querySelector('.navbar');
const allMenu = document.querySelector('.allMenu');
const sticky = navbar.offsetTop;
alert('Untuk dosen Bahasa Inggris ku yang cantik. Kalau ada blog mahasiswa sekelas ku yang sama berarti meraka yang lihat ke saya ya...')
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    allMenu.classList.add('sticky1');
  } else {
    navbar.classList.remove('sticky');
    allMenu.classList.remove('sticky1');
  }
}

function searchCardBlog() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const cardList = document.querySelectorAll('.blogJudul');
  for (card of cardList) {
    if (card.innerText.toLowerCase().includes(input)) {
      card.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
    } else {
      card.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
    }
  }
}
function searchCardBlog1() {
  const input1 = document.querySelector('.search-input').value.toLowerCase();
  const cardList = document.querySelectorAll('.blogJudul');
  for (card of cardList) {
    if (card.innerText.toLowerCase().includes(input1)) {
      card.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
    } else {
      card.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
    }
  }
}

function searchReturn() {
  const cardList = document.querySelectorAll('.blogJudul');
  const gaada = document.querySelector('.gaada');
  for (card of cardList) {
    card.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
  }
  gaada.style.display = 'none';
}

window.onscroll = function () {
  myFunction();
};

document.querySelector('.menuButton').addEventListener('click', function () {
  const allMenu = document.querySelector('.allMenu');
  if (allMenu.style.display === 'none') {
    allMenu.style.display = 'block';
  } else {
    allMenu.style.display = 'none';
  }
});

document.getElementById('search-logo').addEventListener('click', function () {
  searchCardBlog();
  const input = (document.getElementById('search-input').value = '');
  const container = document.querySelector('.container-card');
  const main = document.querySelector('.container-main');
  main.style.flexDirection = 'column';
  if (container.innerText == '') {
    const isi = document.createElement('h3');
    isi.innerText = 'Blog Tidak Ditemukan!';
    isi.style.color = 'red';
    isi.style.paddingTop = '50px';
    isi.style.paddingBottom = '50px';
    isi.classList.add('gaada');
    container.appendChild(isi);
  }
});
document.querySelector('.search-logo').addEventListener('click', function () {
  searchCardBlog1();
  const input = (document.querySelector('.search-input').value = '');
  const container = document.querySelector('.container-card');
  const main = document.querySelector('.container-main');
  main.style.flexDirection = 'column';
  if (container.innerText == '') {
    const isi = document.createElement('h3');
    isi.innerText = 'Blog Tidak Ditemukan!';
    isi.style.color = 'red';
    isi.style.paddingTop = '50px';
    isi.style.paddingBottom = '50px';
    isi.classList.add('gaada');
    container.appendChild(isi);
  }
});
const container = document.querySelector('.container-card');

document.querySelector('.kembali1').addEventListener('click', function () {
  searchReturn();
});
document.querySelector('.kembali').addEventListener('click', function () {
  searchReturn();
});
